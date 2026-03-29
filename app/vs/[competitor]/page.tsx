import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCompetitor, getAllCompetitorSlugs } from "@/lib/competitors";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShoppingBag,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

type Props = {
  params: Promise<{ competitor: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor: slug } = await params;
  const c = getCompetitor(slug);
  if (!c) return { title: "Comparison Not Found" };

  return {
    title: `MarkInsight vs ${c.name} — Honest Comparison for Shopify Brands`,
    description: `${c.summary.slice(0, 155)}...`,
    openGraph: {
      title: `MarkInsight vs ${c.name}`,
      description: c.heroSubheadline,
    },
  };
}

export async function generateStaticParams() {
  return getAllCompetitorSlugs().map((slug) => ({ competitor: slug }));
}

type FeatureValue = string | boolean;

function ComparisonCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return <CheckCircle2 className="w-5 h-5 mx-auto" style={{ color: "var(--color-accent)" }} />;
  }
  if (value === false) {
    return <XCircle className="w-5 h-5 mx-auto" style={{ color: "var(--color-muted)" }} />;
  }
  return (
    <span className="text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
      {value}
    </span>
  );
}

export default async function CompetitorPage({ params }: Props) {
  const { competitor: slug } = await params;
  const c = getCompetitor(slug);

  if (!c) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,70,229,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(79,70,229,0.1)",
              border: "1px solid rgba(79,70,229,0.25)",
              color: "#A5B4FC",
            }}
          >
            Honest Comparison
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-foreground)" }}
          >
            {c.heroHeadline}
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-foreground-secondary)" }}
          >
            {c.heroSubheadline}
          </p>
        </div>
      </section>

      {/* Honest summary */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "var(--color-foreground)" }}
            >
              The honest summary
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
              {c.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-muted)" }}>
                {c.name} Pricing
              </div>
              <div className="font-bold" style={{ color: "var(--color-foreground)" }}>
                {c.pricing.their}
              </div>
            </div>
            <div
              className="p-6 rounded-2xl text-center flex items-center justify-center"
              style={{ color: "var(--color-muted)" }}
            >
              <span className="text-2xl">vs</span>
            </div>
            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#34D399" }}>
                MarkInsight Pricing
              </div>
              <div className="font-bold" style={{ color: "var(--color-foreground)" }}>
                {c.pricing.ours}
              </div>
            </div>
          </div>
          {c.pricing.note && (
            <p
              className="text-sm text-center mt-4"
              style={{ color: "var(--color-muted)" }}
            >
              {c.pricing.note}
            </p>
          )}
        </div>
      </section>

      {/* Strengths comparison */}
      <section
        className="py-16"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: "var(--color-foreground)" }}
          >
            Where each tool shines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Their strengths */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "var(--color-background)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <ThumbsUp className="w-5 h-5" style={{ color: "var(--color-muted)" }} />
                <h3 className="font-bold" style={{ color: "var(--color-foreground)" }}>
                  {c.name} is great for…
                </h3>
              </div>
              <ul className="space-y-3">
                {c.theirStrengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--color-muted)" }}
                    />
                    <span style={{ color: "var(--color-foreground-secondary)" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our strengths */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(79,70,229,0.06)",
                border: "1px solid rgba(79,70,229,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <ThumbsUp className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                <h3 className="font-bold" style={{ color: "var(--color-foreground)" }}>
                  MarkInsight is great for…
                </h3>
              </div>
              <ul className="space-y-3">
                {c.ourStrengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--color-primary)" }}
                    />
                    <span style={{ color: "var(--color-foreground-secondary)" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to choose */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: "var(--color-foreground)" }}
          >
            The decision guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <ThumbsDown className="w-5 h-5" style={{ color: "var(--color-muted)" }} />
                <h3 className="font-bold" style={{ color: "var(--color-foreground)" }}>
                  Choose {c.name} if…
                </h3>
              </div>
              <ul className="space-y-3">
                {c.chooseThemIf.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <ArrowRight
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--color-muted)" }}
                    />
                    <span style={{ color: "var(--color-foreground-secondary)" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <ThumbsUp className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                <h3 className="font-bold" style={{ color: "var(--color-foreground)" }}>
                  Choose MarkInsight if…
                </h3>
              </div>
              <ul className="space-y-3">
                {c.chooseMIIf.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span style={{ color: "var(--color-foreground-secondary)" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section
        className="py-16"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: "var(--color-foreground)" }}
          >
            Feature comparison
          </h2>

          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "var(--color-border)" }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-3 border-b"
              style={{
                background: "var(--color-surface-2)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="p-4 text-sm font-semibold" style={{ color: "var(--color-muted)" }}>
                Feature
              </div>
              <div className="p-4 text-center">
                <div className="text-sm font-bold" style={{ color: "var(--color-primary)" }}>
                  MarkInsight
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="text-sm font-bold" style={{ color: "var(--color-foreground)" }}>
                  {c.name}
                </div>
              </div>
            </div>

            {c.features.map((row, i) => {
              if (row.category) {
                return (
                  <div
                    key={`cat-${row.category}`}
                    className="px-4 py-2.5 border-b"
                    style={{
                      background: "var(--color-background)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {row.category}
                    </span>
                  </div>
                );
              }
              return (
                <div
                  key={row.label}
                  className="grid grid-cols-3 border-b"
                  style={{
                    borderColor: "var(--color-border)",
                    background:
                      i % 2 === 0 ? "var(--color-surface)" : "var(--color-background)",
                  }}
                >
                  <div
                    className="p-4 text-sm"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {row.label}
                  </div>
                  <div className="p-4 text-center flex items-center justify-center">
                    <ComparisonCell value={row.markinsight} />
                  </div>
                  <div className="p-4 text-center flex items-center justify-center">
                    <ComparisonCell value={row.competitor} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {c.faqs.length > 0 && (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: "var(--color-foreground)" }}
            >
              Common questions
            </h2>
            <div className="space-y-4">
              {c.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-2xl"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h3 className="font-semibold mb-2" style={{ color: "var(--color-foreground)" }}>
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-foreground-secondary)" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other comparisons */}
      <section
        className="py-12"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-semibold mb-6" style={{ color: "var(--color-foreground)" }}>
            Compare more alternatives
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "vs Polar Analytics", href: "/vs/polar-analytics" },
              { label: "vs Peel Insights", href: "/vs/peel-insights" },
              { label: "vs Lebesgue", href: "/vs/lebesgue" },
              { label: "vs Northbeam", href: "/vs/northbeam" },
            ]
              .filter((link) => !link.href.includes(slug))
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: "var(--color-background)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-foreground-secondary)",
                  }}
                >
                  {link.label} <ArrowRight className="inline w-3.5 h-3.5 ml-1" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-3xl p-12"
            style={{
              background: "linear-gradient(135deg, var(--color-primary) 0%, #7C3AED 100%)",
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Try MarkInsight free
            </h2>
            <p className="text-indigo-100 mb-8 max-w-lg mx-auto">
              Install free on Shopify in 5 minutes. No credit card, no GMV fees, no lock-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://apps.shopify.com/markinsight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                style={{ background: "white", color: "var(--color-primary)" }}
              >
                <ShoppingBag className="w-5 h-5" />
                Install Free on Shopify
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                View Pricing <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

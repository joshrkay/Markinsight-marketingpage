import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, ShoppingBag } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Flat Pricing for Shopify Analytics",
  description:
    "MarkInsight pricing: Free ($0), Growth ($49/mo), Enterprise ($149/mo). No GMV-based fees. No percentage of revenue. Just flat, honest pricing for Shopify analytics.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Full attribution to get you started — no credit card required.",
    cta: "Install Free",
    ctaHref: "https://apps.shopify.com/markinsight",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "$49",
    period: "per month",
    description: "Everything a scaling DTC brand needs. Flat pricing, always.",
    cta: "Start Growth",
    ctaHref: "https://apps.shopify.com/markinsight",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "per month",
    description: "For teams and multi-brand operators who need more.",
    cta: "Contact Sales",
    ctaHref: "mailto:hello@markinsight.app",
    highlight: false,
    badge: null,
  },
];

type FeatureValue = boolean | string;

type FeatureRow = {
  label: string;
  free: FeatureValue;
  growth: FeatureValue;
  enterprise: FeatureValue;
  category?: string;
};

const comparisonFeatures: FeatureRow[] = [
  // Attribution
  { label: "Attribution", free: "", growth: "", enterprise: "", category: "Attribution" },
  { label: "Ad channels tracked", free: "1 channel", growth: "6 channels", enterprise: "6 channels" },
  { label: "Attribution window", free: "30 days", growth: "90 days", enterprise: "Custom" },
  { label: "First-party attribution", free: true, growth: true, enterprise: true },
  { label: "Multi-touch attribution", free: false, growth: true, enterprise: true },
  { label: "View-through attribution", free: false, growth: true, enterprise: true },

  // Analytics
  { label: "Analytics", free: "", growth: "", enterprise: "", category: "Analytics" },
  { label: "Shopify-embedded dashboard", free: true, growth: true, enterprise: true },
  { label: "Real-time data sync", free: false, growth: true, enterprise: true },
  { label: "Historical data import", free: "30 days", growth: "2 years", enterprise: "Unlimited" },
  { label: "Custom date ranges", free: false, growth: true, enterprise: true },
  { label: "Revenue breakdown by channel", free: true, growth: true, enterprise: true },

  // AI Features
  { label: "AI Features", free: "", growth: "", enterprise: "", category: "AI Features" },
  { label: "AI-powered insights", free: false, growth: true, enterprise: true },
  { label: "Weekly AI summary email", free: false, growth: true, enterprise: true },
  { label: "Anomaly detection alerts", free: false, growth: true, enterprise: true },
  { label: "Custom AI reports", free: false, growth: false, enterprise: true },

  // Reporting
  { label: "Reporting", free: "", growth: "", enterprise: "", category: "Reporting" },
  { label: "Scheduled email reports", free: false, growth: true, enterprise: true },
  { label: "CSV/Excel export", free: false, growth: true, enterprise: true },
  { label: "API access", free: false, growth: false, enterprise: true },
  { label: "Custom dashboards", free: false, growth: false, enterprise: true },

  // Support & Scale
  { label: "Support & Scale", free: "", growth: "", enterprise: "", category: "Support & Scale" },
  { label: "Email support", free: true, growth: true, enterprise: true },
  { label: "Priority support", free: false, growth: false, enterprise: true },
  { label: "Dedicated onboarding", free: false, growth: false, enterprise: true },
  { label: "Multi-store support", free: false, growth: false, enterprise: true },
  { label: "GMV-based pricing", free: false, growth: false, enterprise: false },
];

const faqs = [
  {
    q: "Is the free plan actually free?",
    a: "Yes. No credit card required. You get real first-party attribution for one ad channel, embedded in Shopify Admin. You can stay on the free plan forever.",
  },
  {
    q: "Do you charge based on my revenue or GMV?",
    a: "Never. MarkInsight charges a flat monthly fee. Whether you're doing $200K or $3M, your analytics bill stays exactly the same. Competitors like Polar Analytics and Triple Whale scale pricing with GMV — we don't.",
  },
  {
    q: "What does 'Shopify-embedded' mean?",
    a: "MarkInsight is built as a Shopify Admin app. You see your analytics directly inside admin.shopify.com — no separate login, no extra tab, no context switching.",
  },
  {
    q: "Which ad channels does MarkInsight track?",
    a: "Growth and Enterprise plans track Meta (Facebook/Instagram), Google Ads, TikTok Ads, Pinterest Ads, Snapchat Ads, and X (Twitter) Ads. The free plan covers one channel of your choice.",
  },
  {
    q: "Can I switch plans or cancel?",
    a: "Absolutely. You can upgrade, downgrade, or cancel at any time directly from Shopify App settings. No lock-in, no cancellation fees.",
  },
  {
    q: "How does MarkInsight compare to Northbeam or Triple Whale?",
    a: "Both charge a percentage of GMV which makes them very expensive for growing brands. MarkInsight is flat pricing at $49/mo. We cover the same core attribution use cases without the scaling cost.",
  },
];

function FeatureCell({ value }: { value: FeatureValue }) {
  if (value === true) {
    return <CheckCircle2 className="w-5 h-5 mx-auto" style={{ color: "var(--color-accent)" }} />;
  }
  if (value === false) {
    return <XCircle className="w-5 h-5 mx-auto" style={{ color: "var(--color-muted)" }} />;
  }
  if (value === "") return null;
  return (
    <span className="text-sm font-medium" style={{ color: "var(--color-foreground-secondary)" }}>
      {value}
    </span>
  );
}

export default function PricingPage() {
  return (
    <>
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
              background: "rgba(16,185,129,0.12)",
              border: "1px solid rgba(16,185,129,0.25)",
              color: "#34D399",
            }}
          >
            No GMV fees. No percentage of revenue. Ever.
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-foreground)" }}
          >
            Flat pricing.{" "}
            <span className="gradient-text">Always.</span>
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-foreground-secondary)" }}
          >
            Other analytics tools charge more as your store grows. MarkInsight doesn&apos;t. Pick a plan
            and your price never changes — no matter your revenue.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="p-8 rounded-2xl relative"
                style={{
                  background: plan.highlight ? "var(--color-primary)" : "var(--color-surface)",
                  border: plan.highlight
                    ? "none"
                    : "1px solid var(--color-border)",
                  boxShadow: plan.highlight ? "0 25px 80px rgba(79,70,229,0.4)" : "none",
                }}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "var(--color-accent)", color: "white" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <h2
                  className="text-sm font-semibold uppercase tracking-wider mb-4"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--color-muted)" }}
                >
                  {plan.name}
                </h2>

                <div className="flex items-end gap-1 mb-1">
                  <span
                    className="text-5xl font-bold"
                    style={{ color: plan.highlight ? "white" : "var(--color-foreground)" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm mb-2"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.6)" : "var(--color-muted)" }}
                  >
                    /{plan.period}
                  </span>
                </div>

                <p
                  className="text-sm mb-8"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--color-foreground-secondary)" }}
                >
                  {plan.description}
                </p>

                <Link
                  href={plan.ctaHref}
                  target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={plan.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block w-full text-center py-3 rounded-xl font-semibold transition-all"
                  style={
                    plan.highlight
                      ? { background: "white", color: "var(--color-primary)" }
                      : {
                          background: "var(--color-surface-2)",
                          border: "1px solid var(--color-border)",
                          color: "var(--color-foreground)",
                        }
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center mt-6 text-sm" style={{ color: "var(--color-muted)" }}>
            All plans include Shopify-embedded dashboard. Cancel anytime. No long-term contracts.
          </p>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ color: "var(--color-foreground)" }}
          >
            Full feature comparison
          </h2>

          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "var(--color-border)" }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-4 border-b"
              style={{
                background: "var(--color-surface-2)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="p-4 text-sm font-semibold" style={{ color: "var(--color-muted)" }}>
                Feature
              </div>
              {plans.map((plan) => (
                <div key={plan.name} className="p-4 text-center">
                  <div
                    className="text-sm font-bold"
                    style={{ color: plan.highlight ? "var(--color-primary)" : "var(--color-foreground)" }}
                  >
                    {plan.name}
                  </div>
                  <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {plan.price}{plan.period !== "forever" ? "/mo" : ""}
                  </div>
                </div>
              ))}
            </div>

            {/* Rows */}
            {comparisonFeatures.map((row, i) => {
              if (row.category) {
                return (
                  <div
                    key={`cat-${row.category}`}
                    className="px-4 py-2.5 border-b"
                    style={{
                      background: "var(--color-surface)",
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
                  className="grid grid-cols-4 border-b"
                  style={{
                    borderColor: "var(--color-border)",
                    background:
                      i % 2 === 0 ? "var(--color-background)" : "var(--color-surface)",
                  }}
                >
                  <div
                    className="p-4 text-sm"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {row.label}
                  </div>
                  <div className="p-4 text-center flex items-center justify-center">
                    <FeatureCell value={row.free} />
                  </div>
                  <div className="p-4 text-center flex items-center justify-center">
                    <FeatureCell value={row.growth} />
                  </div>
                  <div className="p-4 text-center flex items-center justify-center">
                    <FeatureCell value={row.enterprise} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Competitor callout */}
      <section
        className="py-16"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--color-foreground)" }}
          >
            How does MarkInsight compare?
          </h2>
          <p className="mb-8" style={{ color: "var(--color-foreground-secondary)" }}>
            Most Shopify analytics tools scale pricing with your revenue. We don&apos;t.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "vs Polar Analytics", href: "/vs/polar-analytics" },
              { label: "vs Peel Insights", href: "/vs/peel-insights" },
              { label: "vs Lebesgue", href: "/vs/lebesgue" },
              { label: "vs Northbeam", href: "/vs/northbeam" },
            ].map((link) => (
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

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: "var(--color-foreground)" }}
          >
            Pricing FAQ
          </h2>

          {/* JSON-LD structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              }),
            }}
          />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Link
            href="https://apps.shopify.com/markinsight"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            style={{ background: "var(--color-accent)", color: "white" }}
          >
            <ShoppingBag className="w-5 h-5" />
            Install Free on Shopify
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm" style={{ color: "var(--color-muted)" }}>
            5-minute setup · Cancel anytime · No credit card for free plan
          </p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Zap,
  Brain,
  ShoppingBag,
  TrendingUp,
  CheckCircle2,
  Star,
  DollarSign,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MarkInsight — The Shopify Analytics You Deserve",
  description:
    "Free multi-channel attribution embedded in Shopify Admin. Track 6 ad platforms, get AI insights, and ditch GMV-scaled pricing forever.",
};

const features = [
  {
    icon: Globe,
    title: "6 Ad Channels, One View",
    description:
      "Meta, Google, TikTok, Pinterest, Snapchat, and X — all in one dashboard. No jumping between tabs or spreadsheets.",
    color: "var(--color-primary)",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Get plain-English summaries of what's working and what isn't. Your data tells a story — MarkInsight reads it for you.",
    color: "#8B5CF6",
  },
  {
    icon: ShoppingBag,
    title: "Shopify-Embedded",
    description:
      "Lives right inside your Shopify Admin. No separate logins, no context switching. Analytics where you already work.",
    color: "var(--color-accent)",
  },
  {
    icon: DollarSign,
    title: "Flat Pricing, Always",
    description:
      "Pay $49/mo and keep it forever — no matter how fast your revenue grows. Most tools punish success. We don't.",
    color: "#F59E0B",
  },
  {
    icon: TrendingUp,
    title: "Real Attribution",
    description:
      "First-party data attribution that actually works post-iOS 14. Understand which ads drive real purchases, not just clicks.",
    color: "#EC4899",
  },
  {
    icon: Zap,
    title: "Free Tier Included",
    description:
      "Start with full attribution for free. No credit card required. Upgrade when you're ready — not when we force you to.",
    color: "#06B6D4",
  },
];

const testimonials = [
  {
    quote:
      "Finally, attribution that doesn't cost more than my ad spend. MarkInsight pays for itself in the first week.",
    author: "Sarah K.",
    role: "Founder, DTC skincare brand",
    revenue: "$800K/yr",
  },
  {
    quote:
      "The Shopify-embedded dashboard is a game changer. I can see ROAS next to my orders without opening a second app.",
    author: "Marcus T.",
    role: "CEO, apparel brand",
    revenue: "$1.2M/yr",
  },
  {
    quote:
      "We switched from Northbeam and saved $18K a year. The AI summaries are actually useful — not just noise.",
    author: "Priya M.",
    role: "Head of Growth",
    revenue: "$2.4M/yr",
  },
];

const pricingPreview = [
  {
    name: "Free",
    price: "$0",
    description: "Real attribution to start with",
    highlight: false,
    cta: "Install Free",
    features: ["1 ad channel", "30-day attribution window", "Shopify-embedded", "Basic dashboard"],
  },
  {
    name: "Growth",
    price: "$49/mo",
    description: "Everything a growing DTC brand needs",
    highlight: true,
    cta: "Start Growth",
    features: [
      "All 6 ad channels",
      "90-day attribution window",
      "AI-powered insights",
      "Shopify-embedded",
      "Email reports",
      "Flat pricing — no GMV fees",
    ],
  },
  {
    name: "Enterprise",
    price: "$149/mo",
    description: "For teams scaling aggressively",
    highlight: false,
    cta: "Contact Sales",
    features: [
      "Everything in Growth",
      "Custom attribution models",
      "Dedicated onboarding",
      "API access",
      "Priority support",
      "Multi-store support",
    ],
  },
];

const stats = [
  { value: "6", label: "Ad channels tracked" },
  { value: "$0", label: "To get started" },
  { value: "0%", label: "GMV-based pricing" },
  { value: "5 min", label: "To install & connect" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        {/* Gradient orb */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79,70,229,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
            style={{
              background: "rgba(79,70,229,0.12)",
              border: "1px solid rgba(79,70,229,0.3)",
              color: "#A5B4FC",
            }}
          >
            <Zap className="w-3.5 h-3.5" />
            Free tier with real attribution — no credit card required
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            style={{ color: "var(--color-foreground)" }}
          >
            The Shopify Analytics
            <br />
            <span className="gradient-text">You Deserve</span>
          </h1>

          <p
            className="text-xl sm:text-2xl max-w-2xl mx-auto mb-10"
            style={{ color: "var(--color-foreground-secondary)", lineHeight: "1.6" }}
          >
            Multi-channel attribution embedded in Shopify Admin. 6 ad platforms, AI insights,
            flat pricing. Built for DTC brands doing $200K–$3M.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="https://apps.shopify.com/markinsight"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all glow-accent"
              style={{ background: "var(--color-accent)", color: "white" }}
            >
              <ShoppingBag className="w-5 h-5" />
              Install Free on Shopify
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              style={{
                background: "transparent",
                border: "1px solid var(--color-border)",
                color: "var(--color-foreground)",
              }}
            >
              View Pricing
            </Link>
          </div>

          {/* Stats bar */}
          <div
            className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden mx-auto"
            style={{ background: "var(--color-border)" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-8 py-5 text-center"
                style={{ background: "var(--color-surface)" }}
              >
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl overflow-hidden border"
            style={{
              background: "var(--color-surface)",
              borderColor: "var(--color-border)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
            }}
          >
            {/* Mock browser chrome */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b"
              style={{
                background: "var(--color-surface-2)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div
                className="flex-1 mx-4 px-4 py-1 rounded text-xs text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "var(--color-muted)",
                }}
              >
                admin.shopify.com/store/your-store/apps/markinsight
              </div>
            </div>

            {/* Mock dashboard content */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: "var(--color-foreground)" }}>
                    Attribution Overview
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-muted)" }}>Last 30 days</p>
                </div>
                <div
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    color: "#34D399",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                >
                  All 6 channels connected
                </div>
              </div>

              {/* Channel rows */}
              {[
                { name: "Meta Ads", spend: "$12,400", revenue: "$48,200", roas: "3.9x", width: "85%" },
                { name: "Google Ads", spend: "$8,200", revenue: "$28,700", roas: "3.5x", width: "70%" },
                { name: "TikTok Ads", spend: "$4,100", revenue: "$12,300", roas: "3.0x", width: "50%" },
                { name: "Pinterest Ads", spend: "$1,800", revenue: "$4,320", roas: "2.4x", width: "30%" },
              ].map((channel) => (
                <div
                  key={channel.name}
                  className="mb-4"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>
                      {channel.name}
                    </span>
                    <div className="flex gap-6 text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
                      <span>Spend: {channel.spend}</span>
                      <span>Revenue: {channel.revenue}</span>
                      <span
                        className="font-semibold"
                        style={{ color: "var(--color-accent)" }}
                      >
                        ROAS: {channel.roas}
                      </span>
                    </div>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "var(--color-surface-2)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: channel.width,
                        background:
                          "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* AI insight callout */}
              <div
                className="mt-6 p-4 rounded-xl"
                style={{
                  background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.2)",
                }}
              >
                <div className="flex gap-3">
                  <Brain className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#A78BFA" }} />
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "#DDD6FE" }}>
                      AI Insight
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
                      Meta Ads drove 58% of attributed revenue this month. Your best performing
                      ad set targets lookalike audiences — consider scaling budget 20–30% before
                      weekend traffic peaks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--color-foreground)" }}
            >
              Everything you need.
              <br />
              <span className="gradient-text">Nothing you don't.</span>
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
              MarkInsight strips away the complexity and delivers attribution that actually helps you
              make better ad spend decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl card card-hover"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${feature.color}18` }}
                >
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--color-primary)" }}
            >
              Explore all features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof / testimonials */}
      <section
        className="py-24"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--color-foreground)" }}
            >
              Trusted by DTC founders
            </h2>
            <p style={{ color: "var(--color-foreground-secondary)" }}>
              Brands doing $200K–$3M who got tired of paying GMV fees for analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="p-6 rounded-2xl"
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: "#F59E0B" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  &quot;{t.quote}&quot;
                </p>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "var(--color-foreground)" }}>
                    {t.author}
                  </div>
                  <div className="text-xs" style={{ color: "var(--color-muted)" }}>
                    {t.role} · {t.revenue}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--color-foreground)" }}
            >
              Simple, flat pricing.
              <br />
              <span className="gradient-text">Always.</span>
            </h2>
            <p
              className="text-xl max-w-xl mx-auto"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
              Other tools charge more as you grow. We don't. Your success shouldn't cost more in analytics fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPreview.map((plan) => (
              <div
                key={plan.name}
                className="p-6 rounded-2xl relative"
                style={{
                  background: plan.highlight ? "var(--color-primary)" : "var(--color-surface)",
                  border: plan.highlight
                    ? "1px solid transparent"
                    : "1px solid var(--color-border)",
                  boxShadow: plan.highlight ? "0 20px 60px rgba(79,70,229,0.4)" : "none",
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "var(--color-accent)", color: "white" }}
                  >
                    Most Popular
                  </div>
                )}
                <div
                  className="text-sm font-semibold mb-2"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--color-muted)" }}
                >
                  {plan.name}
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: plan.highlight ? "white" : "var(--color-foreground)" }}
                >
                  {plan.price}
                </div>
                <div
                  className="text-sm mb-6"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "var(--color-foreground-secondary)" }}
                >
                  {plan.description}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: plan.highlight ? "rgba(255,255,255,0.9)" : "var(--color-accent)" }}
                      />
                      <span style={{ color: plan.highlight ? "rgba(255,255,255,0.9)" : "var(--color-foreground-secondary)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.name === "Enterprise" ? "mailto:hello@markinsight.app" : "https://apps.shopify.com/markinsight"}
                  target={plan.name === "Enterprise" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all"
                  style={
                    plan.highlight
                      ? { background: "white", color: "var(--color-primary)" }
                      : {
                          background: "var(--color-surface-2)",
                          color: "var(--color-foreground)",
                          border: "1px solid var(--color-border)",
                        }
                  }
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
              See full pricing & feature comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-3xl p-12 sm:p-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--color-primary) 0%, #7C3AED 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(255,255,255,0.1), transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to see what's working?
              </h2>
              <p className="text-lg text-indigo-100 mb-8 max-w-xl mx-auto">
                Install MarkInsight free. No credit card. No GMV fees. Just honest attribution
                for Shopify brands.
              </p>
              <Link
                href="https://apps.shopify.com/markinsight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                style={{ background: "white", color: "var(--color-primary)" }}
              >
                <ShoppingBag className="w-5 h-5" />
                Install Free on Shopify
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-sm text-indigo-200">
                Trusted by 200+ Shopify brands · 5-minute setup · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

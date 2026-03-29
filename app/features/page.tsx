import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Brain,
  ShoppingBag,
  Globe,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle2,
  LineChart,
  Target,
  Bell,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Multi-Channel Attribution & AI Insights for Shopify",
  description:
    "MarkInsight features: multi-channel attribution across 6 ad platforms, AI-powered insights, Shopify-embedded dashboards, and automated reporting. Built for DTC brands.",
};

const featureSections = [
  {
    id: "attribution",
    icon: Target,
    iconColor: "var(--color-primary)",
    tag: "Attribution",
    headline: "Attribution that actually works post-iOS 14",
    subheadline:
      "Most ad platforms overclaim. MarkInsight uses first-party Shopify data to show you what actually drove each sale — not what Meta or Google wants you to believe.",
    features: [
      "First-party data connected directly to Shopify",
      "Multi-touch attribution across all channels",
      "View-through attribution for awareness campaigns",
      "Last-click, first-click, and linear models",
      "90-day attribution windows on Growth plan",
      "Custom attribution models on Enterprise",
    ],
    visual: {
      type: "channels",
      channels: [
        { name: "Meta Ads", share: "58%", color: "#4267B2" },
        { name: "Google Ads", share: "24%", color: "#EA4335" },
        { name: "TikTok Ads", share: "11%", color: "#010101" },
        { name: "Pinterest", share: "5%", color: "#E60023" },
        { name: "Other", share: "2%", color: "#6B7280" },
      ],
    },
  },
  {
    id: "ai-insights",
    icon: Brain,
    iconColor: "#8B5CF6",
    tag: "AI Insights",
    headline: "AI that reads your data so you don't have to",
    subheadline:
      "MarkInsight's AI engine analyzes your attribution data daily and surfaces plain-English insights — what's working, what's wasting money, and what to do next.",
    features: [
      "Daily AI summaries of your ad performance",
      "Anomaly detection — know when ROAS drops unexpectedly",
      "Budget allocation recommendations by channel",
      "Trend forecasting based on historical performance",
      "Weekly email digest with key insights",
      "Natural language answers to your data questions",
    ],
    visual: {
      type: "insight",
      insights: [
        {
          type: "positive",
          text: "Meta retargeting campaigns are outperforming prospecting 3.2x — consider shifting 15% of budget to retargeting.",
        },
        {
          type: "warning",
          text: "Google Shopping ROAS dropped 28% this week. Check for competitor bidding changes or inventory issues.",
        },
        {
          type: "info",
          text: "Weekend traffic converts 18% better on mobile. Your current mobile ad budget is under-allocated by ~$800/week.",
        },
      ],
    },
  },
  {
    id: "dashboard",
    icon: BarChart3,
    iconColor: "var(--color-accent)",
    tag: "Dashboard",
    headline: "See everything inside Shopify Admin",
    subheadline:
      "MarkInsight is fully embedded in your Shopify Admin. No separate login, no extra tab, no context switching. Your analytics live where your business lives.",
    features: [
      "Native Shopify Admin app — no separate login",
      "Real-time revenue and order syncing",
      "Customizable date ranges and comparison periods",
      "Channel-by-channel ROAS breakdowns",
      "Order-level attribution view",
      "Mobile-responsive for on-the-go checks",
    ],
    visual: { type: "shopify" },
  },
  {
    id: "channels",
    icon: Globe,
    iconColor: "#F59E0B",
    tag: "Multi-Channel",
    headline: "6 ad channels. One unified view.",
    subheadline:
      "Track Meta, Google, TikTok, Pinterest, Snapchat, and X Ads in one place. Compare ROAS across channels and understand your true blended performance.",
    features: [
      "Meta (Facebook + Instagram Ads)",
      "Google Ads (Search, Shopping, Display, YouTube)",
      "TikTok Ads",
      "Pinterest Ads",
      "Snapchat Ads",
      "X (Twitter) Ads",
    ],
    visual: {
      type: "platforms",
      platforms: ["Meta", "Google", "TikTok", "Pinterest", "Snapchat", "X"],
    },
  },
];

const additionalFeatures = [
  {
    icon: TrendingUp,
    title: "Revenue attribution",
    description: "Track exactly which ads drove each purchase, not just clicks.",
  },
  {
    icon: Bell,
    title: "Anomaly alerts",
    description: "Get notified when ROAS drops, spend spikes, or conversions fall.",
  },
  {
    icon: Mail,
    title: "Weekly email reports",
    description: "Automated performance summaries delivered to your inbox.",
  },
  {
    icon: LineChart,
    title: "Cohort analysis",
    description: "Understand how customers acquired from different channels retain over time.",
  },
  {
    icon: Zap,
    title: "5-minute setup",
    description: "Connect all your ad accounts in under 5 minutes. No developer needed.",
  },
  {
    icon: ShoppingBag,
    title: "Shopify-native",
    description: "Uses Shopify's native API for accurate, first-party order data.",
  },
];

export default function FeaturesPage() {
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
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-4"
            style={{ color: "var(--color-foreground)" }}
          >
            Built for how DTC brands{" "}
            <span className="gradient-text">actually work</span>
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto mb-8"
            style={{ color: "var(--color-foreground-secondary)" }}
          >
            MarkInsight combines multi-channel attribution, AI-powered insights, and Shopify-native
            integration into one focused analytics tool.
          </p>
          <div className="flex justify-center gap-4">
            {featureSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground-secondary)",
                }}
              >
                {section.tag}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature sections */}
      {featureSections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className="py-24"
          style={{
            background: i % 2 === 1 ? "var(--color-surface)" : "var(--color-background)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Content */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
                  style={{
                    background: `${section.iconColor}15`,
                    color: section.iconColor,
                    border: `1px solid ${section.iconColor}30`,
                  }}
                >
                  <section.icon className="w-3.5 h-3.5" />
                  {section.tag}
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-bold mb-4"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {section.headline}
                </h2>
                <p
                  className="text-lg mb-8 leading-relaxed"
                  style={{ color: "var(--color-foreground-secondary)" }}
                >
                  {section.subheadline}
                </p>
                <ul className="space-y-3">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: section.iconColor }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-foreground-secondary)" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div
                  className="rounded-2xl overflow-hidden border p-6"
                  style={{
                    background: "var(--color-surface-2)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {section.visual.type === "channels" && section.visual.channels && (
                    <div>
                      <h3
                        className="text-sm font-semibold mb-4"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        Revenue Attribution by Channel
                      </h3>
                      <div className="space-y-3">
                        {section.visual.channels.map((ch) => (
                          <div key={ch.name}>
                            <div className="flex justify-between text-sm mb-1.5">
                              <span style={{ color: "var(--color-foreground)" }}>{ch.name}</span>
                              <span
                                className="font-semibold"
                                style={{ color: "var(--color-accent)" }}
                              >
                                {ch.share}
                              </span>
                            </div>
                            <div
                              className="h-2 rounded-full overflow-hidden"
                              style={{ background: "var(--color-background)" }}
                            >
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: ch.share,
                                  background: `linear-gradient(90deg, var(--color-primary), var(--color-accent))`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.visual.type === "insight" && section.visual.insights && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <Brain className="w-5 h-5" style={{ color: "#A78BFA" }} />
                        <span className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
                          AI Insights — Today
                        </span>
                      </div>
                      {section.visual.insights.map((insight, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl text-sm"
                          style={{
                            background:
                              insight.type === "positive"
                                ? "rgba(16,185,129,0.08)"
                                : insight.type === "warning"
                                ? "rgba(245,158,11,0.08)"
                                : "rgba(99,102,241,0.08)",
                            border: `1px solid ${
                              insight.type === "positive"
                                ? "rgba(16,185,129,0.2)"
                                : insight.type === "warning"
                                ? "rgba(245,158,11,0.2)"
                                : "rgba(99,102,241,0.2)"
                            }`,
                            color:
                              insight.type === "positive"
                                ? "#34D399"
                                : insight.type === "warning"
                                ? "#FCD34D"
                                : "#A5B4FC",
                          }}
                        >
                          {insight.text}
                        </div>
                      ))}
                    </div>
                  )}

                  {section.visual.type === "shopify" && (
                    <div>
                      <div
                        className="flex items-center gap-2 mb-4 text-xs px-3 py-1.5 rounded"
                        style={{ background: "var(--color-background)", color: "var(--color-muted)" }}
                      >
                        admin.shopify.com/store/your-store/apps/markinsight
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Revenue Today", value: "$4,820", up: true },
                          { label: "Blended ROAS", value: "3.4x", up: true },
                          { label: "Ad Spend Today", value: "$1,418", up: false },
                          { label: "New Orders", value: "47", up: true },
                        ].map((metric) => (
                          <div
                            key={metric.label}
                            className="p-3 rounded-xl"
                            style={{ background: "var(--color-background)" }}
                          >
                            <div
                              className="text-xs mb-1"
                              style={{ color: "var(--color-muted)" }}
                            >
                              {metric.label}
                            </div>
                            <div
                              className="text-xl font-bold"
                              style={{ color: "var(--color-foreground)" }}
                            >
                              {metric.value}
                            </div>
                            <div
                              className="text-xs mt-1"
                              style={{ color: metric.up ? "var(--color-accent)" : "#F87171" }}
                            >
                              {metric.up ? "↑" : "↓"} vs yesterday
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.visual.type === "platforms" && section.visual.platforms && (
                    <div>
                      <h3
                        className="text-sm font-semibold mb-4"
                        style={{ color: "var(--color-foreground)" }}
                      >
                        Connected Ad Platforms
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        {section.visual.platforms.map((platform) => (
                          <div
                            key={platform}
                            className="flex items-center justify-center p-4 rounded-xl text-sm font-medium"
                            style={{
                              background: "var(--color-background)",
                              color: "var(--color-foreground)",
                              border: "1px solid var(--color-border)",
                            }}
                          >
                            <CheckCircle2
                              className="w-4 h-4 mr-1.5"
                              style={{ color: "var(--color-accent)" }}
                            />
                            {platform}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional features grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "var(--color-foreground)" }}
            >
              Everything else you need
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl card card-hover"
              >
                <feature.icon
                  className="w-6 h-6 mb-3"
                  style={{ color: "var(--color-primary)" }}
                />
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
                  {feature.description}
                </p>
              </div>
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
              Try MarkInsight free today
            </h2>
            <p className="text-indigo-100 mb-8 max-w-lg mx-auto">
              Start with the free plan. No credit card required. Full attribution from day one.
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
          </div>
        </div>
      </section>
    </>
  );
}

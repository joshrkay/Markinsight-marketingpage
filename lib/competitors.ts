export type CompetitorFeatureRow = {
  label: string;
  markinsight: string | boolean;
  competitor: string | boolean;
  category?: string;
};

export type Competitor = {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  summary: string;
  theirStrengths: string[];
  ourStrengths: string[];
  chooseThemIf: string[];
  chooseMIIf: string[];
  pricing: {
    their: string;
    ours: string;
    note: string;
  };
  features: CompetitorFeatureRow[];
  faqs: { q: string; a: string }[];
};

export const competitors: Record<string, Competitor> = {
  "polar-analytics": {
    slug: "polar-analytics",
    name: "Polar Analytics",
    tagline: "Polar Analytics vs MarkInsight",
    heroHeadline: "MarkInsight vs Polar Analytics",
    heroSubheadline:
      "Both tools offer Shopify analytics. Here's an honest breakdown of what each does well — and when you should choose one over the other.",
    summary:
      "Polar Analytics is a well-regarded Shopify analytics platform with a strong UI and good data warehouse integrations. It's a solid choice for brands with larger teams and complex BI needs. MarkInsight is built specifically for DTC operators who want attribution and AI insights embedded directly in Shopify Admin — without GMV-scaled pricing.",
    theirStrengths: [
      "Strong data warehouse integrations (Snowflake, BigQuery)",
      "Polished UI with flexible dashboard builder",
      "Good LTV and cohort analysis",
      "Established customer base with case studies",
    ],
    ourStrengths: [
      "Shopify-native embedded app — no separate login",
      "Free tier with real attribution",
      "Flat pricing — no GMV scaling",
      "AI-powered insights built in",
      "6 ad channels on Growth ($49/mo)",
    ],
    chooseThemIf: [
      "You have a data team that needs warehouse integrations",
      "You want a highly customizable BI dashboard",
      "You're doing $5M+ and want deep LTV modeling",
    ],
    chooseMIIf: [
      "You want attribution without leaving Shopify Admin",
      "You're doing $200K–$3M and need flat pricing",
      "You want AI insights without a data analyst",
      "You want a free tier with real attribution",
    ],
    pricing: {
      their: "Starts ~$300/mo, scales with GMV",
      ours: "$0 (free) or $49/mo (Growth)",
      note: "At $1M GMV, Polar can cost $400–600/mo. MarkInsight stays at $49.",
    },
    features: [
      { label: "Pricing", markinsight: "", competitor: "", category: "Pricing" },
      { label: "Starting price", markinsight: "$0/mo (free tier)", competitor: "~$300/mo" },
      { label: "GMV-based pricing", markinsight: false, competitor: true },
      { label: "Free tier", markinsight: true, competitor: false },
      { label: "Attribution", markinsight: "", competitor: "", category: "Attribution" },
      { label: "Multi-channel attribution", markinsight: true, competitor: true },
      { label: "First-party data", markinsight: true, competitor: true },
      { label: "Shopify-embedded", markinsight: true, competitor: false },
      { label: "6 ad channels", markinsight: true, competitor: true },
      { label: "AI Insights", markinsight: "", competitor: "", category: "AI & Reporting" },
      { label: "AI-powered insights", markinsight: true, competitor: false },
      { label: "Automated weekly summaries", markinsight: true, competitor: false },
      { label: "Data warehouse export", markinsight: false, competitor: true },
      { label: "Custom dashboards", markinsight: "Enterprise", competitor: true },
      { label: "Setup", markinsight: "", competitor: "", category: "Setup" },
      { label: "Time to install", markinsight: "5 minutes", competitor: "1–2 days" },
      { label: "Developer required", markinsight: false, competitor: false },
    ],
    faqs: [
      {
        q: "Is MarkInsight cheaper than Polar Analytics?",
        a: "Yes, significantly. Polar Analytics starts around $300/mo and scales with GMV — at $1M revenue it can cost $400–600/mo. MarkInsight is $49/mo flat for Growth, or free to start.",
      },
      {
        q: "Does Polar Analytics have a free plan?",
        a: "No. Polar Analytics requires a paid subscription from day one. MarkInsight offers a free tier with real single-channel attribution, no credit card required.",
      },
      {
        q: "Which has better AI features?",
        a: "MarkInsight includes AI-powered insights on the Growth plan ($49/mo). Polar Analytics does not have a built-in AI insight engine as of 2024.",
      },
    ],
  },

  "peel-insights": {
    slug: "peel-insights",
    name: "Peel Insights",
    tagline: "Peel Insights vs MarkInsight",
    heroHeadline: "MarkInsight vs Peel Insights",
    heroSubheadline:
      "Peel Insights focuses on customer retention analytics. MarkInsight focuses on ad attribution. Here's when each makes sense.",
    summary:
      "Peel Insights is primarily a customer analytics and retention platform — great for understanding cohorts, LTV, and subscription metrics. MarkInsight is purpose-built for ad attribution across 6 channels with AI insights embedded in Shopify Admin. If your main goal is understanding ad performance, MarkInsight is the more focused tool.",
    theirStrengths: [
      "Excellent cohort and LTV analysis",
      "Strong retention and subscription metrics",
      "Good Shopify + Recharge integration",
      "Detailed customer segmentation",
    ],
    ourStrengths: [
      "Multi-channel ad attribution (6 platforms)",
      "Shopify-embedded — no separate login",
      "AI insights on ad performance",
      "Free tier with attribution",
      "Flat $49/mo pricing",
    ],
    chooseThemIf: [
      "Customer retention and LTV are your primary metrics",
      "You run a subscription/DTC brand on Recharge",
      "You need deep cohort analysis beyond ads",
    ],
    chooseMIIf: [
      "Ad attribution across Meta, Google, TikTok is your focus",
      "You want AI-powered ad insights",
      "You want it embedded in Shopify Admin",
      "You need flat pricing without GMV scaling",
    ],
    pricing: {
      their: "Starts ~$149/mo, scales with orders/GMV",
      ours: "$0 (free) or $49/mo (Growth)",
      note: "Peel focuses on retention analytics; MarkInsight focuses on ad attribution. They serve different primary use cases.",
    },
    features: [
      { label: "Pricing", markinsight: "", competitor: "", category: "Pricing" },
      { label: "Starting price", markinsight: "$0/mo (free tier)", competitor: "~$149/mo" },
      { label: "GMV-based pricing", markinsight: false, competitor: true },
      { label: "Free tier", markinsight: true, competitor: false },
      { label: "Core Use Case", markinsight: "", competitor: "", category: "Core Use Case" },
      { label: "Ad channel attribution", markinsight: true, competitor: "Limited" },
      { label: "Customer retention / LTV", markinsight: "Basic", competitor: true },
      { label: "Cohort analysis", markinsight: false, competitor: true },
      { label: "Subscription analytics", markinsight: false, competitor: true },
      { label: "Integration", markinsight: "", competitor: "", category: "Integration" },
      { label: "Shopify-embedded", markinsight: true, competitor: false },
      { label: "AI insights", markinsight: true, competitor: false },
      { label: "6 ad channels", markinsight: true, competitor: false },
    ],
    faqs: [
      {
        q: "Should I use Peel Insights or MarkInsight?",
        a: "It depends on your primary goal. If you want to understand which ads drive revenue across Meta, Google, and TikTok, choose MarkInsight. If you want deep customer cohort and LTV analysis, Peel is better suited.",
      },
      {
        q: "Can I use both Peel Insights and MarkInsight?",
        a: "Yes. They serve different purposes — MarkInsight for ad attribution, Peel for retention analytics. Some brands use both.",
      },
    ],
  },

  lebesgue: {
    slug: "lebesgue",
    name: "Lebesgue",
    tagline: "Lebesgue vs MarkInsight",
    heroHeadline: "MarkInsight vs Lebesgue",
    heroSubheadline:
      "Lebesgue is focused on ad creative analytics. MarkInsight is focused on multi-channel attribution. Here's the honest comparison.",
    summary:
      "Lebesgue specializes in ad creative performance analysis — helping you understand which creatives, copy, and concepts are performing across your ad accounts. MarkInsight focuses on channel-level attribution to understand the true revenue impact of each platform. These tools often complement each other, but if you only need one, the choice depends on your biggest gap.",
    theirStrengths: [
      "Strong ad creative performance analysis",
      "Competitive intelligence on ad creatives",
      "Good at Meta/Facebook creative benchmarking",
      "Useful for creative teams optimizing assets",
    ],
    ourStrengths: [
      "Multi-channel revenue attribution",
      "AI insights on overall ad strategy",
      "Embedded in Shopify Admin",
      "Free tier available",
      "Flat $49/mo — no GMV scaling",
    ],
    chooseThemIf: [
      "Your team produces a lot of ad creatives and needs performance feedback",
      "You want competitive creative benchmarking",
      "Creative optimization is your primary focus",
    ],
    chooseMIIf: [
      "You want to understand which channels drive revenue",
      "You need multi-channel attribution across 6 platforms",
      "You want AI insights on your ad strategy",
      "Budget matters and you want flat pricing",
    ],
    pricing: {
      their: "Starts ~$49/mo, scales with ad spend",
      ours: "$0 (free) or $49/mo (Growth)",
      note: "Similar entry price, but Lebesgue scales with ad spend while MarkInsight stays flat.",
    },
    features: [
      { label: "Pricing", markinsight: "", competitor: "", category: "Pricing" },
      { label: "Starting price", markinsight: "$0/mo (free tier)", competitor: "~$49/mo" },
      { label: "Scales with ad spend", markinsight: false, competitor: true },
      { label: "Free tier", markinsight: true, competitor: false },
      { label: "Features", markinsight: "", competitor: "", category: "Features" },
      { label: "Multi-channel attribution", markinsight: true, competitor: "Limited" },
      { label: "Ad creative analytics", markinsight: false, competitor: true },
      { label: "Competitive intelligence", markinsight: false, competitor: true },
      { label: "AI insights", markinsight: true, competitor: "Limited" },
      { label: "Shopify-embedded", markinsight: true, competitor: false },
      { label: "6 ad channels", markinsight: true, competitor: "2–3 channels" },
    ],
    faqs: [
      {
        q: "Is MarkInsight better than Lebesgue for attribution?",
        a: "Yes. MarkInsight is purpose-built for multi-channel attribution across 6 platforms with first-party Shopify data. Lebesgue focuses on creative analysis, not channel attribution.",
      },
      {
        q: "Can Lebesgue replace MarkInsight?",
        a: "Not if your goal is multi-channel revenue attribution. Lebesgue excels at creative performance; MarkInsight excels at understanding which platforms and campaigns drive actual Shopify revenue.",
      },
    ],
  },

  northbeam: {
    slug: "northbeam",
    name: "Northbeam",
    tagline: "Northbeam vs MarkInsight",
    heroHeadline: "MarkInsight vs Northbeam",
    heroSubheadline:
      "Northbeam is enterprise-level attribution. MarkInsight is built for the $200K–$3M DTC brand who wants flat pricing and real attribution without the enterprise bill.",
    summary:
      "Northbeam is one of the most powerful attribution tools in the market — built for brands spending $500K+ annually on ads. It's sophisticated, accurate, and priced accordingly ($500–2,000+/mo). MarkInsight targets a different customer: the operator-founder running a $200K–$3M Shopify brand who needs solid attribution without a $1,500/mo bill and a 3-week onboarding.",
    theirStrengths: [
      "Best-in-class attribution accuracy at enterprise scale",
      "Very sophisticated multi-touch models",
      "Dedicated customer success for large brands",
      "Deep TV and podcast attribution",
    ],
    ourStrengths: [
      "Free tier — actually free, no credit card",
      "Flat $49/mo for 6-channel attribution",
      "5-minute setup vs multi-week onboarding",
      "Embedded in Shopify — no separate login",
      "AI insights included in Growth plan",
    ],
    chooseThemIf: [
      "You spend $500K+ on ads annually and attribution accuracy is mission-critical",
      "You have a dedicated analytics or growth team",
      "You need TV, podcast, or offline attribution",
      "You're a $5M+ brand where 1% ROAS accuracy is worth $2K/mo",
    ],
    chooseMIIf: [
      "You're doing $200K–$3M and $49/mo > $1,500/mo matters",
      "You want to get started today, not after a 3-week onboarding",
      "You don't have a data team — you need AI to surface insights",
      "You want to stay inside Shopify Admin",
    ],
    pricing: {
      their: "$500–$2,000+/mo depending on ad spend",
      ours: "$0 (free) or $49/mo (Growth)",
      note: "Northbeam is 10–40x more expensive than MarkInsight. For most $200K–$3M brands, the difference in attribution accuracy doesn't justify the cost difference.",
    },
    features: [
      { label: "Pricing", markinsight: "", competitor: "", category: "Pricing" },
      { label: "Starting price", markinsight: "$0/mo (free tier)", competitor: "~$500/mo" },
      { label: "Enterprise pricing", markinsight: "$149/mo", competitor: "$2,000+/mo" },
      { label: "GMV/spend-based pricing", markinsight: false, competitor: true },
      { label: "Free tier", markinsight: true, competitor: false },
      { label: "Attribution", markinsight: "", competitor: "", category: "Attribution" },
      { label: "Multi-channel attribution", markinsight: true, competitor: true },
      { label: "First-party data", markinsight: true, competitor: true },
      { label: "TV / podcast attribution", markinsight: false, competitor: true },
      { label: "6 digital ad channels", markinsight: true, competitor: true },
      { label: "Setup & Use", markinsight: "", competitor: "", category: "Setup & Use" },
      { label: "Time to first data", markinsight: "5 minutes", competitor: "1–3 weeks" },
      { label: "Shopify-embedded", markinsight: true, competitor: false },
      { label: "AI insights included", markinsight: true, competitor: false },
      { label: "Dedicated CSM", markinsight: false, competitor: true },
    ],
    faqs: [
      {
        q: "Is Northbeam more accurate than MarkInsight?",
        a: "Northbeam has more sophisticated models and is built for enterprise-scale ad spend. For brands spending $500K+ on ads, the accuracy difference may justify the cost. For most brands doing $200K–$3M, MarkInsight's first-party attribution is accurate enough to make better decisions.",
      },
      {
        q: "Why is MarkInsight so much cheaper than Northbeam?",
        a: "MarkInsight is purpose-built for the $200K–$3M DTC operator. We focus on what this segment needs — solid attribution, AI insights, embedded in Shopify — without the enterprise features (and enterprise pricing) that Northbeam requires.",
      },
      {
        q: "Can I switch from Northbeam to MarkInsight?",
        a: "Yes. MarkInsight installs in 5 minutes via the Shopify App Store. You can run both in parallel to compare data before committing to the switch.",
      },
    ],
  },
};

export function getCompetitor(slug: string): Competitor | null {
  return competitors[slug] ?? null;
}

export function getAllCompetitorSlugs(): string[] {
  return Object.keys(competitors);
}

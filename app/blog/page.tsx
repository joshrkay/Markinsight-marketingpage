import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Shopify Analytics & DTC Growth",
  description:
    "Guides, strategies, and insights for Shopify brands. Learn multi-channel attribution, ad optimization, and how to grow your DTC brand with data.",
};

const categories = [
  "All",
  "Attribution",
  "Ad Strategy",
  "Shopify Analytics",
  "AI & Automation",
  "DTC Growth",
];

// Sample posts shown when no content files exist yet
const samplePosts = [
  {
    slug: "shopify-attribution-guide-2024",
    title: "The Complete Shopify Attribution Guide for DTC Brands",
    description:
      "Everything you need to know about multi-channel attribution for Shopify stores. First-party data, iOS 14 impact, and how to measure what's actually working.",
    date: "2024-03-15",
    author: "MarkInsight Team",
    category: "Attribution",
    tags: ["attribution", "shopify", "ios14"],
    readingTime: 12,
  },
  {
    slug: "meta-ads-roas-dtc-brands",
    title: "What a Good Meta Ads ROAS Actually Looks Like for DTC",
    description:
      "Benchmarks, context, and how to interpret your Meta ROAS data. Spoiler: the number everyone quotes is almost always wrong.",
    date: "2024-03-08",
    author: "MarkInsight Team",
    category: "Ad Strategy",
    tags: ["meta ads", "roas", "benchmarks"],
    readingTime: 8,
  },
  {
    slug: "polar-analytics-alternatives",
    title: "Top Polar Analytics Alternatives for Shopify in 2024",
    description:
      "Comparing Polar Analytics to other Shopify analytics tools. Feature breakdown, pricing comparison, and which is right for your brand.",
    date: "2024-03-01",
    author: "MarkInsight Team",
    category: "Shopify Analytics",
    tags: ["polar analytics", "comparison", "alternatives"],
    readingTime: 7,
  },
  {
    slug: "ai-insights-shopify-ads",
    title: "How AI Is Changing Shopify Ad Optimization in 2024",
    description:
      "From automated bidding to insight engines, AI is reshaping how DTC brands manage ad spend. Here's what actually matters.",
    date: "2024-02-22",
    author: "MarkInsight Team",
    category: "AI & Automation",
    tags: ["ai", "automation", "ad optimization"],
    readingTime: 9,
  },
  {
    slug: "tiktok-ads-attribution-shopify",
    title: "TikTok Ads Attribution for Shopify: What You're Missing",
    description:
      "TikTok attribution is messy. View-through conversions, click attribution windows, and why TikTok's self-reported numbers are almost always inflated.",
    date: "2024-02-15",
    author: "MarkInsight Team",
    category: "Ad Strategy",
    tags: ["tiktok", "attribution", "shopify"],
    readingTime: 10,
  },
  {
    slug: "dtc-analytics-stack-2024",
    title: "The Lean DTC Analytics Stack for 2024",
    description:
      "You don't need 12 tools. Here's the minimal, effective analytics stack for Shopify brands doing $200K–$3M, and what each tool should do.",
    date: "2024-02-08",
    author: "MarkInsight Team",
    category: "DTC Growth",
    tags: ["analytics stack", "tools", "dtc"],
    readingTime: 11,
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const filePosts = getAllPosts();
  const posts = filePosts.length > 0 ? filePosts : samplePosts;
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1
              className="text-5xl font-bold mb-4"
              style={{ color: "var(--color-foreground)" }}
            >
              The MarkInsight Blog
            </h1>
            <p className="text-lg" style={{ color: "var(--color-foreground-secondary)" }}>
              Practical guides on Shopify analytics, multi-channel attribution, and DTC growth.
              No fluff — just what helps you make better decisions with your ad spend.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: cat === "All" ? "var(--color-primary)" : "var(--color-surface)",
                  color: cat === "All" ? "white" : "var(--color-foreground-secondary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl overflow-hidden transition-all"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Mock image placeholder */}
                <div
                  className="h-64 lg:h-auto min-h-64 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--color-primary) 0%, #7C3AED 100%)",
                  }}
                >
                  <BookOpen className="w-16 h-16 text-white/40" />
                </div>

                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(79,70,229,0.12)",
                        color: "#A5B4FC",
                      }}
                    >
                      Featured
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "var(--color-surface-2)",
                        color: "var(--color-foreground-secondary)",
                      }}
                    >
                      {featured.category}
                    </span>
                  </div>

                  <h2
                    className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-indigo-400 transition-colors"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {featured.title}
                  </h2>

                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {featured.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm" style={{ color: "var(--color-muted)" }}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readingTime} min read
                    </span>
                  </div>

                  <div
                    className="mt-6 flex items-center gap-1 text-sm font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden card card-hover"
              >
                {/* Mock image */}
                <div
                  className="h-40 flex items-center justify-center"
                  style={{
                    background: "var(--color-surface-2)",
                  }}
                >
                  <BookOpen className="w-8 h-8" style={{ color: "var(--color-border)" }} />
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "var(--color-surface-2)",
                        color: "var(--color-foreground-secondary)",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>

                  <h3
                    className="font-bold mb-2 leading-snug group-hover:text-indigo-400 transition-colors"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {post.title}
                  </h3>

                  <p
                    className="text-sm mb-4 line-clamp-2 leading-relaxed"
                    style={{ color: "var(--color-foreground-secondary)" }}
                  >
                    {post.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--color-muted)" }}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

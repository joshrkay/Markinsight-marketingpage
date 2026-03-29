import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import remarkGfm from "remark-gfm";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
          style={{ color: "var(--color-foreground-secondary)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(79,70,229,0.12)",
                color: "#A5B4FC",
              }}
            >
              {post.category}
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-foreground)" }}
          >
            {post.title}
          </h1>

          <p
            className="text-lg mb-6"
            style={{ color: "var(--color-foreground-secondary)" }}
          >
            {post.description}
          </p>

          <div
            className="flex flex-wrap items-center gap-4 text-sm pb-8 border-b"
            style={{
              color: "var(--color-muted)",
              borderColor: "var(--color-border)",
            }}
          >
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime} min read
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="prose-dark">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div
            className="mt-12 pt-8 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-foreground-secondary)",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="mt-12 p-8 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, #7C3AED 100%)",
          }}
        >
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to try MarkInsight?
          </h3>
          <p className="text-indigo-100 mb-6 text-sm">
            Free tier with attribution. Embedded in Shopify. No GMV pricing.
          </p>
          <Link
            href="https://apps.shopify.com/markinsight"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ background: "white", color: "var(--color-primary)" }}
          >
            Install Free on Shopify
          </Link>
        </div>
      </div>
    </article>
  );
}

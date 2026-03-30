import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MarkInsight marketing site and Shopify app.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--color-foreground)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
          Last updated: March 30, 2026
        </p>

        <div className="space-y-8 prose-dark">
          <section>
            <h2>Information We Collect</h2>
            <p>
              We collect account, billing, and usage data needed to provide MarkInsight analytics,
              maintain app security, and support customers.
            </p>
          </section>

          <section>
            <h2>How We Use Information</h2>
            <p>
              Data is used to operate the product, generate analytics, improve performance, and
              communicate service updates. We do not sell personal information.
            </p>
          </section>

          <section>
            <h2>Data Sharing</h2>
            <p>
              We share data only with service providers necessary to run MarkInsight, under
              contractual confidentiality and security obligations.
            </p>
          </section>

          <section>
            <h2>Retention and Security</h2>
            <p>
              We retain data only as long as needed for product operations, legal compliance, and
              fraud prevention. We use reasonable technical and organizational safeguards.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For privacy requests, contact <a href="mailto:support@markinsight.app">support@markinsight.app</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

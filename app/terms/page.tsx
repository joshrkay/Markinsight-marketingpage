import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for MarkInsight marketing site and Shopify app.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--color-foreground)" }}>
          Terms of Service
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
          Last updated: March 30, 2026
        </p>

        <div className="space-y-8 prose-dark">
          <section>
            <h2>Service Overview</h2>
            <p>
              MarkInsight provides analytics and reporting tools for Shopify merchants. By using
              the service, you agree to these terms.
            </p>
          </section>

          <section>
            <h2>Acceptable Use</h2>
            <p>
              You agree not to misuse the service, attempt unauthorized access, or violate
              applicable laws while using MarkInsight.
            </p>
          </section>

          <section>
            <h2>Billing and Access</h2>
            <p>
              Paid features follow the published pricing terms. We may suspend access for unpaid
              invoices, abuse, or security risk.
            </p>
          </section>

          <section>
            <h2>Warranty Disclaimer</h2>
            <p>
              The service is provided &quot;as is&quot; without warranties of any kind, to the fullest
              extent permitted by law.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For legal questions, contact <a href="mailto:support@markinsight.app">support@markinsight.app</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}

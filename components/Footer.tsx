import Link from "next/link";
import { BarChart3 } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Install on Shopify", href: "https://apps.shopify.com/markinsight" },
  ],
  Compare: [
    { label: "vs Polar Analytics", href: "/vs/polar-analytics" },
    { label: "vs Peel Insights", href: "/vs/peel-insights" },
    { label: "vs Lebesgue", href: "/vs/lebesgue" },
    { label: "vs Northbeam", href: "/vs/northbeam" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Shopify App Store", href: "https://apps.shopify.com/markinsight" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--color-primary)" }}
              >
                <BarChart3 className="w-4 h-4 text-white" />
              </div>
              <span>MarkInsight</span>
            </Link>
            <p className="text-sm" style={{ color: "var(--color-foreground-secondary)" }}>
              Shopify analytics built for DTC brands doing $200K–$3M.
            </p>
            <p className="text-sm mt-2" style={{ color: "var(--color-muted)" }}>
              Flat pricing. Free tier. No GMV scaling.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: "var(--color-muted)" }}
              >
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "var(--color-foreground-secondary)" }}
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            © {new Date().getFullYear()} MarkInsight. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>
            Built for Shopify merchants. Honest analytics, honest pricing.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

const comparisonLinks = [
  { href: "/vs/polar-analytics", label: "vs Polar Analytics" },
  { href: "/vs/peel-insights", label: "vs Peel Insights" },
  { href: "/vs/lebesgue", label: "vs Lebesgue" },
  { href: "/vs/northbeam", label: "vs Northbeam" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b"
      style={{
        background: "rgba(11, 14, 26, 0.92)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "var(--color-primary)" }}
            >
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span style={{ color: "var(--color-foreground)" }}>MarkInsight</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--color-foreground-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--color-foreground)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--color-foreground-secondary)")
                }
              >
                {link.label}
              </Link>
            ))}

            {/* Compare dropdown */}
            <div className="relative">
              <button
                className="text-sm font-medium transition-colors flex items-center gap-1"
                style={{ color: "var(--color-foreground-secondary)" }}
                onMouseEnter={() => setCompareOpen(true)}
                onMouseLeave={() => setCompareOpen(false)}
              >
                Compare
                <span className="text-xs">▾</span>
              </button>
              {compareOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-52 rounded-xl py-2 shadow-xl"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                  onMouseEnter={() => setCompareOpen(true)}
                  onMouseLeave={() => setCompareOpen(false)}
                >
                  {comparisonLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm transition-colors"
                      style={{ color: "var(--color-foreground-secondary)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-foreground)";
                        (e.currentTarget as HTMLElement).style.background =
                          "var(--color-surface-2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-foreground-secondary)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://apps.shopify.com/markinsight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-lg transition-all"
              style={{ color: "var(--color-foreground-secondary)" }}
            >
              Sign in
            </Link>
            <Link
              href="https://apps.shopify.com/markinsight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-all"
              style={{
                background: "var(--color-accent)",
                color: "white",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "var(--color-accent)")
              }
            >
              Install Free
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "var(--color-foreground-secondary)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium"
                style={{ color: "var(--color-foreground-secondary)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t" style={{ borderColor: "var(--color-border)" }}>
              <p
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-muted)" }}
              >
                Compare
              </p>
              {comparisonLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-sm"
                  style={{ color: "var(--color-foreground-secondary)" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="https://apps.shopify.com/markinsight"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-sm font-semibold px-4 py-3 rounded-lg"
                style={{ background: "var(--color-accent)", color: "white" }}
                onClick={() => setOpen(false)}
              >
                Install Free on Shopify
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

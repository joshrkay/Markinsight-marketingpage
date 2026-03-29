import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div
        className="text-8xl font-bold mb-4 gradient-text"
      >
        404
      </div>
      <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--color-foreground)" }}>
        Page not found
      </h1>
      <p className="mb-8" style={{ color: "var(--color-foreground-secondary)" }}>
        Looks like this page doesn't exist. It may have moved or been removed.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all"
        style={{ background: "var(--color-primary)", color: "white" }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}

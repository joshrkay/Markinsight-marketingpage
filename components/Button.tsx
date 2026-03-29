import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  type?: "button" | "submit";
};

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    background: "var(--color-primary)",
    color: "white",
    border: "1px solid transparent",
  },
  accent: {
    background: "var(--color-accent)",
    color: "white",
    border: "1px solid transparent",
  },
  secondary: {
    background: "transparent",
    color: "var(--color-foreground)",
    border: "1px solid var(--color-border)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-foreground-secondary)",
    border: "1px solid transparent",
  },
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  external = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseClass = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all cursor-pointer ${sizeClasses[size]} ${className}`;
  const style = variantStyles[variant];

  if (href) {
    return (
      <Link
        href={href}
        className={baseClass}
        style={style}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass} style={style}>
      {children}
    </button>
  );
}

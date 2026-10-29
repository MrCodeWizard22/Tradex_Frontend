import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary: "bg-accent text-[#06100d] hover:bg-accent-bright",
  secondary: "border border-white/15 bg-white/[0.04] text-white hover:border-accent/50 hover:bg-white/[0.08]",
  ghost: "text-slate-300 hover:bg-white/[0.06] hover:text-white",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

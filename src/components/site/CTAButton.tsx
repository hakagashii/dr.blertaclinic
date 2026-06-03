import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export const INSTAGRAM_URL = "https://www.instagram.com/dr.blertaclinic/";

interface CTAButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  showArrow?: boolean;
}

export function CTAButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  showArrow = true,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 group";
  const sizes = {
    md: "px-5 py-2.5 text-[15px]",
    lg: "px-7 py-3.5 text-[16px]",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-accent shadow-soft hover:shadow-glow hover:-translate-y-0.5",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground border border-primary/20",
    ghost:
      "bg-transparent text-foreground hover:bg-secondary border border-border",
  };

  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}

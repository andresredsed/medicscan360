"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-hover active:bg-brand-blue-dark",
  secondary:
    "bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-blue",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fba59] active:bg-[#1aa34e]",
};

const sizes: Record<"sm" | "md" | "lg", string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-lg font-heading font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={baseClasses} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}

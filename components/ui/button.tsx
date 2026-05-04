import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-canvas)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        coral:
          "bg-[var(--color-accent-coral)] text-white hover:bg-[#b94530] hover:-translate-y-px shadow-[0_2px_0_0_rgba(154,40,28,0.4)] hover:shadow-[0_8px_24px_-6px_rgba(217,84,59,0.45)] active:translate-y-0",
        ink:
          "bg-[var(--color-panel-dark)] text-[var(--color-ink-inverse)] hover:bg-[#2a2622] hover:-translate-y-px",
        outline:
          "border border-[var(--color-rule-line)] text-[var(--color-ink-primary)] hover:border-[var(--color-ink-primary)] hover:bg-white/40",
        ghost:
          "text-[var(--color-ink-primary)] hover:bg-[var(--color-bg-canvas-deep)]",
        link:
          "text-[var(--color-ink-primary)] underline-offset-4 hover:text-[var(--color-accent-coral)] hover:underline px-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[15px]",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "coral",
      size: "md",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { buttonVariants };

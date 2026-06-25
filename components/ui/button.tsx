"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "relative overflow-hidden bg-brand-teal text-white shadow hover:bg-brand-teal/90 hover:shadow-[0_8px_24px_rgba(15,118,110,0.32)] hover:-translate-y-0.5 transition-all duration-200 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.45)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position] before:duration-1000 hover:before:bg-[position:-100%_0,0_0]",
        primary:
          "relative overflow-hidden bg-gradient-to-r from-brand-navy via-brand-navy to-brand-teal text-white shadow-lg hover:shadow-[0_12px_36px_rgba(11,31,51,0.35)] hover:-translate-y-0.5 transition-all duration-200 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.12)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position] before:duration-1000 hover:before:bg-[position:-100%_0,0_0]",
        outline:
          "relative overflow-hidden border border-black/10 bg-white text-brand-black hover:bg-black/5 hover:-translate-y-0.5 shadow-sm transition-all duration-200 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(15,118,110,0.1)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position] before:duration-1000 hover:before:bg-[position:-100%_0,0_0]",
        ghost: "text-brand-navy hover:bg-brand-teal/10 hover:text-brand-teal",
        link: "text-brand-teal underline-offset-4 hover:underline p-0 h-auto",
        navy:
          "relative overflow-hidden bg-brand-navy text-white shadow hover:bg-brand-navy/90 hover:shadow-[0_8px_24px_rgba(11,18,32,0.30)] hover:-translate-y-0.5 transition-all duration-200 before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position] before:duration-1000 hover:before:bg-[position:-100%_0,0_0]",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

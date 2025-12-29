import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-sans tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-sm",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-primary text-primary-foreground hover:bg-olive-dark shadow-medium hover:shadow-large hover:-translate-y-0.5 rounded-sm",
        "hero-outline": "border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-sm",
        olive: "bg-olive text-primary-foreground hover:bg-olive-dark rounded-sm",
        minimal: "bg-transparent text-foreground hover:text-primary underline-offset-4 hover:underline",
        gold: "bg-gold text-foreground hover:bg-gold-dark shadow-medium hover:shadow-large hover:-translate-y-0.5 rounded-sm",
        "gold-outline" : "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-background shadow-medium hover:shadow-large rounded-sm",
        "gold-subtle": "bg-gold/10 text-gold hover:bg-gold/20 border border-gold/50 shadow-sm hover:shadow-md rounded-sm",
        "champagne": "bg-champagne text-foreground hover:bg-champagne-dark rounded-sm",
        "bronze-gold": "bg-bronze text-foreground hover:bg-bronze-dark shadow-medium hover:shadow-large rounded-sm",
        "gold-minimal": "bg-transparent text-gold hover:text-gold-dark underline-offset-4 hover:underline border-b-2 border-gold/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

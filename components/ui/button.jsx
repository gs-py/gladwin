import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  " inline-flex items-center justify-center whitespace-nowrap rounded-full  text-base font-semibold ring-offset-white transition-colors",
 
  {
    variants: {
      variant: {
        default: " bg-accent-defaults text-primary hover:bg-accent-hover  ",
        primary:" bg-primary text-white",
         outline: "border border-accent-defaults bg-transparent text-accent-defaults hover:bg-accent-defaults hover:text-primary ",
         
        
      },
      size: {
        default: "h-[44px] px-5 ",
        sm: "h-9 rounded-md px-3",
        md: "h-[48px] px-5",
        lg: "h-[56px] text-sm uppercase tracking-[2px] px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }

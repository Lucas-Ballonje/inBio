import { cn } from "@/app/lib/utils";
import React from "react";

export default function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={cn(
        `
            w-full bg-background-secondary text-white placeholder:text-content-placheholder rounded-xl 
            border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary
        `,
        props.className
      )}
    />
  );
}

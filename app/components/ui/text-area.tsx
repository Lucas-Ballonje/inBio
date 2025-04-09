import { cn } from "@/app/lib/utils";
import React from "react";

export default function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        `
            w-full bg-background-secondary text-white placeholder:text-content-placheholder rounded-xl 
            border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        props.className
      )}
    />
  );
}

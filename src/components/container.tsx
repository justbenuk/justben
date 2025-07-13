import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-7xl w-full mx-auto px-6", className)}>
      {children}
    </div>
  );
}

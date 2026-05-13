import * as React from "react";
import * as Lucide from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className, strokeWidth = 1.6 }: Props) {
  const LucideIcon =
    (Lucide as unknown as Record<string, React.ComponentType<Lucide.LucideProps>>)[
      name
    ] ?? Lucide.Wrench;
  return (
    <LucideIcon
      strokeWidth={strokeWidth}
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    />
  );
}

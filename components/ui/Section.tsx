import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** غلاف قسم موحّد المسافات والحاوية. */
export function Section({
  id,
  children,
  className,
  alt = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        alt && "bg-surface-alt",
        className,
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

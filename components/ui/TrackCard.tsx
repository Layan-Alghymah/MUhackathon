import Link from "next/link";
import type { Track } from "@/data/types";
import { Icon } from "./Icon";

/** بطاقة مسار — بلا حالة تسجيل وبلا عدد تحديات (غير متوفرة رسميًا لكل مسار). */
export function TrackCard({ track }: { track: Track }) {
  return (
    <Link
      href={`/tracks/${track.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_28px_60px_-36px_var(--glow)]"
    >
      <span
        className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ backgroundColor: track.accent }}
        aria-hidden
      />

      <span
        className="flex size-14 items-center justify-center rounded-2xl text-white shadow-sm"
        style={{ backgroundColor: track.accent }}
      >
        <Icon name={track.icon} className="size-7" />
      </span>

      <h3 className="mt-5 text-lg font-bold leading-snug">{track.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {track.summary}
      </p>

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:-translate-x-1">
        استكشف المسار
        <Icon name="ChevronLeft" className="size-4" />
      </span>
    </Link>
  );
}

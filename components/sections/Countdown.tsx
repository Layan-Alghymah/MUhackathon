"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { getRegistrationCloseTs, isCountdownEnabled } from "@/lib/dates";
import { toArabicDigits, arabicPlural } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

const DAY_FORMS = { one: "يوم واحد", two: "يومان", few: "أيام", many: "يومًا" };
const HOUR_FORMS = {
  one: "ساعة واحدة",
  two: "ساعتان",
  few: "ساعات",
  many: "ساعة",
};

/** عبارة عربية سليمة للوقت المتبقّي (أيام، أو ساعات إذا بقي أقل من يوم). */
function remainingLabel(parts: Parts): string {
  return parts.days >= 1
    ? arabicPlural(parts.days, DAY_FORMS)
    : arabicPlural(parts.hours, HOUR_FORMS);
}

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function diff(target: number): Parts | null {
  const delta = target - Date.now();
  if (delta <= 0) return null;
  return {
    days: Math.floor(delta / 86_400_000),
    hours: Math.floor((delta / 3_600_000) % 24),
    minutes: Math.floor((delta / 60_000) % 60),
    seconds: Math.floor((delta / 1000) % 60),
  };
}

const units: { key: keyof Parts; label: string }[] = [
  { key: "days", label: "يوم" },
  { key: "hours", label: "ساعة" },
  { key: "minutes", label: "دقيقة" },
  { key: "seconds", label: "ثانية" },
];

/**
 * العدّ التنازلي لإغلاق التسجيل المبدئي.
 * السنة غير معتمدة (year=null) → العدّاد معطّل وتُعرض التواريخ نصيًا فقط.
 */
export function Countdown() {
  const enabled = isCountdownEnabled();
  const target = getRegistrationCloseTs();
  const [mounted, setMounted] = useState(false);
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setMounted(true);
    if (!target) return;
    const tick = () => setParts(diff(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  // الحالة الافتراضية: التواريخ نصيًا بلا عدّاد.
  if (!enabled || !target) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/80 px-4 py-2.5 text-sm font-medium backdrop-blur">
          <Icon name="CalendarDays" className="size-4 text-brand-gold" />
          يفتح التسجيل: {siteConfig.registrationOpen.label}
        </span>
        <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/80 px-4 py-2.5 text-sm font-medium backdrop-blur">
          <Icon name="LockKeyhole" className="size-4 text-brand-gold" />
          يغلق التسجيل المبدئي: {siteConfig.registrationClose.label}
        </span>
      </div>
    );
  }

  if (mounted && !parts) {
    return (
      <p className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold text-[var(--destructive)]">
        انتهى التسجيل المبدئي
      </p>
    );
  }

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        {mounted && parts ? (
          <>
            المتبقّي على إغلاق التسجيل المبدئي:{" "}
            <span className="font-bold text-foreground">
              {remainingLabel(parts)}
            </span>
          </>
        ) : (
          "يغلق التسجيل المبدئي خلال"
        )}
      </p>
      <div
        className="flex gap-2.5 sm:gap-3"
        role="timer"
        aria-label="الوقت المتبقي لإغلاق التسجيل المبدئي"
      >
        {units.map(({ key, label }) => (
          <div
            key={key}
            className="flex min-w-[4.2rem] flex-col items-center rounded-2xl border border-border bg-card/80 px-3 py-3 backdrop-blur sm:min-w-[4.8rem]"
          >
            <span className="tabular-nums text-2xl font-bold sm:text-3xl">
              {mounted && parts
                ? toArabicDigits(String(parts[key]).padStart(2, "0"))
                : "—"}
            </span>
            <span className="mt-1 text-[0.7rem] text-muted-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

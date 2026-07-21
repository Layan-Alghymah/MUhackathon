import { siteConfig } from "@/data/site";

/**
 * تاريخ إغلاق التسجيل كـ timestamp — أو null إذا لم تُعتمد السنة رسميًا.
 * عند null يُعطَّل العدّاد وتُعرض التواريخ نصيًا فقط.
 */
export function getRegistrationCloseTs(): number | null {
  if (siteConfig.year == null) return null;
  const { month, day } = siteConfig.registrationClose;
  return new Date(siteConfig.year, month - 1, day, 23, 59, 59).getTime();
}

/** هل العدّاد التنازلي مفعّل؟ (يتطلب سنة معتمدة). */
export function isCountdownEnabled(): boolean {
  return siteConfig.year != null;
}

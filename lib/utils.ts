/** دمج أسماء الأصناف بشكل مشروط (بديل خفيف عن clsx). */
export function cn(
  ...inputs: (string | false | null | undefined)[]
): string {
  return inputs.filter(Boolean).join(" ");
}

/** تحويل الأرقام اللاتينية إلى أرقام عربية-هندية للعرض. */
export function toArabicDigits(input: string | number): string {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(input).replace(/[0-9]/g, (d) => map[Number(d)]);
}

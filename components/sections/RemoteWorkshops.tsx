import { remoteWorkshops } from "@/data/workshops";
import { toArabicDigits } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function RemoteWorkshops() {
  return (
    <Section id="workshops">
      <SectionHeader
        eyebrow="ورش العمل عن بُعد"
        title="برنامج تدريبي يبني الجاهزية"
        description="أربع ورش عن بُعد تهيّئ المشاركين قبل المرحلة الحضورية."
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {remoteWorkshops.map((w, i) => (
          <Reveal
            key={w.id}
            delay={0.06 * i}
            as="article"
            className="relative flex flex-col rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-brand-green">
                <Icon name={w.icon} className="size-5" />
              </span>
              <span className="text-sm font-bold text-brand-gold/70 tabular-nums">
                {toArabicDigits(String(i + 1).padStart(2, "0"))}
              </span>
            </div>
            <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <Icon name="CalendarDays" className="size-3.5" />
              {w.date}
            </div>
            <h3 className="mt-3 text-base font-bold leading-snug">{w.title}</h3>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

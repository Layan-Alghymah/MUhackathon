import { onsiteWorkshops } from "@/data/workshops";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function OnsiteWorkshops() {
  return (
    <Section id="onsite-workshops" alt>
      <SectionHeader
        eyebrow="الورش الحضورية"
        title="مرحلة تطوير الحلول"
        description="جلسات مكثّفة لبناء النماذج الأولية والاستعداد للعرض النهائي."
      />

      <div className="mx-auto mt-12 max-w-4xl">
        {/* التاريخ والوقت */}
        <Reveal className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">
            <Icon name="CalendarClock" className="size-4 text-brand-gold" />
            {onsiteWorkshops.date}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold">
            <Icon name="Clock" className="size-4 text-brand-gold" />
            {onsiteWorkshops.time}
          </span>
        </Reveal>

        {/* الأنشطة */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {onsiteWorkshops.activities.map((activity, i) => (
            <Reveal
              key={activity}
              delay={0.04 * i}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand-green">
                <Icon name="CircleCheck" className="size-5" />
              </span>
              <span className="text-sm font-medium leading-snug">
                {activity}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

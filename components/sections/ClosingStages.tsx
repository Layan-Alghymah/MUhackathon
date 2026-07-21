import { closingStages } from "@/data/workshops";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function ClosingStages() {
  return (
    <Section id="closing">
      <SectionHeader
        eyebrow="المراحل الختامية"
        title="من التسليم إلى التكريم"
        description="خط النهاية: تسليم المشاريع ثم التحكيم والعروض النهائية."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {closingStages.map((stage, i) => (
          <Reveal
            key={stage.title}
            delay={0.08 * i}
            className="relative overflow-hidden rounded-2xl border border-brand-gold/30 bg-card p-6 ring-1 ring-brand-gold/15"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand-gold/12 text-brand-gold">
              <Icon name={stage.icon} className="size-6" />
            </span>
            <div className="mt-4 text-sm font-bold text-brand-gold">
              {stage.date}
            </div>
            <h3 className="mt-1 text-lg font-bold leading-snug">
              {stage.title}
            </h3>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

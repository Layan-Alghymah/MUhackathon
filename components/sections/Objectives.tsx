import { objectives } from "@/data/objectives";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Objectives() {
  return (
    <Section id="objectives" alt>
      <SectionHeader
        eyebrow="الأهداف"
        title="ما الذي يسعى الهاكثون لتحقيقه"
        description="سبعة أهداف توضّح الأثر المتوقع من الهاكثون على منظومة الجامعة."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.map((obj, i) => (
          <Reveal
            key={obj.id}
            delay={0.05 * i}
            as="article"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-[0_24px_50px_-30px_var(--glow)]"
          >
            <span
              className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-gradient-to-l from-brand-green to-brand-gold transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden
            />
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-secondary text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
              <Icon name={obj.icon} className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold">{obj.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {obj.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

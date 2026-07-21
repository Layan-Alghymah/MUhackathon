import { focusTechnologies, targetAudience } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* النبذة */}
        <div>
          <SectionHeader
            align="start"
            eyebrow="عن الهاكثون"
            title="منصة عملية تحوّل التحديات إلى حلول"
          />
          <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              انطلاقًا من توجه جامعة المجمعة نحو تعزيز ثقافة الابتكار والتحول
              الرقمي وتنمية القدرات الوطنية في مجالات التقنيات الناشئة، يأتي
              هاكثون الجامعة الذكية منصةً عملية تجمع بين المعرفة والتطبيق،
              وتسهم في تحويل التحديات المؤسسية إلى حلول ابتكارية قابلة للتنفيذ.
            </p>
            <p>
              ويهدف الهاكثون إلى تمكين منسوبي الجامعة من توظيف التقنيات الحديثة —
              وعلى رأسها الذكاء الاصطناعي وتحليل البيانات وإنترنت الأشياء — لتطوير
              حلول ترفع كفاءة الأعمال، وتحسّن تجربة المستفيد، وتعزّز الاستدامة،
              وتدعم مستهدفات التحول الرقمي ورؤية المملكة ٢٠٣٠.
            </p>
          </Reveal>
        </div>

        {/* بطاقات جانبية */}
        <div className="flex flex-col gap-5">
          <Reveal className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-green">
              <Icon name="Cpu" className="size-4" />
              التقنيات المحورية
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusTechnologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-brand-green">
              <Icon name="Users" className="size-4" />
              الفئة المستهدفة
            </div>
            <ul className="mt-4 grid gap-2 xs:grid-cols-3">
              {targetAudience.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2.5 text-sm font-medium text-secondary-foreground"
                >
                  <Icon name="CircleCheck" className="size-4 text-[var(--success)]" />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

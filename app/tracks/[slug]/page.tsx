import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tracks, getTrack } from "@/data/tracks";
import { InnerHeader } from "@/components/layout/InnerHeader";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Icon } from "@/components/ui/Icon";
import { RegisterButton } from "@/components/ui/CtaButtons";
import { Reveal } from "@/components/ui/Reveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tracks.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) return { title: "المسار غير موجود" };
  return {
    title: track.name,
    description: track.summary,
    openGraph: { title: track.name, description: track.summary },
  };
}

export default async function TrackPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (!track) notFound();

  return (
    <>
      <InnerHeader />

      {/* بانر المسار */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
        <div
          className="pointer-events-none absolute -right-24 -top-24 -z-10 size-96 rounded-full opacity-20 blur-3xl"
          style={{ background: track.accent }}
          aria-hidden
        />
        <div className="container-site py-12 sm:py-16">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "المسارات", href: "/#tracks" },
              { label: track.name },
            ]}
          />

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <span
                className="inline-flex size-16 items-center justify-center rounded-2xl text-white shadow-sm"
                style={{ backgroundColor: track.accent }}
              >
                <Icon name={track.icon} className="size-8" />
              </span>
              <h1 className="mt-5 text-3xl font-bold sm:text-4xl">
                {track.name}
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {track.description}
              </p>
            </div>
            <div className="shrink-0">
              <RegisterButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      <main id="main" className="container-site py-14">
        {/* أمثلة لمجالات التحديات */}
        <Reveal>
          <div className="flex items-center gap-2">
            <Icon name="Target" className="size-5 text-brand-green" />
            <h2 className="text-2xl font-bold">أمثلة لمجالات التحديات</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            أمثلة توضيحية للمجالات المحتملة — وليست قائمة تحديات نهائية معتمدة.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {track.challengeExamples.map((example, i) => (
            <Reveal
              key={example}
              delay={0.04 * i}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-brand-green">
                <Icon name="Target" className="size-5" />
              </span>
              <span className="text-sm font-medium leading-relaxed">
                {example}
              </span>
            </Reveal>
          ))}
        </div>

        {/* العودة + تسجيل */}
        <div className="mt-14 flex flex-wrap items-center gap-3">
          <Link
            href="/#tracks"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-brand-green/40"
          >
            <Icon name="ArrowLeft" className="size-4 rotate-180" />
            العودة إلى جميع المسارات
          </Link>
          <RegisterButton size="md" />
        </div>
      </main>

      <Footer />
    </>
  );
}

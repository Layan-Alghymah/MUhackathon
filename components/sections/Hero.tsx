"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { RegisterButton, GuideButton } from "@/components/ui/CtaButtons";
import { RegistrationStatusBadge } from "@/components/ui/RegistrationStatusBadge";
import { asset } from "@/lib/asset";
import { Countdown } from "./Countdown";

/**
 * مسار صورة خلفية الـHero.
 * ضع صورة الجامعة في: web/public/Hero.jpeg
 * (الاسم حسّاس لحالة الأحرف عند النشر على GitHub Pages).
 */
const HERO_IMAGE = "/Hero.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 * i },
  }),
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-green-deep pt-24 pb-16 text-white"
    >
      {/* ─────────── الخلفية: صورة الجامعة تغطي كامل القسم ─────────── */}
      <motion.div
        initial={reduce ? undefined : { scale: 1.09 }}
        animate={reduce ? undefined : { scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        <Image
          src={asset(HERO_IMAGE)}
          alt=""
          fill
          priority
          sizes="100vw"
          // المبنى في يسار الصورة: نحيّز الموضع لليسار على الجوال لضمان ظهوره.
          className="object-cover object-[32%_center] sm:object-center"
        />
      </motion.div>

      {/* طبقات التحسين فوق الصورة */}
      {/* 1) Overlay أخضر داكن شفاف */}
      <div
        className="absolute inset-0 z-[1] bg-[color-mix(in_oklab,var(--brand-green-deep)_55%,transparent)]"
        aria-hidden
      />
      {/* 2) تدرّج هادئ من الأعلى والأسفل + دمج مع خلفية الصفحة */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/10 to-black/50"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      {/* ─────────── المحتوى: مركزي أفقيًا وعموديًا ─────────── */}
      <div className="container-site relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2rem] px-2 text-center">
          {/* لوح زجاجي خفيف جدًا خلف كتلة النص لتعزيز الوضوح */}
          <div className="flex flex-col items-center rounded-[2rem] bg-black/10 px-4 py-8 backdrop-blur-[2px] sm:px-8 sm:py-10">
            {/* شارة الجهة المنظّمة (بديل مؤقت لشعار الهاكثون) */}
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur"
            >
              <Icon name="Sparkles" className="size-3.5 text-brand-gold-soft" />
              {siteConfig.organizer}
            </motion.span>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 text-balance text-4xl font-bold leading-[1.15] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl"
            >
              هاكثون{" "}
              <span className="text-brand-gold-soft">الجامعة الذكية</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:text-lg"
            >
              {siteConfig.description}
            </motion.p>

            {/* شارة حالة التسجيل العامة */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7"
            >
              <RegistrationStatusBadge />
            </motion.div>

            {/* العدّ التنازلي / التواريخ النصية */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5"
            >
              <Countdown />
            </motion.div>

            {/* أزرار الإجراء */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
            >
              <RegisterButton size="lg" className="w-full sm:w-auto" />
              <GuideButton size="lg" className="w-full sm:w-auto" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* مؤشر النزول */}
      <motion.a
        href="#about"
        aria-label="انتقل إلى القسم التالي"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-white/80 sm:block"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs">اكتشف المزيد</span>
          <Icon name="ArrowDown" className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}

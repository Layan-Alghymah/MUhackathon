"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { RegisterButton, GuideButton } from "@/components/ui/CtaButtons";
import { Countdown } from "./Countdown";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 * i },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[90svh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* الخلفية: شبكة خفيفة + توهج هادئ */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -top-24 right-[-8%] size-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand-green)_16%,transparent),transparent_62%)] blur-2xl" />
        <div className="absolute bottom-[-18%] left-[-6%] size-[30rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--brand-gold)_14%,transparent),transparent_62%)] blur-2xl" />
      </motion.div>
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="container-site">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* شارة الجهة المنظّمة (بديل مؤقت لشعار الهاكثون) */}
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-brand-green backdrop-blur"
          >
            <Icon name="Sparkles" className="size-3.5 text-brand-gold" />
            {siteConfig.organizer}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-balance text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl"
          >
            هاكثون <span className="text-gradient-brand">الجامعة الذكية</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          {/* العدّ التنازلي / التواريخ النصية */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8"
          >
            <Countdown />
          </motion.div>

          {/* أزرار الإجراء */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <RegisterButton size="lg" className="w-full sm:w-auto" />
            <GuideButton size="lg" className="w-full sm:w-auto" />
          </motion.div>
        </div>
      </div>

      {/* مؤشر النزول */}
      <motion.a
        href="#about"
        aria-label="انتقل إلى القسم التالي"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground sm:block"
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

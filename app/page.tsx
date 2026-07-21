import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Objectives } from "@/components/sections/Objectives";
import { Tracks } from "@/components/sections/Tracks";
import { Timeline } from "@/components/sections/Timeline";
import { RemoteWorkshops } from "@/components/sections/RemoteWorkshops";
import { OnsiteWorkshops } from "@/components/sections/OnsiteWorkshops";
import { ClosingStages } from "@/components/sections/ClosingStages";
import { Faq } from "@/components/sections/Faq";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Objectives />
        <Tracks />
        <Timeline />
        <RemoteWorkshops />
        <OnsiteWorkshops />
        <ClosingStages />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProgrammesSportifs from "./components/ProgrammesSportifs";
import AvantApres from "./components/AvantApres";
import Coachs from "./components/Coachs";
import Application from "./components/Application";
import ProgrammesNutrition from "./components/ProgrammesNutrition";
import Abonnements from "./components/Abonnements";
import Reseaux from "./components/ReseauxSociaux";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { Reveal } from "./components/ui/reveal";

export default function HomePage() {
  return (
    <main className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
      <Hero />
      <Reveal delay={200}>
        <Stats />
      </Reveal>
      <Reveal direction="left">
        <ProgrammesSportifs />
      </Reveal>
      <Reveal direction="right">
        <ProgrammesNutrition />
      </Reveal>
      <Reveal direction="left">
        <Coachs />
      </Reveal>
      <Reveal delay={300}>
        <AvantApres />
      </Reveal>
      <Reveal delay={300}>
        <Application />
      </Reveal>
      <Reveal delay={300}>
        <Abonnements />
      </Reveal>
      <Reveal direction="right">
        <Reseaux />
      </Reveal>
      <Reveal delay={200}>
        <Faq />
      </Reveal>
      <Footer />
    </main>
  );
}

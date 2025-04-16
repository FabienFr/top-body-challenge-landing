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

export default function HomePage() {
  return (
    <main className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
      <Hero />
      <Stats />
      <ProgrammesSportifs />
      <AvantApres />
      <Coachs />
      <Application />
      <ProgrammesNutrition />
      <Abonnements />
      <Reseaux />
      <Faq />
      <Footer />
    </main>
  );
}

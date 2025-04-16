"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const programmes = [
  {
    id: 1,
    title: "Top Body Challenge",
    description: "Programme complet de 12 semaines pour tonifier votre corps",
    image: "/images/FakeCard1.png",
  },
  {
    id: 2,
    title: "Abdos Sculptés",
    description: "Obtenez des abdominaux définis en 8 semaines",
    image: "/images/FakeCard2.png",
  },
  {
    id: 3,
    title: "Cardio Intensif",
    description: "Boostez votre endurance et brûlez des calories",
    image: "/images/FakeCard3.png",
  },
  {
    id: 4,
    title: "Yoga Fitness",
    description: "Améliorez votre souplesse et votre force",
    image: "/images/FakeCard4.png",
  },
  {
    id: 4,
    title: "Yoga Fitness",
    description: "Améliorez votre souplesse et votre force",
    image: "/images/FakeCard5.png",
  },
];

export default function ProgrammesSportifs() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);

      // Calculer l'index actif basé sur le défilement
      const cardWidth =
        scrollContainerRef.current.querySelector(".card-item")?.clientWidth ||
        0;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  }, [activeIndex]);

  const scrollTo = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector(".card-item")?.clientWidth || 0;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Maintenant useEffect n'aura pas de dépendance qui change à chaque rendu
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <section className="py-16">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold font-outfit md:text-4xl">
            Nos programmes sportifs
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Atteignez vos objectifs avec des programmes sur mesure. Choisissez
            parmi de nombreux coachs et recettes, cumulez des points, et
            profitez des vidéos hors ligne. Toujours là pour vous motiver et
            vous soutenir !
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 pb-6 overflow-x-auto scrollbar-hide"
            onScroll={handleScroll}
          >
            {programmes.map((programme) => (
              <Card
                key={programme.id}
                className="card-item min-w-[280px] flex-shrink-0 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-[360px] w-full">
                    <Image
                      src={programme.image}
                      alt={programme.title}
                      width={280}
                      height={360}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="mb-2 text-xl font-bold">
                        {programme.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-200">
                        {programme.description}
                      </p>
                      <button className="px-4 py-2 text-sm font-medium text-black bg-white rounded hover:bg-gray-100">
                        Je m&apos;inscris
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation en bas à droite */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-2">
              {programmes.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${activeIndex === index ? "bg-black" : "bg-gray-300"}`}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const container = scrollContainerRef.current;
                      const cardWidth =
                        container.querySelector(".card-item")?.clientWidth || 0;
                      container.scrollTo({
                        left: cardWidth * index,
                        behavior: "smooth",
                      });
                      setActiveIndex(index);
                    }
                  }}
                  aria-label={`Programme ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => scrollTo("left")}
                className={`${!showLeftArrow && "opacity-50 cursor-not-allowed"}`}
                disabled={!showLeftArrow}
                aria-label="Précédent"
              >
                <Image
                  src="/images/LeftArrow.svg"
                  alt="Précédent"
                  width={40}
                  height={40}
                />
              </button>
              <button
                onClick={() => scrollTo("right")}
                className={`${!showRightArrow && "opacity-50 cursor-not-allowed"}`}
                disabled={!showRightArrow}
                aria-label="Suivant"
              >
                <Image
                  src="/images/RightArrow.svg"
                  alt="Suivant"
                  width={40}
                  height={40}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/images/AvantApres.png",
    text: "Grâce aux programmes de Sonia, j'ai changé physiquement mais aussi mentalement. J'ai appris à aimer le sport et à mieux assumer mon corps surtout j'ai repris confiance en moi surtout après 2 grossesses.",
    dates: "20/02/19 - 12/04/19 - 01/07/19",
  },
  {
    id: 2,
    image: "/images/AvantApres.png",
    text: "J'ai commencé le programme il y a 3 mois et les résultats sont incroyables. Non seulement j'ai perdu du poids, mais j'ai gagné en force et en énergie au quotidien.",
    dates: "15/01/20 - 15/03/20 - 15/05/20",
  },
  {
    id: 3,
    image: "/images/AvantApres.png",
    text: "Après ma grossesse, je pensais ne jamais retrouver ma silhouette. Grâce aux exercices adaptés et aux conseils nutritionnels, j'ai dépassé mes attentes en seulement 4 mois.",
    dates: "10/09/21 - 10/11/21 - 10/01/22",
  },
];

export default function AvantApres() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="relative py-16 bg-[#FFF8F5] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/BgPattern.svg"
          width={1000}
          height={1000}
          alt="pattern graphique"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 container-custom">
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={goToPrevious}
            className="absolute left-0 z-20 hidden transform -translate-x-12 -translate-y-1/2 top-1/2 md:block"
            aria-label="Précédent"
          >
            <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-white/80">
              <Image
                src="/images/LeftArrow.svg"
                alt="Précédent"
                width={40}
                height={40}
              />
            </div>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 z-20 hidden transform translate-x-12 -translate-y-1/2 top-1/2 md:block"
            aria-label="Suivant"
          >
            <div className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full bg-white/80">
              <Image
                src="/images/RightArrow.svg"
                alt="Suivant"
                width={40}
                height={40}
              />
            </div>
          </button>

          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <Image
                  src={testimonials[currentIndex].image}
                  alt="Avant / Après transformation"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex flex-col justify-center w-full p-6 md:p-8 md:w-1/2">
                <h2 className="mb-4 text-2xl font-bold">Avant / Après</h2>
                <p className="mb-6 text-gray-700">
                  {testimonials[currentIndex].text}
                </p>
                <p className="text-sm font-medium text-gray-500">
                  {testimonials[currentIndex].dates}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-4 md:hidden">
            <button
              onClick={goToPrevious}
              className="p-2 border border-gray-300 rounded-full"
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
              onClick={goToNext}
              className="p-2 border border-gray-300 rounded-full"
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
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

// Composant pour animer un compteur
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center h-24 mx-auto mb-2 w-72 md:h-28 md:w-80">
            <div className="absolute z-10 w-16 h-16 overflow-hidden border-2 border-white rounded-full left-4 md:h-20 md:w-20">
              <Image
                src="/images/SocialProofLeft.png"
                alt="Utilisateur"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute z-20 w-20 h-20 overflow-hidden border-2 border-white rounded-full -top-2 md:h-24 md:w-24">
              <Image
                src="/images/SocialProofCenter.png"
                alt="Utilisateur"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute z-10 w-16 h-16 overflow-hidden border-2 border-white rounded-full right-4 md:h-20 md:w-20">
              <Image
                src="/images/SocialProofRight.png"
                alt="Utilisateur"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <p className="mb-8 text-sm text-center text-gray-600 md:text-base">
            Rejoignez notre communauté de plus de 2 millions d&apos;utilisateurs
            satisfaits
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-bold font-outfit md:text-5xl lg:text-6xl">
                <AnimatedCounter end={2} suffix=" Millions" />
              </p>
              <p className="mt-2 text-gray-700">De followers</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold font-outfit md:text-5xl lg:text-6xl">
                + <AnimatedCounter end={189} suffix=" k" />
              </p>
              <p className="mt-2 text-gray-700">inscrits aux programmes</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold font-outfit md:text-5xl lg:text-6xl">
                + <AnimatedCounter end={239} suffix=" k" />
              </p>
              <p className="mt-2 text-gray-700">De personnes convaincues</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function Application() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative z-10 container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Une application pensée pour vous
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative mx-auto"
            style={{ width: "700px", height: "300px" }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[300px] z-0">
              <Image
                src="/images/AppBg.png"
                alt=""
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[56.5%] z-10">
              <Image
                src="/images/AppPersonna.png"
                alt="Personne sportive"
                width={300}
                height={450}
                className="object-contain"
              />
            </div>

            <div className="absolute top-[5%] left-[15%] z-20 animate-float-slow">
              <Image
                src="/images/AppMySpace.png"
                alt="Points"
                width={120}
                height={90}
                className="object-contain"
              />
            </div>

            <div className="absolute top-[10%] right-[15%] z-20 animate-float">
              <Image
                src="/images/AppCalendrier.png"
                alt="Calendrier"
                width={140}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="absolute top-[36%] right-[20%] z-20 animate-float-slow">
              <Image
                src="/images/AppHug.png"
                alt="Communauté"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-[30%] right-[20%] z-20 animate-float">
              <Image
                src="/images/AppDifficulty.png"
                alt="Niveaux de difficulté"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-0 right-[28%] z-20 animate-float">
              <Image
                src="/images/AppChat.png"
                alt="Niveaux de difficulté"
                width={80}
                height={32}
                className="object-contain scale-75"
              />
            </div>

            <div className="absolute bottom-[3%] right-[45%] z-20 animate-float-slow">
              <Image
                src="/images/AppReview.png"
                alt="Évaluations"
                width={120}
                height={87.27}
                className="object-contain scale-125"
              />
            </div>

            <div className="absolute bottom-[5%] left-[10%] z-20 animate-float">
              <Image
                src="/images/AppCard.png"
                alt="Programme"
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Texte explicatif en dessous */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-gray-700">
            Notre application vous accompagne à chaque étape de votre parcours
            fitness. Suivez vos progrès, planifiez vos entraînements et
            rejoignez une communauté motivante.
          </p>
        </div>
      </div>
    </section>
  );
}

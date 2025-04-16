import Image from "next/image";

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto text-center">
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
              width={80}
              height={80}
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

        <h2 className="mb-6 text-3xl font-bold font-outfit md:text-4xl lg:text-5xl">
          L&apos;application sportive préférée
          <br />
          des français
        </h2>

        <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-700">
          Des programmes sportifs sur plusieurs semaines, des séances libres,
          <br />
          des programmes nutritionnels adaptés à ton poids et tes objectifs
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <p className="text-4xl font-bold font-outfit md:text-5xl lg:text-6xl">
              2 Millions
            </p>
            <p className="mt-2 text-gray-700">De followers</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold font-outfit md:text-5xl lg:text-6xl">
              + 189 k
            </p>
            <p className="mt-2 text-gray-700">inscrits aux programmes</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold font-outfit md:text-5xl lg:text-6xl">
              + 239 k
            </p>
            <p className="mt-2 text-gray-700">De personnes convaincues</p>
          </div>
        </div>
      </div>
    </section>
  );
}

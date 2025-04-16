import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[650px] lg:min-h-[576px] lg:max-h-[576px]">
      <div className="absolute inset-0 z-0">
        <Image src="/images/LandingImage.png" alt="" width={1920} height={1080} className="h-full w-full object-cover md:object-center object-[25%_center]" />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <Image src="/images/LandingPattern.svg" alt="" width={1920} height={1080} className="object-cover w-full h-full md:object-fill" />
      </div>

      <div className="relative z-20 flex items-end h-full py-20 pb-32 container-custom md:py-24 md:pb-24 lg:py-32 md:items-center">
        <div className="w-full max-w-md p-6 mx-auto shadow-lg bg-white/70 backdrop-blur-sm md:p-8 rounded-xl md:mx-0 md:ml-auto mt-[40%] md:mt-0 xl:mr-[10%]">
          <h1 className="mb-4 text-3xl font-bold text-black md:text-4xl">Votre Partenaire Fitness Quotidien</h1>
          <p className="mb-6 text-sm text-gray-700 md:text-base">Nous vous proposons des programmes sportifs et nutritionnels variés, accessibles sur mobile et desktop. Cumulez des points grâce à la gamification et téléchargez des vidéos pour des sessions hors ligne.</p>
          <div className="flex">
            <button className="px-6 py-3 text-white transition-colors bg-black rounded-md hover:bg-gray-800">Je m&apos;abonne</button>
          </div>
        </div>
      </div>
    </section>
  );
}

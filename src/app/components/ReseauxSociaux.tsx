import Image from "next/image";

const socialPosts = [
  {
    id: 1,
    image: "/images/Social1.png",
    alt: "Personne pratiquant du yoga",
  },
  {
    id: 2,
    image: "/images/Social2.png",
    alt: "Exercice de fitness",
  },
  {
    id: 3,
    image: "/images/Social3.png",
    alt: "Plat nutritionnel préparé",
  },
  {
    id: 4,
    image: "/images/Social4.png",
    alt: "Personne avec équipement de sport",
  },
];

export default function ReseauxSociaux() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Suivez-nous sur les réseaux
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-4">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="relative overflow-hidden rounded-xl group"
            >
              <div className="relative aspect-square">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-colors duration-300 bg-black/0 group-hover:bg-black/20"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 font-medium text-white transition-colors bg-black rounded-md hover:bg-gray-800">
            Je m&apos;abonne
          </button>
        </div>
      </div>
    </section>
  );
}

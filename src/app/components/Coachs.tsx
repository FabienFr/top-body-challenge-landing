import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";

const coachs = [
  {
    id: 1,
    name: "Sonia Tlev",
    role: "Fondatrice & Coach sportive",
    image: "/images/CoachSonia.JPG",
    specialties: ["Fitness", "Nutrition", "Post-partum"],
  },
  {
    id: 2,
    name: "Aria Bian",
    role: "Coach sportif",
    image: "/images/CoachAria.jpg",
    specialties: ["Musculation", "HIIT", "Cardio"],
  },
  {
    id: 3,
    name: "Emilie Wong",
    role: "Nutritionniste & Coach sportive",
    image: "/images/CoachEmilie.jpg",
    specialties: ["Nutrition", "Yoga", "Bien-être"],
  },
  {
    id: 4,
    name: "Ylane Poitier",
    role: "Coach sportive",
    image: "/images/CoachYlane.jpg",
    specialties: ["Danse", "Stretching", "Pilates"],
  },
];

export default function Coachs() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          {/* Colonne de gauche - Texte */}
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Des coachs experts dans leur discipline
            </h2>
            <p className="mb-6 text-gray-700">
              Atteignez vos objectifs avec des programmes sur mesure. Choisissez
              parmi de nombreux coachs et recettes, cumulez des points, et
              profitez des vidéos hors ligne. Toujours là pour vous motiver et
              vous soutenir !
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {coachs.map((coach) => (
              <div
                key={coach.id}
                className="relative overflow-hidden group rounded-xl"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{coach.name}</h3>
                  <p className="mb-2 text-sm text-gray-200">{coach.role}</p>

                  <div className="flex flex-wrap gap-1 mt-2">
                    {coach.specialties.map((specialty, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs text-white border-none bg-white/20"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <button className="mt-3 text-xs font-medium underline">
                    Découvrir ses cours
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

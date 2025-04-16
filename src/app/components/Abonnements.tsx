import { Check } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    id: 1,
    title: "19,90 € / 1 mois",
    subtitle: "renouvellement automatique",
    features: [
      "Séances sportives illimitées",
      "Enregistrement hors ligne",
      "Points de fidélisation",
      "Lives",
    ],
    buttonText: "Je m'abonne",
    popular: false,
  },
  {
    id: 2,
    title: "84 € / 6 mois",
    subtitle: "soit 14 € / mois",
    features: [
      "Séances et programmes sportifs",
      "Enregistrement hors ligne",
      "Points de fidélisation",
      "Programmes nutritionnels",
      "Lives",
    ],
    buttonText: "Je choisis cet abonnement",
    popular: false,
  },
  {
    id: 3,
    title: "120 € / 1 an",
    subtitle: "soit 10 € / mois",
    features: [
      "Séances et programmes sportifs",
      "Enregistrement hors ligne",
      "Points de fidélisation",
      "Recettes et programmes nutritionnels",
      "Lives",
      "Chat",
      "Paiement en 3 fois",
    ],
    buttonText: "Je choisis cet abonnement",
    popular: true,
  },
  {
    id: 4,
    title: "180 € / 2 ans",
    subtitle: "soit 7,5 € / mois",
    features: [
      "accès aux nouveaux contenus en exclusivité",
      "Séances et programmes sportifs",
      "Enregistrement hors ligne",
      "Points de fidélisation",
      "Recettes et programmes nutritionnels",
      "Lives",
      "Chat",
      "Paiement en 3 fois",
    ],
    buttonText: "Je choisis cet abonnement",
    popular: false,
  },
];

const benefits = [
  {
    id: 1,
    title: "Utilisation de codes promo sur le site internet",
    image: "/images/CheckIcon.svg",
  },
  {
    id: 2,
    title: "7 jours gratuits pour tester l'appli (accès limité)",
    image: "/images/CheckIcon.svg",
  },
  {
    id: 3,
    title: "Renouvellement automatique des abonnements",
    image: "/images/CheckIcon.svg",
  },
];

export default function Abonnements() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Arrière-plan */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/BgPattern2.svg"
          alt=""
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="relative z-10 container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Les abonnements
          </h2>
        </div>

        {/* Grille des forfaits */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg ${plan.popular ? "transform hover:-translate-y-2" : "hover:-translate-y-1"}`}
            >
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">{plan.title}</h3>
                {plan.subtitle && (
                  <p className="mb-4 text-sm text-gray-500">{plan.subtitle}</p>
                )}

                <ul className="mt-8 mb-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 mr-2 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${plan.id === 1 ? "bg-black text-white hover:bg-gray-800" : "bg-gray-800 text-white hover:bg-black"}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Avantages en bas */}
        <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-center">
              <Image
                src={benefit.image}
                alt=""
                width={24}
                height={24}
                className="mr-3"
              />
              <p className="text-sm">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

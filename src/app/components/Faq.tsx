"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  {
    id: 1,
    question: "Comment puis-je accéder aux programmes après mon inscription ?",
    answer:
      "Après votre inscription, vous recevrez un email de confirmation avec vos identifiants. Vous pourrez alors vous connecter à votre espace personnel sur notre site ou notre application mobile pour accéder à tous vos programmes.",
  },
  {
    id: 2,
    question: "Est-ce que je peux annuler mon abonnement à tout moment ?",
    answer:
      "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel. L'annulation prendra effet à la fin de votre période de facturation en cours. Vous conserverez l'accès jusqu'à cette date.",
  },
  {
    id: 3,
    question: "Les programmes sont-ils adaptés aux débutants ?",
    answer:
      "Absolument ! Nos programmes sont conçus pour tous les niveaux, du débutant à l'expert. Chaque exercice propose des variantes adaptées à votre niveau et nos coachs vous guident pas à pas pour progresser à votre rythme.",
  },
  {
    id: 4,
    question: "Puis-je suivre les programmes sans équipement spécifique ?",
    answer:
      "La plupart de nos programmes de base peuvent être suivis sans équipement ou avec un minimum d'accessoires (tapis, élastiques). Pour certains programmes plus avancés, nous recommandons quelques équipements simples que nous précisons au début de chaque programme.",
  },
  {
    id: 5,
    question: "Comment fonctionnent les programmes nutritionnels ?",
    answer:
      "Nos programmes nutritionnels comprennent des plans de repas équilibrés, des recettes détaillées et des conseils personnalisés. Vous pouvez les adapter selon vos préférences alimentaires et objectifs. Nos nutritionnistes sont également disponibles pour répondre à vos questions.",
  },
  {
    id: 6,
    question: "Y a-t-il une communauté pour échanger avec d'autres membres ?",
    answer:
      "Oui, nous avons une communauté active où vous pouvez partager vos expériences, poser des questions et vous motiver mutuellement. Vous y trouverez également des défis réguliers et des événements en ligne pour rester motivé.",
  },
];

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const filteredFaqItems = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Questions fréquentes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Vous avez des questions ? Nous avons les réponses. Si vous ne
            trouvez pas ce que vous cherchez, n&apos;hésitez pas à nous
            contacter.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Barre de recherche */}
          <div className="relative max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2"
                size={18}
              />
            </div>
          </div>

          {/* Liste des questions */}
          <div className="space-y-4">
            {filteredFaqItems.length > 0 ? (
              filteredFaqItems.map((item) => (
                <div key={item.id} className="mb-4">
                  <button
                    className="flex items-center justify-between w-full p-4 text-left transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={openItem === item.id}
                  >
                    <span className="font-medium">{item.question}</span>
                    {openItem === item.id ? (
                      <ChevronUp className="flex-shrink-0 ml-2" size={20} />
                    ) : (
                      <ChevronDown className="flex-shrink-0 ml-2" size={20} />
                    )}
                  </button>
                  {openItem === item.id && (
                    <div className="p-4 bg-white border-t border-gray-100 rounded-b-lg">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="py-8 text-center">
                <p className="text-gray-500">
                  Aucun résultat trouvé pour &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

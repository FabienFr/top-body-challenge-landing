import Link from "next/link";
import { Home, Dumbbell, Utensils, Heart, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Accueil", href: "/" },
  { icon: Dumbbell, label: "Programmes", href: "#programmes-sportifs" },
  { icon: Utensils, label: "Nutrition", href: "#nutrition" },
  { icon: Heart, label: "Bien-être", href: "#conseil" },
  { icon: User, label: "Sonia", href: "#about" },
];

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <nav className="container mx-auto">
        <ul className="flex items-center justify-center">
          {navItems.map((item, index) => (
            <li key={index} className="flex-1 text-center">
              <Link
                href={item.href}
                className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-black"
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

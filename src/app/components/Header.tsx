import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="flex items-center justify-between py-3 container-custom">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/LogoShort.svg"
            alt="Top Body Challenge"
            width={80}
            height={44}
          />
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link
                href="#programmes-sportifs"
                className="text-sm font-medium hover:text-gray-600"
              >
                Programmes sportifs
              </Link>
            </li>
            <li>
              <Link
                href="#nutrition"
                className="text-sm font-medium hover:text-gray-600"
              >
                Nutrition
              </Link>
            </li>
            <li>
              <Link
                href="#conseil"
                className="text-sm font-medium hover:text-gray-600"
              >
                Conseil bien-être
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-gray-600"
              >
                About Sonia
              </Link>
            </li>
          </ul>
        </nav>

        {/* Boutons d'action */}
        <div className="flex items-center space-x-2">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
          >
            Me connecter
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:bg-gray-50"
          >
            M&apos;inscrire
          </Link>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { id: 1, text: "LES PROGRAMMES SPORTIFS", href: "#programmes-sportifs" },
  { id: 2, text: "NUTRITION", href: "#nutrition" },
  { id: 3, text: "CONSEIL BIEN-ÊTRE", href: "#conseil" },
  { id: 4, text: "ABOUT SONIA", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="py-12 bg-[#FFF0EE]">
      <div className="container-custom">
        <div className="flex flex-col items-start md:flex-row md:items-center">
          <div>
            <div className="pb-20 mt-4 md:mt-0 md:pb-8">
              <Image
                src="/images/LogoShort.svg"
                alt="Body Challenge Logo"
                width={112}
                height={62}
                className="h-auto"
              />
            </div>
            <nav>
              <ul className="hidden space-y-3 lg:block">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium hover:underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

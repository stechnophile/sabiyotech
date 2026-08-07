"use client";

import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Menu, X} from "lucide-react";
import {useState} from "react";
import {useTranslations, useLocale} from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {name: t("home"), href: `/${locale}#home`},
    {name: t("electionTechnology"), href: `/${locale}#election-technology`},
    /*{name: t("caseStudies"), href: `/${locale}#case-studies`},*/
    {name: t("blog"), href: `/${locale}/blog`},
    {name: t("media"), href: `/${locale}#media`},
    {name: t("about"), href: `/${locale}/about`},
    {name: t("contact"), href: `/${locale}/contact`}
  ];

  const switchLocale = locale === "en" ? "ne" : "en";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3"
            >
              <Image
                src="/profile.jpg"
                alt="Yogesh Aryal"
                width={40}
                height={40}
                className="rounded-full border border-gray-200 object-cover"
              />

              <span className="text-2xl font-bold text-slate-900">
                Yogesh Aryal
              </span>
            </Link>
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-700 transition"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher
          <Link
            href={`/${switchLocale}`}
            className="rounded-md border px-3 py-1 text-sm font-medium hover:bg-gray-100"
          >
            {locale === "en" ? "🇳🇵 नेपाली" : "🇬🇧 English"}
          </Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="border-t bg-white md:hidden">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 hover:bg-gray-100"
            >
              {link.name}
            </Link>
          ))}

          {/*<Link
            href={`/${switchLocale}`}
            className="block px-6 py-4 font-semibold text-blue-700"
          >
            {locale === "en" ? "🇳🇵 नेपाली" : "🇬🇧 English"}
          </Link>*/}

        </nav>
      )}
    </header>
  );
}
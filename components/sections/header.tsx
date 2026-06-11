"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Language, content } from "@/lib/translations";
import { useActiveSection } from "@/hooks/use-active-section";

interface HeaderProps {
  language: Language;
  isEnglish: boolean;
}

export function Header({ language, isEnglish }: HeaderProps) {
  const copy = content[language];
  const activeSection = useActiveSection(
    ["home", "sobre", "experiencia", "credenciais", "projetos", "skills", "contato"],
    "home"
  );

  const anchor = (id: string) => (isEnglish ? `/?lang=en#${id}` : `#${id}`);

  const getLinkClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `transition-colors hover:text-primary ${
      isActive ? "text-primary font-bold" : "text-slate-700"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between gap-6">
        <Link href={anchor("home")} className="font-serif text-2xl font-bold text-slate-950">
          Izabelli
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          <Link href={anchor("sobre")} className={getLinkClass("sobre")}>{copy.nav.about}</Link>
          <Link href={anchor("experiencia")} className={getLinkClass("experiencia")}>{copy.nav.experience}</Link>
          <Link href={anchor("credenciais")} className={getLinkClass("credenciais")}>{copy.nav.credentials}</Link>
          <Link href={anchor("projetos")} className={getLinkClass("projetos")}>{copy.nav.projects}</Link>
          <Link href={anchor("skills")} className={getLinkClass("skills")}>{copy.nav.skills}</Link>
          <Link href={anchor("contato")} className={getLinkClass("contato")}>{copy.nav.contact}</Link>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 items-center rounded-md border bg-white p-1 text-xs font-bold text-slate-600"
            aria-label={copy.nav.language}
          >
            <Link
              href="/"
              className={`rounded px-2.5 py-1.5 transition-colors ${
                !isEnglish ? "text-primary shadow-sm" : "hover:bg-accent"
              }`}
              aria-current={!isEnglish ? "true" : undefined}
            >
              PT
            </Link>
            <Link
              href="/?lang=en"
              className={`rounded px-2.5 py-1.5 transition-colors ${
                isEnglish ? "text-primary shadow-sm" : "hover:bg-accent"
              }`}
              aria-current={isEnglish ? "true" : undefined}
            >
              EN
            </Link>
          </div>
          <Button asChild>
            <Link href={anchor("contato")}>
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">{copy.nav.contact}</span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Language, content } from "@/lib/translations";

interface FooterProps {
  language: Language;
}

export function Footer({ language }: FooterProps) {
  const copy = content[language];

  return (
    <footer id="contato" className="bg-primary py-10 text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center gap-5">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/30 bg-white/10">
              <Image
                src="/assets/izabelli.jpeg"
                alt={copy.footer.photoAlt}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold">{copy.footer.title}</h2>
              <p className="mt-1 text-sm text-white/80">{copy.footer.description}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
            <Link
              className="flex items-center gap-3 transition-colors hover:text-white/80"
              href="https://www.linkedin.com/in/izabellisoriano/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="text-sm font-semibold">LinkedIn</span>
            </Link>
            <Link
              className="flex items-center gap-3 transition-colors hover:text-white/80"
              href="https://github.com/bellis0ri4ano"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm font-semibold">GitHub</span>
            </Link>
            <Link className="flex items-center gap-3 transition-colors hover:text-white/80" href="mailto:izabellic_soriano@hotmail.com">
              <Mail className="h-5 w-5" />
              <span className="text-sm font-semibold">{copy.footer.email}</span>
            </Link>
            {copy.footer.phone && copy.footer.phoneLink && (
              <Link
                className="flex items-center gap-3 transition-colors hover:text-white/80"
                href={copy.footer.phoneLink}
                target="_blank"
                rel="noreferrer"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm font-semibold">{copy.footer.phone}</span>
              </Link>
            )}
            <Button asChild variant="secondary" className="mt-2 sm:mt-0 w-full sm:w-auto">
              <Link href="/assets/izabelli-soriano-cv.pdf" target="_blank">
                <Download className="h-4 w-4" />
                {copy.footer.profile}
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="my-8 bg-white/20" />
        <p className="text-center text-sm text-white/80">© 2026 Izabelli</p>
      </div>
    </footer>
  );
}

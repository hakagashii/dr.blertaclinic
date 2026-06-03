import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";
import logo from "@/assets/dr-blerta-logo.png.asset.json";

const links = [
  { href: "#sherbimet", label: "Shërbimet" },
  { href: "#qasja", label: "Qasja" },
  { href: "#dr-blerta", label: "Dr. Blerta" },
  { href: "#procesi", label: "Procesi" },
  { href: "#faq", label: "Pyetje" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Dr. Blerta Clinic"
            className="size-10 sm:size-11 rounded-full object-cover"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[17px] text-foreground">
              Dr. Blerta Clinic
            </span>
            <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
              Estetikë Mjekësore
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-foreground/80 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <CTAButton size="md">Rezervo në Instagram</CTAButton>
        </div>
      </div>
    </header>
  );
}

import { Instagram, MapPin } from "lucide-react";
import logo from "@/assets/dr-blerta-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Dr. Blerta Clinic"
              className="size-12 rounded-full"
            />
            <div>
              <p className="font-display text-[19px]">Dr. Blerta Clinic</p>
              <p className="text-[12px] uppercase tracking-[0.18em] text-background/60">
                Estetikë Mjekësore
              </p>
            </div>
          </div>
          <p className="mt-5 text-[14.5px] text-background/70 max-w-sm leading-relaxed">
            Klinikë e estetikës mjekësore në Prishtinë, e fokusuar në shëndetin
            e lëkurës, harmoninë e fytyrës dhe rezultatet natyrale.
          </p>
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-[0.18em] text-background/60">
            Kontakt
          </p>
          <ul className="mt-5 space-y-3 text-[14.5px]">
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" />
              Prishtinë, Kosovë
            </li>
            <li>
              <a
                href="https://www.instagram.com/dr.blertaclinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Instagram className="size-4 text-primary" />
                @dr.blertaclinic
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-[0.18em] text-background/60">
            Mesazh
          </p>
          <p className="mt-5 text-[14.5px] text-background/75 leading-relaxed">
            Për termin, na shkruani në Instagram me fjalën{" "}
            <span className="text-primary font-medium">“ANALIZË”</span>.
          </p>
          <a
            href="https://www.instagram.com/dr.blertaclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-[14px] font-medium hover:bg-accent transition-colors"
          >
            <Instagram className="size-4" /> Shkruaj në DM
          </a>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-background/55">
          <p>© {new Date().getFullYear()} Dr. Blerta Fetoshi Musa Clinic. Të gjitha të drejtat e rezervuara.</p>
          <p>Prishtinë · Kosovë</p>
        </div>
      </div>
    </footer>
  );
}

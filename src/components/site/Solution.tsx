import { Check } from "lucide-react";
import { CTAButton } from "./CTAButton";

const evals = [
  "Tipi i lëkurës",
  "Gjendja aktuale e lëkurës",
  "Hidratimi",
  "Tekstura",
  "Poret",
  "Njollat",
  "Rrudhat e holla",
  "Elasticiteti",
  "Simetria dhe harmonia e fytyrës",
  "Trajtimet e mëparshme",
  "Pritshmëritë tuaja",
  "Çfarë është dhe çfarë nuk është e nevojshme",
];

export function Solution() {
  return (
    <section id="qasja" className="py-24 sm:py-32 bg-soft-gradient">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
            Qasja jonë
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
            Qasja e Dr. Blerta Clinic:{" "}
            <span className="italic text-accent">
              fillimisht analizë, pastaj trajtim.
            </span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-muted-foreground text-pretty">
            Në Dr. Blerta Clinic, trajtimi nuk fillon me pyetjen “çfarë dëshironi
            të bëni?”, por me pyetjen “çfarë i duhet realisht lëkurës dhe
            fytyrës suaj?”.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-card border border-primary/20 shadow-card">
            <p className="text-[15px] text-foreground/90 leading-relaxed">
              Nëse një trajtim nuk është i përshtatshëm për ju, kjo do të
              shpjegohet qartë. Qëllimi është{" "}
              <span className="text-accent font-medium">siguria</span>,{" "}
              <span className="text-accent font-medium">natyraliteti</span> dhe{" "}
              <span className="text-accent font-medium">
                rezultati i përgjegjshëm
              </span>
              .
            </p>
          </div>

          <div className="mt-8">
            <CTAButton>Dërgo mesazh për analizë</CTAButton>
          </div>
        </div>

        <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
          <p className="text-[13px] uppercase tracking-[0.18em] text-accent font-medium">
            Para rekomandimit vlerësohen
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-4 gap-y-3">
            {evals.map((e) => (
              <li
                key={e}
                className="flex items-start gap-2.5 text-[15px] text-foreground/90"
              >
                <span className="mt-1 size-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Check className="size-3 text-accent" strokeWidth={3} />
                </span>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

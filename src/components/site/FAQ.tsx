import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "A duhet analizë para trajtimit?",
    a: "Po. Analiza ndihmon për të kuptuar gjendjen e lëkurës dhe për të rekomanduar trajtimin e duhur.",
  },
  {
    q: "A do të dukem artificiale pas trajtimit?",
    a: "Qasja e Dr. Blerta Clinic është natyrale, e kujdesshme dhe e bazuar në harmoninë e fytyrës.",
  },
  {
    q: "Nuk e di cili trajtim më duhet. Çfarë të bëj?",
    a: "Pikërisht për këtë shërben analiza e lëkurës. Fillimisht kuptohet gjendja e lëkurës, pastaj jepet rekomandimi.",
  },
  {
    q: "A është analiza falas?",
    a: "Gjatë muajit të hapjes, analiza e lëkurës ofrohet falas për një numër të limituar terminesh.",
  },
  {
    q: "A mund të më thotë doktoresha që nuk kam nevojë për trajtim?",
    a: "Po. Nëse një trajtim nuk është i nevojshëm ose i përshtatshëm, kjo do të shpjegohet qartë.",
  },
  {
    q: "A janë trajtimet të njëjta për çdo person?",
    a: "Jo. Çdo fytyrë dhe çdo lëkurë është ndryshe. Prandaj rekomandimi bëhet individualisht.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
            Pyetjet më të shpeshta
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
            Çdo gjë që doni të dini.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 bg-secondary/40 shadow-card"
                    : "border-border bg-card"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-[19px] sm:text-[21px] text-foreground">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 size-9 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-accent text-accent-foreground rotate-45"
                        : "bg-secondary text-accent"
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15.5px] text-foreground/80 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

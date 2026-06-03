import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { Sparkles } from "lucide-react";

const options = [
  "Fytyrë e lodhur",
  "Lëkurë e thatë",
  "Rrudha të holla",
  "Njolla",
  "Pore të dukshme",
  "Humbje freskie",
  "Celulit",
  "Nuk jam e sigurt",
];

export function Quiz() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-soft-gradient">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="rounded-3xl bg-card border border-primary/20 shadow-soft p-8 sm:p-12">
          <div className="flex items-center gap-2 text-accent text-[12px] tracking-[0.2em] uppercase font-medium">
            <Sparkles className="size-3.5" />
            Çfarë i duhet lëkurës suaj?
          </div>
          <h2 className="mt-3 text-[28px] sm:text-[38px] font-display text-foreground text-balance">
            Cili është shqetësimi juaj kryesor?
          </h2>
          <p className="mt-3 text-[15px] text-muted-foreground">
            Zgjedhni një opsion për të marrë një rekomandim të parë.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {options.map((o) => {
              const active = selected === o;
              return (
                <button
                  key={o}
                  onClick={() => setSelected(o)}
                  className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 text-[15px] ${
                    active
                      ? "bg-accent text-accent-foreground border-accent shadow-card"
                      : "bg-background border-border hover:border-primary hover:bg-secondary/50 text-foreground"
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>

          {selected && (
            <div className="mt-8 p-6 rounded-2xl bg-secondary/60 border border-primary/20 animate-fade-up">
              <p className="text-[15.5px] text-foreground/90 leading-relaxed">
                Për shqetësimin <span className="font-medium text-accent">“{selected}”</span>,
                analiza profesionale e lëkurës është hapi i parë për të kuptuar
                çfarë trajtimi është i përshtatshëm për ju.
              </p>
              <div className="mt-5">
                <CTAButton>Rezervo analizën falas në Instagram</CTAButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

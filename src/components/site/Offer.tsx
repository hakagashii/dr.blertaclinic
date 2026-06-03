import { CTAButton } from "./CTAButton";
import { CalendarClock, Check } from "lucide-react";

const benefits = [
  "Çfarë tipi lëkure keni",
  "Në çfarë gjendje është lëkura juaj",
  "Çfarë i mungon lëkurës",
  "Cilat trajtime mund të jenë të përshtatshme",
  "Cilat trajtime nuk janë të nevojshme",
  "Si të kujdeseni më mirë për fytyrën tuaj",
];

export function Offer() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/60">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="rounded-[2rem] bg-card border border-primary/20 shadow-soft overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="p-8 sm:p-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3.5 py-1.5 text-[11px] tracking-[0.16em] uppercase font-medium">
                <CalendarClock className="size-3.5" />
                Muaji i hapjes
              </div>
              <h2 className="mt-5 text-[32px] sm:text-[44px] font-display text-foreground text-balance leading-[1.1]">
                Analizë <span className="italic text-accent">falas</span> e
                lëkurës gjatë muajit të hapjes.
              </h2>
              <p className="mt-5 text-[16px] text-muted-foreground text-pretty">
                Për muajin e hapjes, Dr. Blerta Clinic ofron analizë profesionale
                falas të lëkurës për një numër të limituar terminesh.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton>Rezervo analizën falas në Instagram</CTAButton>
                <CTAButton variant="secondary" showArrow={false}>
                  Na shkruani në Instagram
                </CTAButton>
              </div>
              <p className="mt-5 text-[13px] text-muted-foreground">
                Terminet për muajin e hapjes janë të limituara.
              </p>
            </div>

            <div className="bg-soft-gradient p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-border">
              <p className="text-[13px] uppercase tracking-[0.18em] text-accent font-medium">
                Gjatë analizës do të kuptoni
              </p>
              <ul className="mt-5 space-y-3">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[15px] text-foreground/90"
                  >
                    <span className="mt-0.5 size-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                      <Check
                        className="size-3 text-accent-foreground"
                        strokeWidth={3}
                      />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

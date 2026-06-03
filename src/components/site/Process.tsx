import { CTAButton } from "./CTAButton";

const steps = [
  {
    n: "01",
    title: "Kontakti i parë",
    desc: "Na shkruani në Instagram ose rezervoni termin tuaj përmes DM.",
  },
  {
    n: "02",
    title: "Analiza e lëkurës",
    desc: "Vlerësohet gjendja e lëkurës, shqetësimet dhe nevojat reale.",
  },
  {
    n: "03",
    title: "Rekomandimi profesional",
    desc: "Dr. Blerta ju shpjegon çfarë është e përshtatshme, çfarë jo dhe çfarë mund të pritet realisht.",
  },
  {
    n: "04",
    title: "Plani individual",
    desc: "Përgatitet një plan i personalizuar sipas lëkurës, fytyrës dhe qëllimeve tuaja.",
  },
  {
    n: "05",
    title: "Trajtimi dhe kujdesi pas tij",
    desc: "Pas trajtimit merrni udhëzime të qarta për kujdesin dhe vazhdimin e rezultateve.",
  },
];

export function Process() {
  return (
    <section id="procesi" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
            Procesi
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
            Si funksionon vizita në{" "}
            <span className="italic text-accent">Dr. Blerta Clinic?</span>
          </h2>
        </div>

        <ol className="mt-12 space-y-3">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="group grid sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 items-start p-6 sm:p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:bg-secondary/30 transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-[40px] text-accent leading-none">
                  {s.n}
                </span>
              </div>
              <div>
                <h3 className="text-[20px] font-display text-foreground">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[15px] text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <CTAButton>Shkruani “ANALIZË” në Instagram</CTAButton>
          <p className="text-[14px] text-muted-foreground">
            Terminet për muajin e hapjes janë të limituara.
          </p>
        </div>
      </div>
    </section>
  );
}

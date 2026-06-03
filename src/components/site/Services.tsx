import {
  Activity,
  Droplet,
  Flower,
  Microscope,
  Scan,
  Sparkles,
  Sun,
  Syringe,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Microscope,
    name: "Analizë e lëkurës",
    desc: "Vlerësim profesional për të kuptuar gjendjen e lëkurës suaj dhe për të ndërtuar rekomandim të personalizuar.",
  },
  {
    icon: Sparkles,
    name: "Trajtime të fytyrës",
    desc: "Trajtime për pastrim, freski, hidratim, shkëlqim dhe përmirësim të pamjes së lëkurës.",
  },
  {
    icon: Droplet,
    name: "Jalupro",
    desc: "Trajtim estetik që mbështet freskinë, hidratimin dhe cilësinë e lëkurës, sipas vlerësimit profesional.",
  },
  {
    icon: Flower,
    name: "Ellure",
    desc: "Trajtim i fokusuar në përmirësimin e pamjes së lëkurës, freskinë dhe kujdesin estetik natyral.",
  },
  {
    icon: Syringe,
    name: "Fillers",
    desc: "Trajtime të aplikuara me kujdes për të mbështetur harmoninë e fytyrës, balancën dhe rezultatet natyrale.",
  },
  {
    icon: Activity,
    name: "Botox",
    desc: "Trajtim mjekësor estetik për linjat e mimikës, me qëllim pamje më të freskët dhe pa efekt artificial.",
  },
  {
    icon: Wind,
    name: "Trajtime kundër celulitit",
    desc: "Trajtime të fokusuara në përmirësimin e pamjes së lëkurës dhe zonave me celulit.",
  },
  {
    icon: Sun,
    name: "Shenja pas djegieve",
    desc: "Kujdes profesional për shenja dhe ndryshime të lëkurës pas djegieve, bazuar në vlerësim.",
  },
  {
    icon: Scan,
    name: "Kapilarë rreth syve",
    desc: "Vlerësim dhe trajtim i kujdesshëm për kapilarë të dukshëm në zonën rreth syve.",
  },
];

export function Services() {
  return (
    <section id="sherbimet" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
            Shërbimet
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
            Shërbime për lëkurë të shëndetshme, freski dhe pamje natyrale.
          </h2>
          <p className="mt-5 text-[16px] text-muted-foreground">
            Çdo shërbim ofrohet pas analizës dhe vlerësimit profesional. Rezultatet
            ndryshojnë nga personi në person.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, name, desc }) => (
            <article
              key={name}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:bg-secondary/40 hover:-translate-y-1 transition-all duration-300 shadow-card/0 hover:shadow-card"
            >
              <div className="size-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors">
                <Icon className="size-5 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="mt-5 text-[22px] font-display text-foreground">
                {name}
              </h3>
              <p className="mt-2.5 text-[15px] text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

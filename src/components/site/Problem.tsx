import {
  Droplets,
  Eye,
  Flower2,
  HeartPulse,
  Leaf,
  Search,
  Sparkle,
} from "lucide-react";

const pains = [
  { icon: Search, text: "Nuk e dini saktë çfarë i duhet lëkurës suaj" },
  { icon: HeartPulse, text: "Fytyra duket e lodhur ose pa freski" },
  { icon: Droplets, text: "Lëkura është e thatë, e ndjeshme ose e dehidratuar" },
  { icon: Eye, text: "Keni frikë të dukeni artificiale" },
  { icon: Sparkle, text: "Nuk doni trajtime të tepruara" },
  { icon: Leaf, text: "Doni kujdes profesional, jo rekomandime të rastësishme" },
  { icon: Flower2, text: "Doni një plan që i përshtatet fytyrës suaj" },
];

export function Problem() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
            Shqetësimet
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
            Shumë gra nuk kanë nevojë për më shumë trajtime.{" "}
            <span className="italic text-accent">
              Kanë nevojë për analizën e duhur.
            </span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-muted-foreground text-pretty">
            Shpesh, trajtimet estetike zgjidhen pa e kuptuar mirë lëkurën, pa
            analizë dhe pa vlerësim profesional. Kjo mund të çojë në rezultate
            që nuk duken natyrale, në trajtime të panevojshme ose në pritshmëri
            jo reale.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300"
            >
              <div className="size-11 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="size-5 text-accent group-hover:text-accent-foreground" />
              </div>
              <p className="text-[15px] text-foreground/90 leading-snug pt-1.5">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center font-display text-[26px] sm:text-[34px] text-foreground italic text-balance">
          “Fytyra juaj nuk duhet të trajtohet me hamendësime.”
        </p>
      </div>
    </section>
  );
}

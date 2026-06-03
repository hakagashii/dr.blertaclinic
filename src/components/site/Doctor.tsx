import { Award, BookOpen, HandHeart, ShieldCheck } from "lucide-react";
import treatment from "@/assets/dr-blerta-treatment.jpeg.asset.json";

const points = [
  { icon: Award, text: "Në mjekësi që nga viti 2015 · 12+ vite përvojë" },
  { icon: BookOpen, text: "Fokus në estetikë mjekësore dhe trajtime të fytyrës" },
  { icon: ShieldCheck, text: "Qasje e bazuar në analizë dhe siguri" },
  { icon: HandHeart, text: "Kujdes individual për çdo kliente" },
];

export function Doctor() {
  return (
    <section id="dr-blerta" className="py-24 sm:py-32 bg-soft-gradient">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-secondary/60 rounded-[2.5rem] blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft border border-white">
            <img
              src={treatment.url}
              alt="Dr. Blerta Fetoshi Musa duke kryer trajtim në klinikë"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
            Pse Dr. Blerta
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
            Pse t’ia besoni fytyrën{" "}
            <span className="italic text-accent">Dr. Blertës?</span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-muted-foreground text-pretty">
            Dr. Blerta Fetoshi Musa është doktoreshë me përvojë profesionale në
            mjekësi që nga viti 2015 dhe me fokus të veçantë në estetikë
            mjekësore, trajtime të fytyrës dhe kujdes të lëkurës. Ajo punon me
            një parim të qartë: asnjë fytyrë nuk duhet të trajtohet njësoj.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="p-5 rounded-2xl bg-card border border-border flex items-start gap-3"
              >
                <Icon className="size-5 text-accent shrink-0 mt-0.5" />
                <p className="text-[14.5px] text-foreground/90 leading-snug">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-display italic text-[22px] sm:text-[26px] text-foreground text-balance">
            “Sepse fytyra nuk është vend për eksperimente.”
          </p>
        </div>
      </div>
    </section>
  );
}

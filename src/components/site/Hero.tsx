import { CTAButton } from "./CTAButton";
import { ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import portrait from "@/assets/dr-blerta-portrait.png.asset.json";

const trust = [
  "Udhëhequr nga Dr. Blerta Fetoshi Musa",
  "Në mjekësi që nga viti 2015 · 12+ vite përvojë",
  "Analizë e lëkurës para çdo trajtimi",
  "Fokus në rezultate natyrale dhe të sigurta",
];

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-hero-gradient">
      {/* Soft blue ambient orbs */}
      <div className="blue-orb size-[420px] -top-32 -right-24 bg-secondary animate-float" />
      <div
        className="blue-orb size-[320px] top-40 -left-24 bg-primary/30 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/70 border border-primary/15 px-4 py-1.5 text-[12px] tracking-[0.16em] uppercase text-accent font-medium">
            <Sparkles className="size-3.5" />
            Klinikë estetike mjekësore · Prishtinë
          </div>

          <h1 className="mt-6 text-[40px] leading-[1.08] sm:text-[56px] lg:text-[64px] font-display text-foreground text-balance">
            Estetikë mjekësore për lëkurë{" "}
            <span className="italic text-accent">të shëndetshme</span>, pamje të
            freskët dhe bukuri natyrale.
          </h1>

          <p className="mt-6 text-[17px] sm:text-[18px] text-muted-foreground max-w-xl text-pretty leading-relaxed">
            Në Dr. Blerta Clinic, çdo trajtim fillon me analizë profesionale të
            lëkurës, vlerësim të kujdesshëm dhe qasje individuale — që rezultati
            të duket natyral, i sigurt dhe në harmoni me fytyrën tuaj.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton variant="primary">
              Rezervo analizën falas në Instagram
            </CTAButton>
            <CTAButton variant="secondary" showArrow={false}>
              Na shkruani në Instagram
            </CTAButton>
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
            {trust.map((t) => (
              <li
                key={t}
                className="flex items-start gap-2.5 text-[14px] text-foreground/85"
              >
                <ShieldCheck className="size-4 text-accent shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 bg-gradient-to-br from-secondary via-transparent to-primary/20 rounded-[2.5rem] blur-2xl opacity-70" />
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft border border-white">
            <img
              src={portrait.url}
              alt="Dr. Blerta Fetoshi Musa, doktoreshë e estetikës mjekësore në Prishtinë"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* floating badge */}
          <div className="hidden sm:flex absolute -left-6 bottom-10 bg-card rounded-2xl shadow-card border border-border px-5 py-4 items-center gap-3 max-w-[260px]">
            <div className="size-10 rounded-full bg-secondary flex items-center justify-center">
              <Stethoscope className="size-5 text-accent" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-foreground leading-tight">
                Analizë profesionale
              </p>
              <p className="text-[12px] text-muted-foreground">
                Para çdo trajtimi
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

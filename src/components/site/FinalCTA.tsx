import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-blue-gradient relative overflow-hidden">
      <div className="blue-orb size-[500px] -top-40 -left-40 bg-white/20 animate-float" />
      <div
        className="blue-orb size-[420px] -bottom-32 -right-24 bg-white/15 animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center text-white">
        <h2 className="text-[36px] sm:text-[54px] font-display text-balance leading-[1.05]">
          Filloni me <span className="italic">analizë</span>,<br /> jo me
          hamendësime.
        </h2>
        <p className="mt-6 text-[17px] sm:text-[18px] text-white/85 max-w-2xl mx-auto text-pretty">
          Para se të zgjidhni një trajtim, kuptoni së pari lëkurën tuaj.
          Rezervoni analizën falas të lëkurës dhe merrni rekomandim profesional
          nga Dr. Blerta Clinic.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="https://www.instagram.com/dr.blertaclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white text-accent px-7 py-3.5 text-[16px] font-medium shadow-soft hover:-translate-y-0.5 transition-all"
          >
            Rezervo analizën falas në Instagram
          </a>
          <a
            href="https://www.instagram.com/dr.blertaclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur text-white border border-white/40 px-7 py-3.5 text-[16px] font-medium hover:bg-white/20 transition-all"
          >
            Na shkruani në Instagram
          </a>
        </div>
        <p className="mt-6 text-[13px] text-white/70 tracking-wide">
          Shkruani “ANALIZË” në DM · Terminet janë të limituara
        </p>
      </div>
    </section>
  );
}

// keep CTAButton import to avoid unused warning in some bundlers
void CTAButton;

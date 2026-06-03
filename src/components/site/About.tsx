export function About() {
  return (
    <section className="py-24 sm:py-32 bg-soft-gradient">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
          Mbi klinikën
        </span>
        <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
          Njihuni me Dr. Blerta Fetoshi Musa
        </h2>
        <p className="mt-6 text-[16.5px] sm:text-[17.5px] text-foreground/85 leading-relaxed text-pretty">
          Dr. Blerta Fetoshi Musa është doktoreshë me përvojë profesionale në
          mjekësi që nga viti 2015. Me kalimin e viteve, ajo ka zhvilluar fokus
          të veçantë në estetikë mjekësore, trajtime të fytyrës, kujdes të
          lëkurës dhe rezultate natyrale.
        </p>
        <p className="mt-5 text-[16.5px] text-muted-foreground leading-relaxed text-pretty">
          Dr. Blerta Clinic është krijuar si një hapësirë ku gratë mund të
          ndihen të sigurta, të dëgjuara dhe të udhëzuara profesionalisht.
          Qëllimi nuk është të ndryshohet fytyra, por të ruhet harmonia, freskia
          dhe bukuria natyrale e saj.
        </p>

        <div className="mt-10 mx-auto max-w-2xl p-7 rounded-3xl bg-card border border-primary/20 shadow-card">
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent font-medium">
            Misioni ynë
          </p>
          <p className="mt-3 font-display italic text-[22px] sm:text-[26px] text-foreground text-balance leading-snug">
            “Të ofrojmë kujdes estetik mjekësor që respekton fytyrën, lëkurën
            dhe natyralitetin e çdo gruaje.”
          </p>
        </div>
      </div>
    </section>
  );
}

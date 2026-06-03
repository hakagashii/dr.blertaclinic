const nos = [
  "Jo rezultate të tepruara",
  "Jo pamje artificiale",
  "Jo trajtime pa analizë",
  "Jo presion për procedura të panevojshme",
  "Jo qasje e njëjtë për çdo fytyrë",
];
const yeses = [
  "Po kujdes individual",
  "Po lëkurë më e shëndetshme",
  "Po freski dhe harmoni",
  "Po siguri dhe shpjegim i qartë",
  "Po rezultate natyrale",
];

export function Philosophy() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
            Filozofia jonë
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
            Natyrale nuk do të thotë pa kujdes.{" "}
            <span className="italic text-accent">
              Natyrale do të thotë e bërë me masë.
            </span>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] text-muted-foreground text-pretty">
            Qëllimi i estetikës mjekësore nuk është të ndryshojë fytyrën. Qëllimi
            është ta bëjë atë të duket më e freskët, më e pushuar dhe më
            harmonike — pa humbur natyralitetin.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-card border border-border shadow-card">
            <p className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
              Çfarë nuk bëjmë
            </p>
            <ul className="mt-5 space-y-3">
              {nos.map((n) => (
                <li
                  key={n}
                  className="flex items-center gap-3 text-[15.5px] text-foreground/85"
                >
                  <span className="size-1.5 rounded-full bg-muted-foreground" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-accent text-accent-foreground shadow-soft">
            <p className="text-[13px] uppercase tracking-[0.18em] opacity-80 font-medium">
              Çfarë bëjmë
            </p>
            <ul className="mt-5 space-y-3">
              {yeses.map((y) => (
                <li key={y} className="flex items-center gap-3 text-[15.5px]">
                  <span className="size-1.5 rounded-full bg-accent-foreground" />
                  {y}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

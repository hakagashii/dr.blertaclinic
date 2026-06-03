const items = [
  "Çdo gjë shpjegohet qartë",
  "Nuk ka presion për trajtime të panevojshme",
  "Rekomandimi bëhet pas analizës",
  "Qëllimi është rezultat natyral",
  "Siguria është prioritet",
  "Pritshmëritë vendosen realisht",
];

export function Fears() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
          Sigurija juaj
        </span>
        <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
          Keni frikë të dukeni artificiale?{" "}
          <span className="italic text-accent">Kjo është normale.</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-[16px] sm:text-[17px] text-muted-foreground text-pretty">
          Shumë gra duan të kujdesen për fytyrën, por kanë frikë nga rezultatet
          e tepruara, dhimbja, efektet anësore ose zgjedhja e trajtimit të
          gabuar.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
          {items.map((i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-secondary/40 border border-primary/15"
            >
              <p className="text-[15px] text-foreground/90">{i}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-display italic text-[24px] sm:text-[30px] text-foreground text-balance">
          “Ju duhet të ndiheni e sigurt para se të vendosni për çdo trajtim.”
        </p>
      </div>
    </section>
  );
}

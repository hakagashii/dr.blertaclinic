import {
  ClipboardList,
  FileCheck2,
  HeartHandshake,
  MessagesSquare,
  Microscope,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
} from "lucide-react";

const items = [
  { icon: Stethoscope, text: "Konsultim para trajtimit" },
  { icon: Microscope, text: "Analizë e lëkurës para rekomandimit" },
  { icon: ShieldCheck, text: "Higjienë dhe sterilitet" },
  { icon: ClipboardList, text: "Protokolle profesionale" },
  { icon: Sparkles, text: "Produkte të sigurta" },
  { icon: MessagesSquare, text: "Shpjegim i qartë për çdo procedurë" },
  { icon: UserCheck, text: "Qasje individuale" },
  { icon: ScrollText, text: "Udhëzime pas trajtimit" },
  { icon: HeartHandshake, text: "Vendimmarrje etike" },
  { icon: FileCheck2, text: "Pa presion komercial" },
];

export function Standards() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-medium">
            Standard mjekësor
          </span>
          <h2 className="mt-3 text-[32px] sm:text-[44px] font-display text-foreground text-balance">
            Standard mjekësor, kujdes i pastër dhe komunikim i qartë.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="p-5 rounded-2xl bg-muted border border-border hover:border-primary/30 transition-colors"
            >
              <Icon className="size-5 text-accent" />
              <p className="mt-3 text-[14px] text-foreground/85 leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

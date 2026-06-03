import { Instagram } from "lucide-react";

export function FloatingCTA() {
  return (
    <>
      {/* Floating Instagram button - desktop */}
      <a
        href="https://www.instagram.com/dr.blertaclinic/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Na shkruani në Instagram"
        className="hidden sm:flex fixed bottom-6 right-6 z-40 size-14 rounded-full bg-accent text-accent-foreground items-center justify-center shadow-glow hover:scale-110 transition-transform"
      >
        <Instagram className="size-6" />
      </a>

      {/* Mobile sticky bottom CTA */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/90 backdrop-blur-md border-t border-border">
        <a
          href="https://www.instagram.com/dr.blertaclinic/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-[15px] font-medium shadow-soft active:bg-accent"
        >
          <Instagram className="size-4" />
          Rezervo analizën falas
        </a>
      </div>
    </>
  );
}

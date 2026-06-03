import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { Services } from "@/components/site/Services";
import { Doctor } from "@/components/site/Doctor";
import { Philosophy } from "@/components/site/Philosophy";
import { Process } from "@/components/site/Process";
import { Quiz } from "@/components/site/Quiz";
import { Fears } from "@/components/site/Fears";
import { Offer } from "@/components/site/Offer";
import { Standards } from "@/components/site/Standards";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Dr. Blerta Clinic | Estetikë Mjekësore dhe Analizë e Lëkurës në Prishtinë",
      },
      {
        name: "description",
        content:
          "Dr. Blerta Clinic në Prishtinë ofron analizë profesionale të lëkurës, trajtime të fytyrës dhe estetikë mjekësore me fokus në rezultate natyrale, siguri dhe kujdes individual.",
      },
      {
        name: "keywords",
        content:
          "Dr. Blerta Clinic, Dr. Blerta Fetoshi Musa, estetikë mjekësore Prishtinë, analizë e lëkurës Prishtinë, trajtime fytyre, fillers Prishtinë, botox Prishtinë, Jalupro Prishtinë, klinikë estetike",
      },
      {
        property: "og:title",
        content:
          "Dr. Blerta Clinic | Estetikë Mjekësore dhe Analizë e Lëkurës në Prishtinë",
      },
      {
        property: "og:description",
        content:
          "Analizë falas e lëkurës gjatë muajit të hapjes. Rezultate natyrale, qasje individuale, standard mjekësor.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Dr. Blerta Fetoshi Musa Clinic",
          alternateName: "Dr. Blerta Clinic",
          medicalSpecialty: "CosmeticDentistry",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Prishtinë",
            addressCountry: "XK",
          },
          sameAs: ["https://www.instagram.com/dr.blertaclinic/"],
          founder: {
            "@type": "Person",
            name: "Dr. Blerta Fetoshi Musa",
            jobTitle: "Doktoreshë e Estetikës Mjekësore",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Doctor />
      <Philosophy />
      <Process />
      <Quiz />
      <Fears />
      <Offer />
      <Standards />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
      <div className="h-20 sm:hidden" />
    </main>
  );
}

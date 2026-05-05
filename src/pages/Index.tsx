import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import restaurantImg from "@/assets/restaurant-hero.jpg";
import mechanicImg from "@/assets/mechanic-hero.jpg";
import storeImg from "@/assets/store-hero.jpg";
import cafeImg from "@/assets/cafe-hero.jpg";
import { useEffect } from "react";

const showcases = [
  { slug: "restaurant", name: "Bella Notte", tag: "Restaurang", img: restaurantImg, desc: "Elegant restaurangsida med meny och bordsbokning." },
  { slug: "mechanic", name: "Apex Bilverkstad", tag: "Bilverkstad", img: mechanicImg, desc: "Tydlig sida med tjänster, prislista och tidsbokning." },
  { slug: "store", name: "Maison Modern", tag: "Butik", img: storeImg, desc: "Ren e-handelsdesign med fokus på produkterna." },
  { slug: "cafe", name: "Ember & Oak", tag: "Café", img: cafeImg, desc: "Varm och välkomnande caféprofil med meny och info." },
];

const services = [
  { title: "Skräddarsydd design", text: "Unik design som speglar ditt varumärke och dina kunder." },
  { title: "Snabb och modern", text: "Byggd med modern teknik för bästa prestanda och SEO." },
  { title: "Mobilanpassad", text: "Fungerar perfekt på mobil, surfplatta och dator." },
  { title: "Klar på två veckor", text: "Från första samtal till färdig sida — utan krångel." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Tage's Hemsidor — Hemsidor för småföretag";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="font-semibold tracking-tight text-lg">Tage's Hemsidor</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#arbeten" className="hover:text-foreground transition-smooth">Arbeten</a>
            <a href="#tjanster" className="hover:text-foreground transition-smooth">Tjänster</a>
            <a href="#process" className="hover:text-foreground transition-smooth">Process</a>
            <a href="#kontakt" className="hover:text-foreground transition-smooth">Kontakt</a>
          </nav>
          <Button asChild size="sm">
            <a href="#kontakt">Kom igång</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Frilansande webbutvecklare</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
            Snygga hemsidor för småföretag som vill växa.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Jag designar och bygger enkla, snabba och professionella hemsidor. Nedan hittar du fyra exempel — klicka runt som en riktig kund.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#arbeten">Se exempel <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#kontakt">Begär offert</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Showcase grid */}
      <section id="arbeten" className="py-24 border-b border-border">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Exempel</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Utvalda arbeten</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Varje exempel är en fullt fungerande sida — klicka in och utforska.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {showcases.map((s) => (
              <Link key={s.slug} to={`/showcase/${s.slug}`}
                className="group block rounded-lg border border-border bg-card overflow-hidden transition-smooth hover:border-foreground/30">
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img src={s.img} alt={s.name} loading="lazy" width={1600} height={1000}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-[1.02]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="uppercase tracking-widest">{s.tag}</span>
                    <span>{s.slug}.tageshemsidor.se</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium">
                    Besök demo <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="tjanster" className="py-24 border-b border-border">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Vad jag gör</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Allt du behöver, inget extra.</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ title, text }) => (
              <div key={title} className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 border-b border-border">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Från idé till lansering på två veckor.</h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Tydligt arbetssätt med veckovisa avstämningar. Du har koll utan att lyfta ett finger.
            </p>
          </div>
          <ol className="space-y-4">
            {[
              ["01 — Möte", "Vi pratar mål, målgrupp och känsla."],
              ["02 — Design", "Jag tar fram en unik skiss anpassad efter ditt varumärke."],
              ["03 — Bygg", "Färdig kod, innehåll och integrationer."],
              ["04 — Lansering", "Domän, hosting och SEO på plats. Sedan kör vi."],
            ].map(([title, text]) => (
              <li key={title} className="p-5 rounded-lg border border-border bg-card">
                <h4 className="font-semibold">{title}</h4>
                <p className="text-muted-foreground text-sm mt-1">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-24">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Redo för en hemsida som faktiskt fungerar?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Boka ett gratis 20-minuterssamtal. Jag kollar din nuvarande sida och ger en tydlig plan framåt.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <a href="mailto:hej@tageshemsidor.se">Maila hej@tageshemsidor.se</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border text-sm text-muted-foreground">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Tage's Hemsidor</p>
          <p>hej@tageshemsidor.se</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { Button } from "@/components/ui/button";
import { Wrench, Gauge, ShieldCheck, Phone, Clock, MapPin, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/mechanic-hero.jpg";

const services = [
  { icon: Wrench, title: "Service & reparation", text: "Motor, växellåda, bromsar, fjädring — vi fixar allt." },
  { icon: Gauge, title: "Felsökning", text: "Avancerad datordiagnostik för alla bilmärken." },
  { icon: ShieldCheck, title: "2 års garanti", text: "Varje reparation täcks av vår garanti på delar och arbete." },
];

const pricing = [
  ["Olje- och filterbyte", "595 kr"],
  ["Bromsbeläggsbyte", "1 790 kr"],
  ["Hjulskifte & balansering", "490 kr"],
  ["Felsökning", "890 kr"],
  ["AC-service", "1 290 kr"],
  ["Kontrollbesiktning", "350 kr"],
];

const Mechanic = () => (
  <ShowcaseFrame themeClass="theme-mechanic" subdomain="apexbil.tageshemsidor.se" title="Apex Bilverkstad — Pålitlig service">
    <header className="absolute top-9 inset-x-0 z-30">
      <div className="container flex items-center justify-between h-20 text-foreground">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary grid place-items-center"><Wrench className="h-4 w-4 text-primary-foreground" /></div>
          <span className="font-bold text-xl tracking-tight">APEX BILVERKSTAD</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase">
          <a href="#tjanster">Tjänster</a><a href="#priser">Priser</a><a href="#kontakt">Kontakt</a>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:opacity-90">Boka tid</Button>
      </div>
    </header>

    <section className="relative h-[85vh] min-h-[600px] flex items-center">
      <img src={heroImg} alt="" width={1600} height={1024} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container relative">
        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">Familjeägd sedan 1998</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-black uppercase text-foreground leading-[0.95] max-w-4xl">
          Ärlig service.<br /><span className="text-primary">Gjord rätt.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/85 max-w-xl">
          Certifierade tekniker. Tydliga priser. Samma dag-service på de flesta jobb. Vi tar hand om din bil som vår egen.
        </p>
        <div className="mt-10 flex gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 font-bold">Boka service</Button>
          <Button size="lg" variant="outline" className="border-foreground/40 text-foreground hover:bg-foreground/10">08-728 28 86</Button>
        </div>
      </div>
    </section>

    <section id="tjanster" className="py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center">Vad vi gör</h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-8 bg-card border border-border rounded-xl border-t-4 border-t-primary">
              <Icon className="h-10 w-10 text-primary" />
              <h3 className="mt-5 text-xl font-bold uppercase">{title}</h3>
              <p className="mt-3 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="priser" className="py-24 bg-secondary">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase">Tydliga priser</h2>
          <p className="mt-4 text-muted-foreground">Inga överraskningar. Bara rättvisa priser.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-3">
          {pricing.map(([service, price]) => (
            <div key={service} className="flex items-center justify-between p-5 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium">{service}</span>
              </div>
              <span className="font-black text-lg text-primary">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="kontakt" className="py-24">
      <div className="container grid md:grid-cols-3 gap-6">
        {[
          { icon: MapPin, title: "Besök", text: "Industrivägen 88" },
          { icon: Clock, title: "Öppettider", text: "Mån–Fre 07–18 · Lör 08–14" },
          { icon: Phone, title: "Ring", text: "08-728 28 86" },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="p-8 bg-card border border-border rounded-xl">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-bold uppercase">{title}</h3>
            <p className="text-muted-foreground mt-2">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Apex Bilverkstad
    </footer>
  </ShowcaseFrame>
);

export default Mechanic;

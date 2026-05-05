import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { Button } from "@/components/ui/button";
import { Coffee, Leaf, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/cafe-hero.jpg";

const drinks = [
  { name: "Husets espresso", desc: "Etiopiska bönor, toner av kakao och citrus", price: "35" },
  { name: "Havrelatte", desc: "Krämig och balanserad, vår mest älskade", price: "49" },
  { name: "Cortado", desc: "Lika delar espresso och varm mjölk", price: "42" },
  { name: "Cold brew", desc: "18 timmars bryggning, mjuk och fyllig", price: "47" },
  { name: "Matcha latte", desc: "Ceremoniell matcha, vispad på beställning", price: "55" },
  { name: "Varm choklad", desc: "70% mörk, hemgjord ganache", price: "45" },
];

const Cafe = () => (
  <ShowcaseFrame themeClass="theme-cafe" subdomain="emberandoak.tageshemsidor.se" title="Ember & Oak — Specialkaffe">
    <header className="absolute top-9 inset-x-0 z-30">
      <div className="container flex items-center justify-between h-20 text-foreground">
        <div className="flex items-center gap-2"><Coffee className="h-6 w-6" /><span className="font-serif text-xl">Ember & Oak</span></div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#meny">Meny</a><a href="#story">Vår historia</a><a href="#besok">Besök</a>
        </nav>
        <Button size="sm" className="bg-primary text-primary-foreground hover:opacity-90">Beställ online</Button>
      </div>
    </header>

    <section className="relative h-[88vh] min-h-[600px] flex items-center">
      <img src={heroImg} alt="" width={1600} height={1024} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container relative text-center max-w-3xl mx-auto">
        <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm">Lokalt rosteri</p>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl text-primary-foreground leading-none">
          Långsamt kaffe.<br />Ljusa morgnar.
        </h1>
        <p className="mt-8 text-lg text-primary-foreground/85 max-w-xl mx-auto">
          En varm hörna av staden för bra kaffe, nybakat och lugna stunder.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">Se menyn</Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">Besök oss</Button>
        </div>
      </div>
    </section>

    <section id="story" className="py-24">
      <div className="container max-w-3xl text-center">
        <Leaf className="h-8 w-8 text-accent mx-auto" />
        <h2 className="font-serif text-5xl mt-6">Rostat i små satser, serverat med omtanke.</h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          Vi köper bönor från familjeodlade gårdar i Etiopien, Colombia och Guatemala, och rostar varje tisdag i butiken. Det du smakar i koppen är dagens arbete.
        </p>
      </div>
    </section>

    <section id="meny" className="py-24 bg-secondary">
      <div className="container">
        <h2 className="font-serif text-5xl text-center">Menyn</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {drinks.map((d) => (
            <div key={d.name} className="flex justify-between gap-6 pb-4 border-b border-border">
              <div>
                <h3 className="font-serif text-xl">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
              <span className="font-serif text-xl text-primary shrink-0">{d.price} kr</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="besok" className="py-24">
      <div className="container grid md:grid-cols-2 gap-8 max-w-3xl">
        {[
          { icon: MapPin, title: "Hitta hit", text: "Lönngatan 62, Norrmalm" },
          { icon: Clock, title: "Öppet dagligen", text: "07–18 · helger från 08" },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="p-8 bg-card border border-border rounded-xl">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="font-serif text-2xl mt-4">{title}</h3>
            <p className="text-muted-foreground mt-2">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Ember & Oak Coffee
    </footer>
  </ShowcaseFrame>
);

export default Cafe;

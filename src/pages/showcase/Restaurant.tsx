import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Utensils } from "lucide-react";
import heroImg from "@/assets/restaurant-hero.jpg";

const menu = [
  { name: "Burrata di Puglia", desc: "Tomat, basilikaolja, surdegsbröd", price: "169" },
  { name: "Tagliatelle al Tartufo", desc: "Handskuren pasta, svart tryffel, parmesan", price: "289" },
  { name: "Branzino al Forno", desc: "Hel havsabborre, citron, rosmarin", price: "349" },
  { name: "Bistecca Fiorentina", desc: "Mörad entrecôte, rosmarinpotatis", price: "489" },
  { name: "Tiramisu", desc: "Espressodoppade savoiardi, mascarpone", price: "129" },
  { name: "Affogato", desc: "Vaniljglass, espresso", price: "109" },
];

const Restaurant = () => (
  <ShowcaseFrame themeClass="theme-restaurant" subdomain="bellanotte.tageshemsidor.se" title="Bella Notte — Italiensk restaurang">
    <header className="absolute top-9 inset-x-0 z-30">
      <div className="container flex items-center justify-between h-20 text-foreground">
        <span className="font-serif text-2xl tracking-wider">BELLA NOTTE</span>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#meny">Meny</a><a href="#om">Om oss</a><a href="#besok">Besök</a>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:opacity-90">Boka bord</Button>
      </div>
    </header>

    <section className="relative h-[88vh] min-h-[600px] flex items-center">
      <img src={heroImg} alt="" width={1600} height={1024} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container relative">
        <p className="text-primary uppercase tracking-[0.3em] text-sm">Sedan 1987</p>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl text-foreground leading-none max-w-3xl">
          Italienskt hjärta, modernt hantverk.
        </h1>
        <p className="mt-8 text-lg text-foreground/85 max-w-xl">
          En levande hörna av Toscana mitt i staden. Säsongsmenyer, handrullad pasta och ett bord utan brådska.
        </p>
        <div className="mt-10 flex gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">Boka bord</Button>
          <Button size="lg" variant="outline" className="border-foreground/40 text-foreground hover:bg-foreground/10">Se menyn</Button>
        </div>
      </div>
    </section>

    <section id="om" className="py-24">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary uppercase tracking-widest text-sm">Vår historia</p>
          <h2 className="font-serif text-5xl mt-4">Tre generationer av familjerecept.</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Köksmästare Marco Ferrari tar med sig värmen från sin mormors florentinska kök till varje tallrik. All pasta rullas för hand. Varje sås får sjuda i timmar.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[["38", "År öppet"], ["12", "Pastarätter"], ["★ 4.9", "På Google"]].map(([n, l]) => (
            <div key={l} className="p-6 bg-card rounded-xl border border-border">
              <div className="font-serif text-3xl text-primary">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="meny" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <Utensils className="h-8 w-8 text-primary mx-auto" />
          <h2 className="font-serif text-5xl mt-4">Kvällens meny</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {menu.map((m) => (
            <div key={m.name} className="flex justify-between gap-6 pb-4 border-b border-border">
              <div>
                <h3 className="font-serif text-xl">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
              <span className="font-serif text-xl text-primary shrink-0">{m.price} kr</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="besok" className="py-24">
      <div className="container grid md:grid-cols-3 gap-8 text-center">
        {[
          { icon: MapPin, title: "Hitta hit", text: "Storgatan 142, Gamla stan" },
          { icon: Clock, title: "Öppettider", text: "Tis–Sön · 17:30 – 23:00" },
          { icon: Phone, title: "Ring", text: "08-240 19 87" },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="p-8 bg-card border border-border rounded-xl">
            <Icon className="h-6 w-6 text-primary mx-auto" />
            <h3 className="font-serif text-xl mt-4">{title}</h3>
            <p className="text-muted-foreground mt-2">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Bella Notte Ristorante
    </footer>
  </ShowcaseFrame>
);

export default Restaurant;

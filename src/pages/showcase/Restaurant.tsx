import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Utensils } from "lucide-react";
import heroImg from "@/assets/restaurant-hero.jpg";

const menu = [
  { name: "Burrata di Puglia", desc: "Heirloom tomato, basil oil, sourdough", price: "16" },
  { name: "Tagliatelle al Tartufo", desc: "Hand-cut pasta, black truffle, parmesan", price: "28" },
  { name: "Branzino al Forno", desc: "Whole sea bass, lemon, rosemary", price: "34" },
  { name: "Bistecca Fiorentina", desc: "Dry-aged ribeye, rosemary potatoes", price: "48" },
  { name: "Tiramisu della Casa", desc: "Espresso-soaked savoiardi, mascarpone", price: "12" },
  { name: "Affogato", desc: "Vanilla gelato, single-origin espresso", price: "10" },
];

const Restaurant = () => (
  <ShowcaseFrame themeClass="theme-restaurant" subdomain="bellanotte.studiolumen.com" title="Bella Notte — Italian Fine Dining">
    <header className="absolute top-9 inset-x-0 z-30">
      <div className="container flex items-center justify-between h-20 text-foreground">
        <span className="font-serif text-2xl tracking-wider">BELLA NOTTE</span>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#menu">Menu</a><a href="#about">About</a><a href="#visit">Visit</a>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:opacity-90">Reserve</Button>
      </div>
    </header>

    <section className="relative h-[88vh] min-h-[600px] flex items-center">
      <img src={heroImg} alt="" width={1600} height={1024} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container relative">
        <p className="text-primary uppercase tracking-[0.3em] text-sm">Est. 1987</p>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl text-foreground leading-none max-w-3xl">
          Italian soul, modern craft.
        </h1>
        <p className="mt-8 text-lg text-foreground/85 max-w-xl">
          A candlelit corner of Tuscany in the heart of the city. Seasonal menus, hand-rolled pasta, and an unhurried table.
        </p>
        <div className="mt-10 flex gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">Reserve a table</Button>
          <Button size="lg" variant="outline" className="border-foreground/40 text-foreground hover:bg-foreground/10">View menu</Button>
        </div>
      </div>
    </section>

    <section id="about" className="py-24">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary uppercase tracking-widest text-sm">Our story</p>
          <h2 className="font-serif text-5xl mt-4">Three generations of family recipes.</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Chef Marco Ferrari brings the warmth of his grandmother's Florentine kitchen to every plate. Every pasta is rolled by hand. Every sauce simmers for hours. Every guest leaves family.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[["38", "Years open"], ["12", "House pastas"], ["★ 4.9", "On Google"]].map(([n, l]) => (
            <div key={l} className="p-6 bg-card rounded-xl border border-border">
              <div className="font-serif text-3xl text-primary">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="menu" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <Utensils className="h-8 w-8 text-primary mx-auto" />
          <h2 className="font-serif text-5xl mt-4">Tonight's selection</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {menu.map((m) => (
            <div key={m.name} className="flex justify-between gap-6 pb-4 border-b border-border">
              <div>
                <h3 className="font-serif text-xl">{m.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
              <span className="font-serif text-xl text-primary shrink-0">${m.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="visit" className="py-24">
      <div className="container grid md:grid-cols-3 gap-8 text-center">
        {[
          { icon: MapPin, title: "Find us", text: "142 Vine Street, Old Town" },
          { icon: Clock, title: "Hours", text: "Tue–Sun · 5:30 pm – 11:00 pm" },
          { icon: Phone, title: "Call", text: "(555) 240-1987" },
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
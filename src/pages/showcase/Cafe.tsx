import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { Button } from "@/components/ui/button";
import { Coffee, Leaf, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/cafe-hero.jpg";

const drinks = [
  { name: "House Espresso", desc: "Single-origin Ethiopian, notes of cocoa & citrus", price: "3.50" },
  { name: "Oat Milk Latte", desc: "Creamy, balanced, our most loved pour", price: "5.00" },
  { name: "Cortado", desc: "Equal parts espresso & warm milk", price: "4.25" },
  { name: "Cold Brew", desc: "Steeped 18 hours, smooth and bold", price: "4.75" },
  { name: "Matcha Latte", desc: "Ceremonial-grade, whisked to order", price: "5.50" },
  { name: "Hot Chocolate", desc: "70% dark, house-made ganache", price: "4.50" },
];

const Cafe = () => (
  <ShowcaseFrame themeClass="theme-cafe" subdomain="emberandoak.studiolumen.com" title="Ember & Oak — Specialty Coffee">
    <header className="absolute top-9 inset-x-0 z-30">
      <div className="container flex items-center justify-between h-20 text-foreground">
        <div className="flex items-center gap-2"><Coffee className="h-6 w-6" /><span className="font-serif text-xl">Ember & Oak</span></div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#menu">Menu</a><a href="#story">Our Story</a><a href="#visit">Visit</a>
        </nav>
        <Button size="sm" className="bg-primary text-primary-foreground hover:opacity-90">Order Online</Button>
      </div>
    </header>

    <section className="relative h-[88vh] min-h-[600px] flex items-center">
      <img src={heroImg} alt="" width={1600} height={1024} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container relative text-center max-w-3xl mx-auto">
        <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm">Neighborhood roastery</p>
        <h1 className="mt-6 font-serif text-6xl md:text-8xl text-primary-foreground leading-none">
          Slow coffee.<br />Bright mornings.
        </h1>
        <p className="mt-8 text-lg text-primary-foreground/85 max-w-xl mx-auto">
          A warm corner of the city for great coffee, fresh pastries, and unhurried conversations.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">See the menu</Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">Visit us</Button>
        </div>
      </div>
    </section>

    <section id="story" className="py-24">
      <div className="container max-w-3xl text-center">
        <Leaf className="h-8 w-8 text-accent mx-auto" />
        <h2 className="font-serif text-5xl mt-6">Roasted in small batches, served with care.</h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          We source from family-run farms in Ethiopia, Colombia and Guatemala, then roast every Tuesday in our shop. What you taste in the cup is our day's work.
        </p>
      </div>
    </section>

    <section id="menu" className="py-24 bg-secondary">
      <div className="container">
        <h2 className="font-serif text-5xl text-center">The Menu</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {drinks.map((d) => (
            <div key={d.name} className="flex justify-between gap-6 pb-4 border-b border-border">
              <div>
                <h3 className="font-serif text-xl">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
              <span className="font-serif text-xl text-primary shrink-0">${d.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="visit" className="py-24">
      <div className="container grid md:grid-cols-2 gap-8 max-w-3xl">
        {[
          { icon: MapPin, title: "Find us", text: "62 Maple Lane, North End" },
          { icon: Clock, title: "Open daily", text: "7am – 6pm · weekends from 8am" },
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
import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/store-hero.jpg";

const products = [
  { name: "Linen Throw Pillow", price: "48", tag: "New" },
  { name: "Hand-Carved Bowl", price: "62", tag: "Bestseller" },
  { name: "Woven Seagrass Tray", price: "38" },
  { name: "Terracotta Vase Set", price: "84" },
  { name: "Cotton Throw Blanket", price: "120" },
  { name: "Olive Wood Utensils", price: "29" },
  { name: "Ceramic Planter", price: "45" },
  { name: "Brass Candle Holder", price: "56" },
];

const colors = ["bg-[hsl(30,30%,88%)]", "bg-[hsl(20,40%,75%)]", "bg-[hsl(35,20%,82%)]", "bg-[hsl(15,35%,70%)]"];

const Store = () => (
  <ShowcaseFrame themeClass="theme-store" subdomain="maisonmodern.studiolumen.com" title="Maison Modern — Curated Home Goods">
    <header className="border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <span className="font-serif text-2xl tracking-wide">Maison Modern</span>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#shop">Shop</a><a href="#about">Journal</a><a href="#about">About</a>
        </nav>
        <Button variant="outline" size="sm"><ShoppingBag className="h-4 w-4 mr-2" />Cart (0)</Button>
      </div>
    </header>

    <section className="relative">
      <div className="grid md:grid-cols-2">
        <div className="p-12 md:p-20 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Spring Collection</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05]">
            Objects with quiet character.
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Thoughtfully sourced home goods from independent makers. Built to last, made to love.
          </p>
          <div className="mt-10 flex gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">Shop the collection</Button>
            <Button size="lg" variant="ghost">Our story →</Button>
          </div>
        </div>
        <div className="aspect-square md:aspect-auto">
          <img src={heroImg} alt="" width={1600} height={1024} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <section className="py-12 border-y border-border bg-secondary">
      <div className="container grid md:grid-cols-4 gap-8 text-sm">
        {[
          [Truck, "Free shipping over $75"],
          [RefreshCw, "30-day easy returns"],
          [ShieldCheck, "Lifetime quality promise"],
          [ShoppingBag, "Ethically sourced goods"],
        ].map(([Icon, t], i) => (
          <div key={i} className="flex items-center gap-3 justify-center">
            <Icon className="h-5 w-5 text-primary" />
            <span>{t as string}</span>
          </div>
        ))}
      </div>
    </section>

    <section id="shop" className="py-24">
      <div className="container">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Shop</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">New arrivals</h2>
          </div>
          <a href="#" className="text-sm underline underline-offset-4 hidden md:inline">View all →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((p, i) => (
            <a key={p.name} href="#" className="group">
              <div className={`aspect-[4/5] rounded-lg overflow-hidden ${colors[i % colors.length]} relative`}>
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-card text-foreground text-xs px-2 py-1 rounded-full">{p.tag}</span>
                )}
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="font-medium group-hover:underline underline-offset-4">{p.name}</h3>
                <span className="text-muted-foreground">${p.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section id="about" className="py-24 bg-secondary">
      <div className="container max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Our promise</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-4">Considered, not consumed.</h2>
        <p className="mt-6 text-muted-foreground text-lg">
          We work with a small group of makers we trust. Every piece in the shop is made to last for decades — never trends, never throwaway.
        </p>
      </div>
    </section>

    <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Maison Modern · Made with care
    </footer>
  </ShowcaseFrame>
);

export default Store;
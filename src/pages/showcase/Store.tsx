import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Truck, RefreshCw, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/store-hero.jpg";

const products = [
  { name: "Linnekudde", price: "499", tag: "Ny" },
  { name: "Handsvarvad skål", price: "649", tag: "Bästsäljare" },
  { name: "Bricka i sjögräs", price: "399" },
  { name: "Vasset i terrakotta", price: "879" },
  { name: "Bomullspläd", price: "1 249" },
  { name: "Bestick i olivträ", price: "299" },
  { name: "Kruka i keramik", price: "469" },
  { name: "Ljusstake i mässing", price: "579" },
];

const colors = ["bg-[hsl(30,30%,88%)]", "bg-[hsl(20,40%,75%)]", "bg-[hsl(35,20%,82%)]", "bg-[hsl(15,35%,70%)]"];

const Store = () => (
  <ShowcaseFrame themeClass="theme-store" subdomain="maisonmodern.tageshemsidor.se" title="Maison Modern — Utvalda hemvaror">
    <header className="border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <span className="font-serif text-2xl tracking-wide">Maison Modern</span>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#shop">Butik</a><a href="#om">Journal</a><a href="#om">Om oss</a>
        </nav>
        <Button variant="outline" size="sm"><ShoppingBag className="h-4 w-4 mr-2" />Varukorg (0)</Button>
      </div>
    </header>

    <section className="relative">
      <div className="grid md:grid-cols-2">
        <div className="p-12 md:p-20 flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Vårkollektion</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05]">
            Föremål med stilla karaktär.
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Noggrant utvalda hemvaror från oberoende formgivare. Byggda för att hålla, gjorda för att älskas.
          </p>
          <div className="mt-10 flex gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90">Handla kollektionen</Button>
            <Button size="lg" variant="ghost">Vår historia →</Button>
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
          [Truck, "Fri frakt över 750 kr"],
          [RefreshCw, "30 dagars öppet köp"],
          [ShieldCheck, "Livstidsgaranti på kvalitet"],
          [ShoppingBag, "Etiskt utvalda varor"],
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
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Butik</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Nyheter</h2>
          </div>
          <a href="#" className="text-sm underline underline-offset-4 hidden md:inline">Visa alla →</a>
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
                <span className="text-muted-foreground">{p.price} kr</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section id="om" className="py-24 bg-secondary">
      <div className="container max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Vårt löfte</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-4">Genomtänkt, inte slit-och-släng.</h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Vi samarbetar med en liten grupp formgivare vi litar på. Allt i butiken är gjort för att hålla i decennier — aldrig trender, aldrig engångsprodukter.
        </p>
      </div>
    </section>

    <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Maison Modern
    </footer>
  </ShowcaseFrame>
);

export default Store;

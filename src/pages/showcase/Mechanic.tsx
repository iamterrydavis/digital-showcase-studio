import { ShowcaseFrame } from "@/components/ShowcaseFrame";
import { Button } from "@/components/ui/button";
import { Wrench, Gauge, ShieldCheck, Phone, Clock, MapPin, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/mechanic-hero.jpg";

const services = [
  { icon: Wrench, title: "Full-Service Repair", text: "Engine, transmission, brakes, suspension — we handle it all." },
  { icon: Gauge, title: "Diagnostics", text: "Advanced computer diagnostics for every make and model." },
  { icon: ShieldCheck, title: "2-Year Warranty", text: "Every repair backed by an industry-leading parts & labor warranty." },
];

const pricing = [
  ["Oil & Filter Change", "$59"],
  ["Brake Pad Replacement", "$179"],
  ["Tire Rotation & Balance", "$49"],
  ["Full Diagnostic Scan", "$89"],
  ["A/C Recharge", "$129"],
  ["State Inspection", "$35"],
];

const Mechanic = () => (
  <ShowcaseFrame themeClass="theme-mechanic" subdomain="apexauto.studiolumen.com" title="Apex Auto — Trusted Mechanics">
    <header className="absolute top-9 inset-x-0 z-30">
      <div className="container flex items-center justify-between h-20 text-foreground">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary grid place-items-center"><Wrench className="h-4 w-4 text-primary-foreground" /></div>
          <span className="font-bold text-xl tracking-tight">APEX AUTO</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase">
          <a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:opacity-90">Book Now</Button>
      </div>
    </header>

    <section className="relative h-[85vh] min-h-[600px] flex items-center">
      <img src={heroImg} alt="" width={1600} height={1024} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="container relative">
        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">Family-owned since 1998</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-black uppercase text-foreground leading-[0.95] max-w-4xl">
          Honest repairs.<br /><span className="text-primary">Done right.</span>
        </h1>
        <p className="mt-6 text-lg text-foreground/85 max-w-xl">
          Certified technicians. Transparent pricing. Same-day service on most repairs. We treat your car like it's ours.
        </p>
        <div className="mt-10 flex gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 font-bold">Schedule Service</Button>
          <Button size="lg" variant="outline" className="border-foreground/40 text-foreground hover:bg-foreground/10">(555) 728-AUTO</Button>
        </div>
      </div>
    </section>

    <section id="services" className="py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-black uppercase text-center">What we fix</h2>
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

    <section id="pricing" className="py-24 bg-secondary">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase">Up-front pricing</h2>
          <p className="mt-4 text-muted-foreground">No surprises. No upsells. Just fair rates.</p>
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

    <section id="contact" className="py-24">
      <div className="container grid md:grid-cols-3 gap-6">
        {[
          { icon: MapPin, title: "Visit", text: "880 Industrial Pkwy" },
          { icon: Clock, title: "Hours", text: "Mon–Fri 7am–6pm · Sat 8am–2pm" },
          { icon: Phone, title: "Call", text: "(555) 728-2886" },
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
      © {new Date().getFullYear()} Apex Auto Repair · ASE Certified
    </footer>
  </ShowcaseFrame>
);

export default Mechanic;
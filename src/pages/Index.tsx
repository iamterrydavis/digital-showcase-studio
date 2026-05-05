import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Gauge, Palette, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/portfolio-hero.jpg";
import restaurantImg from "@/assets/restaurant-hero.jpg";
import mechanicImg from "@/assets/mechanic-hero.jpg";
import storeImg from "@/assets/store-hero.jpg";
import cafeImg from "@/assets/cafe-hero.jpg";
import { useEffect } from "react";

const showcases = [
  { slug: "restaurant", name: "Bella Notte", tag: "Fine Dining", img: restaurantImg, desc: "Elegant restaurant site with menu, reservations and ambiance gallery." },
  { slug: "mechanic", name: "Apex Auto", tag: "Auto Repair", img: mechanicImg, desc: "Bold service-led layout with booking, pricing and trust signals." },
  { slug: "store", name: "Maison Modern", tag: "Retail Store", img: storeImg, desc: "Editorial e-commerce feel with clean product storytelling." },
  { slug: "cafe", name: "Ember & Oak", tag: "Specialty Cafe", img: cafeImg, desc: "Warm, inviting cafe brand with menu, story and visit info." },
];

const services = [
  { icon: Palette, title: "Custom Design", text: "Brand-aligned visuals tailored to your audience and goals." },
  { icon: Code2, title: "Modern Build", text: "Fast, accessible React sites built on production-grade tech." },
  { icon: Smartphone, title: "Fully Responsive", text: "Pixel-perfect on phones, tablets and large displays." },
  { icon: Gauge, title: "Performance First", text: "Optimized imagery, lazy loading and 90+ Lighthouse scores." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Studio Lumen — Custom Websites for Modern Businesses";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="h-8 w-8 rounded-lg bg-hero-gradient shadow-glow" />
            Studio Lumen
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition-smooth">Work</a>
            <a href="#services" className="hover:text-foreground transition-smooth">Services</a>
            <a href="#process" className="hover:text-foreground transition-smooth">Process</a>
            <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
          </nav>
          <Button asChild size="sm" className="bg-hero-gradient border-0 hover:opacity-90 shadow-glow">
            <a href="#contact">Start a project</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-32 pb-24 overflow-hidden">
        <img src={heroImg} alt="" width={1600} height={1024}
          className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Independent web studio
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Beautiful websites that <span className="text-gradient">grow your business</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              I design and build fast, modern websites for restaurants, shops, services and ambitious local brands. Below are four live examples — explore them like a real customer would.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-hero-gradient border-0 hover:opacity-90 shadow-glow">
                <a href="#work">View live demos <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Get a quote</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase grid */}
      <section id="work" className="py-24 border-t border-border">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-3">Live demos</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected work</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Each demo is a fully functional site — feel free to click around. Built specifically to show what's possible for your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {showcases.map((s) => (
              <Link key={s.slug} to={`/showcase/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-glow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" width={1600} height={1024}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-primary">{s.tag}</span>
                    <span className="text-xs text-muted-foreground">{s.slug}.studiolumen.com</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold">{s.name}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Visit demo <ArrowRight className="ml-1 h-4 w-4 transition-smooth group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-border bg-subtle-gradient">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-primary mb-3">What I do</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything you need, nothing you don't.</h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-6 rounded-2xl border border-border bg-card transition-smooth hover:border-primary/50">
                <div className="h-11 w-11 rounded-xl bg-hero-gradient grid place-items-center shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 border-t border-border">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3">Process</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">From idea to launch in two weeks.</h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              A clear, no-nonsense workflow with weekly check-ins. You stay in the loop without lifting a finger.
            </p>
          </div>
          <ol className="space-y-6">
            {[
              ["01 — Discovery", "We talk goals, audience and the vibe you want."],
              ["02 — Design", "I build a unique mockup tailored to your brand."],
              ["03 — Build", "Production-ready code, content and integrations."],
              ["04 — Launch", "Domain, hosting and SEO setup. Then we go live."],
            ].map(([title, text]) => (
              <li key={title} className="p-6 rounded-2xl border border-border bg-card flex gap-4">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">{title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 bg-hero-gradient shadow-glow text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary-foreground">
              Ready for a website that actually works?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl mx-auto">
              Get a free 20-minute consultation. I'll review your current site and share a clear plan to grow.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <a href="mailto:hello@studiolumen.com">Email hello@studiolumen.com</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border text-sm text-muted-foreground">
        <div className="container flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Studio Lumen. Crafted with care.</p>
          <p>hello@studiolumen.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

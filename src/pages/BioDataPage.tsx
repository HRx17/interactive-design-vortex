import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Sparkles,
  GraduationCap,
  Briefcase,
  Users,
  Palette,
  Plane,
  Music,
  Gamepad2,
  Dumbbell,
  ChefHat,
  Waves,
  Brain,
  Film,
  Trophy,
  Wrench,
  Cpu,
  MapPin,
  Globe,
  ArrowLeft,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import haetPhoto from "@/assets/haet-photo.jpg.asset.json";

const hobbies = [
  { label: "Painting", Icon: Palette },
  { label: "Travelling", Icon: Plane },
  { label: "Music", Icon: Music },
  { label: "Gaming", Icon: Gamepad2 },
  { label: "Fitness", Icon: Dumbbell },
  { label: "Cooking", Icon: ChefHat },
  { label: "Scuba Diving", Icon: Waves },
  { label: "Meditation", Icon: Brain },
  { label: "Movies", Icon: Film },
  { label: "Sports", Icon: Trophy },
  { label: "DIY & Making", Icon: Wrench },
  { label: "Technology", Icon: Cpu },
];

const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex items-start justify-between gap-4 py-2.5 border-b border-border/60 last:border-0">
    <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium pt-0.5">
      {label}
    </span>
    <span className="text-sm text-foreground text-right font-medium">{value}</span>
  </div>
);

const SectionCard = ({
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  delay?: number;
}) => (
  <div
    className="group relative rounded-2xl border border-border bg-card/80 backdrop-blur p-6 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center bg-background group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
        <Icon className="w-4 h-4" />
      </div>
      <h2 className="font-display text-lg tracking-wide uppercase">{title}</h2>
    </div>
    {children}
  </div>
);

const BioDataPage: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    document.title = "Bio-Data · Haet Ranpariya";
    const t = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Decorative motifs */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full bg-foreground/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-foreground/5 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-14">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to portfolio
        </Link>

        {/* Header */}
        <header className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="h-px w-10 bg-foreground/40" />
            <Sparkles className="w-3.5 h-3.5 text-foreground/60" />
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Jai Shree Krishna
            </p>
            <Sparkles className="w-3.5 h-3.5 text-foreground/60" />
            <span className="h-px w-10 bg-foreground/40" />
          </div>

          {/* Photo */}
          <div
            className={`relative mx-auto mb-7 transition-all duration-1000 ${
              revealed ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-foreground/10 blur-2xl scale-110" />
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-2 border-foreground/15 shadow-xl ring-1 ring-foreground/5 ring-offset-4 ring-offset-background">
              <img
                src={haetPhoto.url}
                alt="Haet Ranpariya portrait"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-foreground text-background text-[9px] uppercase tracking-[0.25em] font-medium shadow-md">
              ॐ
            </div>
          </div>

          <h1
            className={`font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] transition-all duration-1000 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Haet Ranpariya
          </h1>

          <p
            className={`mt-3 text-xs sm:text-sm md:text-base text-muted-foreground tracking-wide transition-all duration-1000 delay-200 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Leva Patel · Ahmedabad, Gujarat · India
          </p>

          {/* Quick stats */}
          <div
            className={`mt-7 grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { k: "Born", v: "17 Aug 2001" },
              { k: "Age", v: "25 yrs" },
              { k: "Height", v: "5' 8\"" },
              { k: "Based In", v: "Princeton, NJ" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-xl border border-border bg-card/60 backdrop-blur px-3 py-2.5 sm:px-4 sm:py-3 hover:border-foreground/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {s.k}
                </div>
                <div className="mt-1 font-display text-sm sm:text-base md:text-lg font-semibold">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* About */}
        <div
          className="relative mx-auto max-w-3xl text-center mb-10 md:mb-14 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "400ms" }}
        >
          <span className="font-display text-6xl leading-none text-foreground/15 absolute -top-4 left-0">
            “
          </span>
          <p className="italic text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-6">
            A calm, patient, and grounded young man — equally at home in
            thoughtful conversation and creative problem-solving. An ambivert
            who values deep, meaningful connections over a wide social circle.
            Respectful of elders, driven by curiosity, and passionate about
            building things.
          </p>
          <span className="font-display text-6xl leading-none text-foreground/15 absolute -bottom-10 right-0">
            ”
          </span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <SectionCard title="Personal" icon={Heart} delay={500}>
            <Row label="Religion" value="Hindu" />
            <Row label="Caste" value="Leva Patel" />
            <Row label="Native" value="Pipalva / Khambha, Amreli" />
            <Row label="Born In" value="Surat, Gujarat" />
            <Row label="Currently" value="Princeton, NJ, USA" />
            <Row label="Complexion" value="Lightly Tanned" />
          </SectionCard>

          <SectionCard title="Education" icon={GraduationCap} delay={600}>
            <Row
              label="Master's"
              value={
                <span>
                  M.S. Human-Computer
                  <br />
                  Interaction
                </span>
              }
            />
            <Row
              label="Bachelor's"
              value="B.E. Computer Engineering"
            />
          </SectionCard>

          <SectionCard title="Career" icon={Briefcase} delay={700}>
            <Row label="Designation" value="UX Designer" />
            <Row
              label="Organisation"
              value={
                <a
                  href="https://lore.co/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground transition-colors"
                >
                  Lore Health, USA
                </a>
              }
            />
            <Row
              label="Skills"
              value="UX / Product Design, Research & Coding"
            />
            <Row label="Annual CTC" value="Available on request" />
            <Row
              label="Website"
              value={
                <a
                  href="https://haetranpariya.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground transition-colors"
                >
                  <Globe className="w-3.5 h-3.5" /> haetranpariya.com
                </a>
              }
            />
          </SectionCard>

          <SectionCard title="Family" icon={Users} delay={800}>
            <Row
              label="Father"
              value={
                <span>
                  Jagdishbhai Ranpariya
                  <br />
                  <span className="text-xs text-muted-foreground font-normal">
                    Retired IRS Officer, Govt. of India
                  </span>
                </span>
              }
            />
            <Row
              label="Mother"
              value={
                <span>
                  Nilamben Ranpariya
                  <br />
                  <span className="text-xs text-muted-foreground font-normal">
                    Homemaker
                  </span>
                </span>
              }
            />
            <Row
              label="Sibling"
              value={
                <span>
                  Janki Ranpariya
                  <br />
                  <span className="text-xs text-muted-foreground font-normal">
                    Elder Sister · Architect, USA
                  </span>
                </span>
              }
            />
            <Row
              label="Maternal"
              value={
                <span>
                  Nilesh Nanubhai Baldha
                  <br />
                  <span className="text-xs text-muted-foreground font-normal">
                    Ahmedabad
                  </span>
                </span>
              }
            />
          </SectionCard>
        </div>

        {/* Hobbies */}
        <div
          className="mt-10 rounded-2xl border border-border bg-card/80 backdrop-blur p-6 md:p-8 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "900ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center bg-background">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="font-display text-lg tracking-wide uppercase">
              Hobbies & Interests
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {hobbies.map(({ label, Icon }, i) => (
              <div
                key={label}
                className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 hover:bg-foreground hover:text-background hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${950 + i * 40}ms` }}
              >
                <Icon className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Preference */}
        <div
          className="mt-6 rounded-2xl border border-foreground/80 bg-foreground text-background p-6 md:p-8 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] relative overflow-hidden"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-background/5 blur-2xl" />
          <div className="flex items-center gap-3 mb-6 relative">
            <div className="w-9 h-9 rounded-full border border-background/30 flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </div>
            <h2 className="font-display text-lg tracking-wide uppercase">
              Partner Preference
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1 relative">
            {[
              ["Caste", "Leva Patel (preferred)"],
              ["Education", "Graduate or above"],
              ["Profession", "Working preferred; independent"],
              ["Values", "Family-oriented, grounded, supportive"],
              ["Age Range", "Open to discussion"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-start justify-between gap-4 py-2.5 border-b border-background/15 last:border-0 sm:[&:nth-last-child(2)]:border-0"
              >
                <span className="text-[11px] uppercase tracking-[0.18em] opacity-60">
                  {k}
                </span>
                <span className="text-sm font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        {/* Contact */}
        <div
          className="mt-6 rounded-2xl border border-border bg-card/80 backdrop-blur p-6 md:p-8 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]"
          style={{ animationDelay: "1100ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center bg-background">
              <MessageCircle className="w-4 h-4" />
            </div>
            <h2 className="font-display text-lg tracking-wide uppercase">
              Get in Touch
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              href="tel:+17326463484"
              className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 hover:bg-foreground hover:text-background hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100" />
              <div className="min-w-0">
                <div className="text-[9px] uppercase tracking-[0.22em] opacity-60">Phone</div>
                <div className="text-sm font-medium truncate">+1 732 646 3484</div>
              </div>
            </a>
            <a
              href="mailto:haetranpariya17@gmail.com"
              className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 hover:bg-foreground hover:text-background hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100" />
              <div className="min-w-0">
                <div className="text-[9px] uppercase tracking-[0.22em] opacity-60">Email</div>
                <div className="text-sm font-medium truncate">haetranpariya17@gmail.com</div>
              </div>
            </a>
            <a
              href="https://haetranpariya.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3.5 hover:bg-foreground hover:text-background hover:-translate-y-0.5 transition-all duration-300"
            >
              <Globe className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100" />
              <div className="min-w-0">
                <div className="text-[9px] uppercase tracking-[0.22em] opacity-60">Web</div>
                <div className="text-sm font-medium truncate">haetranpariya.com</div>
              </div>
            </a>
          </div>
          <p className="mt-5 text-[11px] text-muted-foreground text-center">
            For matrimonial enquiries, please feel free to reach out · Responses within 24–48 hours
          </p>
        </div>

        <footer className="mt-10 text-center">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <p className="text-xs uppercase tracking-[0.3em]">
              Ahmedabad · Princeton · World
            </p>
          </div>
          <p className="mt-4 text-xs text-muted-foreground/70">
            Shared with respect · For matrimonial purposes
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default BioDataPage;
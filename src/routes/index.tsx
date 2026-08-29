import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Timer, BadgeCheck, Clapperboard } from "lucide-react";
import { useFadeIn } from "../hooks/use-fade-in";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Video Speed Reader — 上傳影片，三分鐘內拿到逐字稿" },
      {
        name: "description",
        content:
          "Upload your video, get a clean, high-accuracy transcript in three minutes. Built for content creators, educators, and engineers.",
      },
      { property: "og:title", content: "Video Speed Reader" },
      {
        property: "og:description",
        content:
          "Upload your video, get a clean transcript in three minutes. 上傳影片，三分鐘內拿到逐字稿。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const features = [
  {
    icon: FileText,
    title: "高準確度逐字稿",
    subtitle: "High-accuracy transcripts",
    description:
      "Powered by OpenAI Whisper, with first-class support for Chinese and English. Clean, punctuated output ready to publish.",
  },
  {
    icon: Timer,
    title: "三分鐘交付",
    subtitle: "Three-minute turnaround",
    description:
      "Everything is processed in the background. Grab a coffee — we'll email you the moment your transcript is ready.",
  },
  {
    icon: BadgeCheck,
    title: "可商用授權",
    subtitle: "Commercial-use ready",
    description:
      "You own the output, period. Repurpose transcripts into blog posts, course notes, or searchable archives however you like.",
  },
];

function LandingPage() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Clapperboard className="h-4.5 w-4.5" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Video Speed Reader
            </span>
          </div>
          <Link
            to="/auth"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
          >
            Sign in / 登入
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-aurora relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-24 pt-24 text-center sm:px-6 sm:pb-32 sm:pt-32">
          <span className="fade-up mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-medium text-primary">
            影片 → 逐字稿，只要三分鐘
          </span>
          <h1
            className="fade-up max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
            style={{ transitionDelay: "80ms" }}
          >
            <span className="text-gradient">Video Speed Reader</span>
          </h1>
          <p
            className="fade-up mt-6 max-w-2xl text-xl font-medium text-foreground sm:text-2xl"
            style={{ transitionDelay: "160ms" }}
          >
            上傳影片，三分鐘內拿到逐字稿。
          </p>
          <p
            className="fade-up mt-3 max-w-xl text-base text-muted-foreground sm:text-lg"
            style={{ transitionDelay: "240ms" }}
          >
            Upload your video, get a clean transcript in three minutes.
          </p>
          <div
            className="fade-up mt-10 flex flex-col items-center gap-3 sm:flex-row"
            style={{ transitionDelay: "320ms" }}
          >
            <Link
              to="/auth"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-[1.02] hover:bg-primary/90"
            >
              Get started free
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card/60 px-7 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
            >
              See how it works
            </a>
          </div>
          <p
            className="fade-up mt-8 text-sm text-muted-foreground"
            style={{ transitionDelay: "400ms" }}
          >
            For content creators, educators, and engineers who record long-form
            video.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="fade-up text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Why Video Speed Reader
          </h2>
          <p className="fade-up mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Turn any recording into text you can actually use — fast.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {features.map((f, i) => (
              <article
                key={f.title}
                className="glow-card fade-up rounded-2xl p-7"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <f.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm font-medium text-primary/80">
                  {f.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <span>© 2026 Video Speed Reader</span>
          <span>Made for creators, educators, and engineers.</span>
        </div>
      </footer>
    </div>
  );
}

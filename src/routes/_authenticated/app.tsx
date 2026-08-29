import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Clapperboard, LogOut, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/app")({
  head: () => ({
    meta: [
      { title: "Dashboard — Video Speed Reader" },
      { name: "description", content: "Your Video Speed Reader dashboard." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/", replace: true });
  }

  return (
    <div className="hero-aurora flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Clapperboard className="h-4.5 w-4.5" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Video Speed Reader
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-lg shadow-primary/20">
            <Sparkles className="h-7 w-7" />
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Hi <span className="text-gradient">{user.email}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Your dashboard is coming soon. Upload functionality will be added in
            the next milestone.
          </p>
          <div className="glow-card mx-auto mt-10 max-w-md rounded-2xl border-dashed p-10">
            <p className="text-sm text-muted-foreground">
              🎬 Drop a video here soon — transcripts in three minutes.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © 2026 Video Speed Reader
      </footer>
    </div>
  );
}

import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <section className="min-h-screen flex w-full bg-gradient-to-tl from-slate-900/90 via-slate-900 to-slate-950">
      {children}
    </section>
  );
}

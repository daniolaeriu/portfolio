import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <section className="min-h-screen flex w-full bg-gradient-to-tr from-main-50 via-main-100 to-main-400">
      {children}
    </section>
  );
}

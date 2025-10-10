import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <section className="min-h-screen flex w-full bg-gradient-to-br from-main-50 via-main-100 to-main-200">
      {children}
    </section>
  );
}

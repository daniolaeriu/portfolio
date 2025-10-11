import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <section className="container px-6 max-w-5xl py-24 mx-auto">
      {children}
    </section>
  );
}

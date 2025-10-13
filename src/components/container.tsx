import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <section className="container z-10 px-6 max-w-5xl py-32 mx-auto">
      {children}
    </section>
  );
}

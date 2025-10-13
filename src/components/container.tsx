import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <section className="container z- px-6 max-w-2xl xl:max-w-3xl 2xl:max-w-6xl py-32 mx-auto">
      {children}
    </section>
  );
}

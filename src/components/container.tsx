import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <section className="container max-w-7xl mx-auto">{children}</section>;
}

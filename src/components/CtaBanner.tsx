import type { ReactNode } from "react";
import type { RichText } from "@/content/types";
import { Rich } from "./Rich";

type Props = {
  text: RichText;
  children: ReactNode;
};

// Fundo #23a455 com texto branco: contraste 3,22:1, aceito só para texto
// grande (≥ 24 px). Por isso o texto da faixa nunca fica menor que text-2xl.
export function CtaBanner({ text, children }: Props) {
  return (
    <section className="bg-brand-green py-14 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-3xl font-heading text-2xl leading-snug font-semibold text-white md:text-3xl">
          <Rich text={text} />
        </p>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">{children}</div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="font-heading text-6xl font-bold text-brand-green-dark">404</p>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Página não encontrada</h1>
        <p className="mt-4 text-lg">
          O endereço que você acessou não existe ou foi alterado. Veja as páginas do site:
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-block rounded-full border border-slate-300 px-4 py-2 font-medium text-brand-link hover:border-brand-green-dark"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <CtaButton href="/" className="mt-10">
          Voltar para a Home
        </CtaButton>
      </div>
    </section>
  );
}

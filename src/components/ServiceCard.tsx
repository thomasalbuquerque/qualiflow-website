import Image from 'next/image';
import Link from 'next/link';
import type { Card } from '@/content/types';
import { CtaButton } from './CtaButton';
import { ArrowRightIcon } from './icons';

export function ServiceCard({ card }: { card: Card }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8">
      {/* Os ícones são de traço verde: precisam de fundo claro. */}
      <div className="flex size-24 items-center justify-center rounded-full bg-brand-aqua/25">
        <Image
          src={card.icon.src}
          alt={card.icon.alt}
          width={card.icon.width}
          height={card.icon.height}
          className="size-16 object-contain"
        />
      </div>

      <h3 className="mt-6 text-xl font-bold">{card.title}</h3>
      <p className="mt-3 leading-relaxed">{card.text}</p>

      {card.links && (
        <ul className="mt-5 space-y-2">
          {card.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 font-semibold text-brand-link underline-offset-4 hover:underline"
              >
                {link.label}
                {link.srLabel && (
                  <span className="sr-only"> {link.srLabel}</span>
                )}
                <ArrowRightIcon className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      )}

      {card.cta && (
        <div className="mt-auto pt-6">
          <CtaButton
            href={card.cta.href}
            variant="outline"
            srLabel={card.cta.srLabel}
          >
            {card.cta.label}
          </CtaButton>
        </div>
      )}
    </article>
  );
}

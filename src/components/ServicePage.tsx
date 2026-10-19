import Image from 'next/image';
import { site } from '@/config/site';
import type { ServicePageContent } from '@/content/types';
import { CtaBanner } from './CtaBanner';
import { CtaButton } from './CtaButton';
import { WhatsAppIcon } from './icons';
import { Steps } from './Steps';

// Template compartilhado por Tratamento de Água e Tratamento de Esgoto.
export function ServicePage({ content }: { content: ServicePageContent }) {
  return (
    <>
      <section className="bg-brand-aqua/25 pt-14 pb-10 md:pt-20">
        <div className="mx-auto max-w-6xl px-4">
          <span
            aria-hidden
            className="mb-6 block h-1.5 w-20 rounded-full bg-brand-green"
          />
          <h1 className="text-4xl font-bold md:text-5xl">{content.title}</h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed">
            {content.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-linear-to-b from-brand-aqua/25 to-white">
        <div className="mx-auto max-w-6xl px-4">
          <Image
            src={content.banner.src}
            alt={content.banner.alt}
            width={content.banner.width}
            height={content.banner.height}
            preload
            sizes="(min-width: 1152px) 1120px, 100vw"
            className="h-auto w-full rounded-2xl shadow-md"
          />
        </div>
      </div>

      <section aria-labelledby="etapas-titulo" className="pt-14 md:pt-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 id="etapas-titulo" className="sr-only">
            Etapas do serviço
          </h2>
          <Steps steps={content.steps} />
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-2 md:py-20">
        {content.details.map((detail) => (
          <section
            key={detail.id}
            id={detail.id}
            aria-labelledby={`${detail.id}-titulo`}
            className="rounded-2xl border border-slate-200 border-t-4 border-t-brand-green bg-white p-6 shadow-sm md:p-8"
          >
            <h2 id={`${detail.id}-titulo`} className="text-2xl font-bold">
              {detail.title}
            </h2>
            <p className="mt-4 leading-relaxed">{detail.text}</p>
            {detail.items && (
              <ul className="mt-5 space-y-4">
                {detail.items.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-xl bg-slate-50 p-4 leading-relaxed"
                  >
                    <strong className="font-heading font-bold text-brand-navy">
                      {item.title}:
                    </strong>{' '}
                    {item.text}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <CtaBanner text={content.cta.text}>
        <CtaButton
          href={site.whatsapp.href}
          variant="light"
          icon={<WhatsAppIcon className="size-5" />}
        >
          Fale conosco pelo WhatsApp
        </CtaButton>
      </CtaBanner>
    </>
  );
}

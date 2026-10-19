import type { Metadata } from 'next';
import Image from 'next/image';
import { CtaButton } from '@/components/CtaButton';
import { AlertIcon, CheckCircleIcon, WhatsAppIcon } from '@/components/icons';
import { Rich } from '@/components/Rich';
import { Section } from '@/components/Section';
import { Steps } from '@/components/Steps';
import { site } from '@/config/site';
import {
  analiseMeta,
  importance,
  scenarios,
  service,
} from '@/content/analise-de-agua';

export const metadata: Metadata = {
  title: { absolute: analiseMeta.title },
  description: analiseMeta.description,
  alternates: { canonical: '/analise-de-agua/' },
  openGraph: {
    title: analiseMeta.title,
    description: analiseMeta.description,
    url: '/analise-de-agua/',
  },
};

const scenarioIcons = [CheckCircleIcon, AlertIcon];

export default function AnaliseDeAguaPage() {
  return (
    <>
      <section className="bg-brand-aqua/25 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14">
          <Image
            src={importance.image.src}
            alt={importance.image.alt}
            width={importance.image.width}
            height={importance.image.height}
            preload
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-auto w-full rounded-2xl shadow-md"
          />
          <div>
            <h1 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
              <Rich text={importance.title} />
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              {importance.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section>
        <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-brand-navy">
          {scenarios.lead}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {scenarios.cards.map((card, index) => {
            const Icon = scenarioIcons[index];
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-200 border-t-4 border-t-brand-green bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-8 shrink-0 text-brand-green-dark" />
                  <h2 className="text-2xl font-bold">{card.title}</h2>
                </div>
                <p className="mt-4 text-lg leading-relaxed">{card.text}</p>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-medium text-brand-navy">
          {scenarios.closing}
        </p>
      </Section>

      <Section id="servico" title={service.title} background="muted">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <div className="space-y-4 text-lg leading-relaxed">
            {service.highlights.map((paragraph) => (
              <p key={paragraph} className="font-bold text-brand-navy">
                {paragraph}
              </p>
            ))}
            {service.process.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Image
            src={service.image.src}
            alt={service.image.alt}
            width={service.image.width}
            height={service.image.height}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-auto w-full rounded-2xl shadow-md"
          />
        </div>

        <div className="mt-12">
          <Steps steps={service.steps} />
        </div>

        <div className="mt-12 max-w-4xl">
          <p className="text-lg leading-relaxed">{service.citiesIntro}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {site.cities.map((city) => (
              <li
                key={city}
                className="rounded-full border border-brand-green/40 bg-white px-4 py-1.5 text-sm font-medium text-brand-navy"
              >
                {city}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-4 text-lg leading-relaxed">
            {service.contact.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <CtaButton
            href={site.whatsapp.href}
            icon={<WhatsAppIcon className="size-5" />}
            className="mt-8"
          >
            {service.ctaLabel}
          </CtaButton>
        </div>
      </Section>
    </>
  );
}

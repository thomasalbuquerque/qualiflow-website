import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { CtaButton } from "@/components/CtaButton";
import { Hero } from "@/components/Hero";
import { MailIcon, WhatsAppIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { site } from "@/config/site";
import {
  about,
  finalCta,
  hero,
  homeMeta,
  missionVisionValues,
  models,
  services,
} from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
  alternates: { canonical: "/" },
  openGraph: { title: homeMeta.title, description: homeMeta.description, url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero title={hero.title} image={hero.image}>
        <CtaButton
          href={site.whatsapp.href}
          variant="light"
          icon={<WhatsAppIcon className="size-5" />}
        >
          Fale conosco pelo WhatsApp
        </CtaButton>
        <CtaButton href={`#${services.id}`} variant="outline-light">
          Nossos serviços
        </CtaButton>
      </Hero>

      <Section id="sobre">
        <div className="grid items-center gap-10 md:grid-cols-[3fr_2fr] md:gap-16">
          <div>
            <h2 id="sobre-titulo" className="text-3xl font-bold md:text-4xl">
              {about.title}
            </h2>
            <span aria-hidden className="mt-4 block h-1 w-16 rounded-full bg-brand-green" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Image
            src="/images/logo.png"
            alt=""
            width={808}
            height={678}
            className="mx-auto h-auto w-56 md:w-72"
          />
        </div>
      </Section>

      <Section
        id={services.id}
        title={services.title}
        intro={services.intro}
        background="muted"
        align="center"
      >
        <ul className="grid gap-6 md:grid-cols-3">
          {services.cards.map((card) => (
            <li key={card.title}>
              <ServiceCard card={card} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="modelos" title={models.title} intro={models.intro} align="center">
        <ul className="grid gap-6 md:grid-cols-3">
          {models.cards.map((card) => (
            <li key={card.title}>
              <ServiceCard card={card} />
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="missao-visao-valores"
        title={missionVisionValues.title}
        background="aqua"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {missionVisionValues.items.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h3 className="text-xl font-bold text-brand-green-dark">{item.title}</h3>
              <p className="mt-3 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner text={finalCta.text}>
        <CtaButton
          href={site.whatsapp.href}
          variant="light"
          icon={<WhatsAppIcon className="size-5" />}
        >
          WhatsApp
        </CtaButton>
        <CtaButton href={site.mailto} variant="outline-light" icon={<MailIcon className="size-5" />}>
          E-mail
        </CtaButton>
      </CtaBanner>
    </>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import type { ComponentType, SVGProps } from 'react';
import { site, type SocialName } from '@/config/site';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './icons';

const socialIcons: Record<
  SocialName,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};

const linkClass =
  'text-brand-footer-link underline-offset-4 hover:underline focus-visible:outline-white';

export function Footer() {
  return (
    // pb extra no mobile para o botão flutuante do WhatsApp não cobrir o texto.
    <footer className="bg-brand-petrol pt-14 pb-24 text-white md:pb-10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_0.8fr]">
        <div>
          <Image
            src="/images/logo-footer.png"
            alt={site.name}
            width={1086}
            height={914}
            className="h-20 w-auto"
          />
          <p className="mt-5 text-sm leading-relaxed text-white/90">
            {site.description}
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-white">Páginas</h2>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-white">Contato</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <PhoneIcon className="size-5 shrink-0" />
              <a href={site.phone1.href} className={linkClass}>
                {site.phone1.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="size-5 shrink-0" />
              <a href={site.phone2.href} className={linkClass}>
                {site.phone2.display}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon className="size-5 shrink-0" />
              <a href={site.mailto} className={`${linkClass} break-all`}>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon className="size-5 shrink-0" />
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                WhatsApp
              </a>
            </li>
          </ul>
          <p className="mt-5 text-sm text-white/90">CNPJ: {site.cnpj}</p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-white">
            Redes sociais
          </h2>
          <ul className="mt-4 flex gap-3">
            {site.social.map((item) => {
              const Icon = socialIcons[item.name];
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-brand-footer-link transition-colors hover:bg-white/20 focus-visible:outline-white"
                  >
                    <Icon className="size-6" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/20 px-4 pt-6 text-center text-sm text-white/90">
        © {new Date().getFullYear()} QualiFlow. Todos os direitos reservados.
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/config/site';

// Compara caminhos ignorando a barra final (o site usa trailingSlash).
function normalize(path: string) {
  return path.length > 1 ? path.replace(/\/$/, '') : path;
}

type Props = {
  variant: 'desktop' | 'mobile';
  onNavigate?: () => void;
};

export function NavLinks({ variant, onNavigate }: Props) {
  const pathname = normalize(usePathname() ?? '/');

  const listClass =
    variant === 'desktop' ? 'flex items-center gap-1' : 'flex flex-col gap-1';

  const linkClass =
    variant === 'desktop'
      ? 'rounded-md px-3 py-2 font-heading text-sm font-semibold transition-colors xl:text-base'
      : 'block rounded-md px-4 py-3 font-heading text-lg font-semibold transition-colors';

  return (
    <ul className={listClass}>
      {site.nav.map((item) => {
        const active = normalize(item.href) === pathname;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? 'page' : undefined}
              className={`${linkClass} ${
                active
                  ? 'text-brand-green-dark underline decoration-2 underline-offset-8'
                  : 'text-brand-navy hover:bg-brand-aqua/30 hover:text-brand-green-dark'
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

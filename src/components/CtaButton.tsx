import Link from 'next/link';
import type { ReactNode } from 'react';

export type Variant = 'primary' | 'outline' | 'light' | 'outline-light';

const variants: Record<Variant, string> = {
  // Verde escurecido (#187a3e): texto branco com contraste 5,4:1.
  primary: 'bg-brand-green-dark text-white hover:bg-brand-navy',
  outline:
    'border-2 border-brand-green-dark text-brand-green-dark hover:bg-brand-green-dark hover:text-white',
  // Para fundos escuros ou verdes.
  light: 'bg-white text-brand-navy hover:bg-brand-aqua',
  'outline-light':
    'border-2 border-white text-white hover:bg-white hover:text-brand-navy',
};

export function ctaButtonClasses(variant: Variant, className = '') {
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-heading text-base font-semibold transition-colors ${variants[variant]} ${className}`;
}

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  /** Complemento lido só por leitores de tela. */
  srLabel?: string;
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = 'primary',
  icon,
  srLabel,
  className = '',
}: Props) {
  const classes = ctaButtonClasses(variant, className);

  const content = (
    <>
      {icon}
      <span>
        {children}
        {srLabel && <span className="sr-only"> {srLabel}</span>}
      </span>
    </>
  );

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  // tel:, mailto: e âncoras na mesma página.
  if (!href.startsWith('/')) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import { site } from '@/config/site';
import { ctaButtonClasses, type Variant } from './CtaButton';

type Props = {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
};

// Copia o e-mail para a área de transferência e mostra um aviso rápido.
// Se a cópia falhar (navegador antigo ou sem permissão), abre o mailto.
export function CopyEmailButton({
  children,
  variant = 'primary',
  icon,
  className = '',
}: Props) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timeout.current), []);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      window.location.href = site.mailto;
      return;
    }
    setCopied(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={handleClick}
        className={ctaButtonClasses(variant, `cursor-pointer ${className}`)}
      >
        {icon}
        <span>
          {children}
          <span className="sr-only"> (copiar {site.email})</span>
        </span>
      </button>
      <span
        role="status"
        className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-brand-navy px-3 py-1 text-sm font-medium text-white shadow-md transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}
      >
        {copied ? 'Email copiado' : ''}
      </span>
    </span>
  );
}

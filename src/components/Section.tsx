import type { ReactNode } from 'react';

type Background = 'white' | 'muted' | 'aqua' | 'petrol';

const backgrounds: Record<Background, string> = {
  white: 'bg-white',
  muted: 'bg-slate-50',
  aqua: 'bg-brand-aqua/25',
  petrol: 'bg-brand-petrol text-white',
};

type Props = {
  id?: string;
  title?: ReactNode;
  intro?: string;
  background?: Background;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
};

export function Section({
  id,
  title,
  intro,
  background = 'white',
  align = 'left',
  className = '',
  children,
}: Props) {
  const headingId = id && title ? `${id}-titulo` : undefined;
  const centered = align === 'center';

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        {(title || intro) && (
          <div
            className={`mb-10 md:mb-12 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}
          >
            {title && (
              <h2
                id={headingId}
                className={`text-3xl font-bold md:text-4xl ${background === 'petrol' ? 'text-white' : ''}`}
              >
                {title}
              </h2>
            )}
            {centered && title && (
              <span
                aria-hidden
                className="mx-auto mt-4 block h-1 w-16 rounded-full bg-brand-green"
              />
            )}
            {intro && <p className="mt-4 text-lg leading-relaxed">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

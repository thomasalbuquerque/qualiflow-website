import type { Step } from '@/content/types';

type Props = {
  steps: Step[];
  /** Nível do título de cada passo, conforme a hierarquia da página. */
  headingLevel?: 'h3' | 'h4';
};

const columns: Record<number, string> = {
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

export function Steps({ steps, headingLevel = 'h3' }: Props) {
  const Heading = headingLevel;

  return (
    <ol className={`grid gap-6 ${columns[steps.length] ?? 'md:grid-cols-3'}`}>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-col md:p-6"
        >
          <span
            aria-hidden
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-green-dark font-heading text-lg font-bold text-white"
          >
            {index + 1}
          </span>
          <div>
            <Heading className="text-lg font-bold">
              {step.href ? (
                <a
                  href={step.href}
                  className="underline decoration-brand-green decoration-2 underline-offset-4 hover:text-brand-green-dark"
                >
                  {step.title}
                </a>
              ) : (
                step.title
              )}
            </Heading>
            {step.text && <p className="mt-2 leading-relaxed">{step.text}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PageMeta = {
  /** Título completo da página (já inclui "| QualiFlow" quando necessário). */
  title: string;
  description: string;
};

/**
 * Texto com trechos destacados, sem Markdown nem HTML.
 * `strong` deixa em negrito; `highlight` também pinta com a cor da marca.
 */
export type RichSegment = {
  text: string;
  strong?: boolean;
  highlight?: boolean;
};
export type RichText = string | RichSegment[];

export type LinkItem = {
  label: string;
  href: string;
  /** Complemento lido só por leitores de tela, ex.: "sobre Consultoria". */
  srLabel?: string;
};

export type Card = {
  title: string;
  text: string;
  icon: ImageData;
  links?: LinkItem[];
  cta?: LinkItem;
};

export type Step = {
  title: string;
  text?: string;
  /** Âncora opcional para a seção que detalha o passo. */
  href?: string;
};

export type DetailItem = {
  title: string;
  text: string;
};

export type ServiceDetail = {
  id: string;
  title: string;
  text: string;
  items?: DetailItem[];
};

export type ServicePageContent = {
  meta: PageMeta;
  title: string;
  intro: string[];
  banner: ImageData;
  steps: Step[];
  details: ServiceDetail[];
  cta: { text: string };
};

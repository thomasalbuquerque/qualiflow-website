import { site } from '@/config/site';
import type { Card, ImageData, PageMeta, RichText } from './types';

export const homeMeta: PageMeta = {
  title: 'QualiFlow | Tratamento de Água, Esgoto e Análise de Potabilidade',
  description:
    'A QualiFlow oferece soluções para tratamento de água e esgoto, consultoria e assessoria em saneamento e análise laboratorial de potabilidade de água no Vale do Paraíba.',
};

export const hero: { title: string; image: ImageData } = {
  title: 'Água tratada é saúde e bem-estar',
  // ⚠️ A Home antiga usava nature-image.jpg, que não existe mais no backup.
  image: { src: '/images/hero-home.png', alt: '', width: 1280, height: 720 },
};

export const about = {
  title: 'Sobre a QualiFlow',
  paragraphs: [
    'A QualiFlow oferece soluções para tratamento de água e esgoto. Possui a expertise para consultoria e assessoria sobre saneamento e abastecimento de água, bem como construção de estações de tratamento de água e esgoto.',
    'Oferecemos também o serviço de análise laboratorial de potabilidade de água. Analisamos a água coletada do local e enviamos o laudo com o resultado da análise ao cliente por email.',
  ],
};

export const services: {
  id: string;
  title: string;
  intro: string;
  cards: Card[];
} = {
  id: 'servicos',
  title: 'Como podemos lhe ajudar?',
  intro: 'A QualiFlow pode te ajudar nos seguintes tópicos:',
  cards: [
    {
      title: 'Água e Esgoto',
      text: "Temos experiências diversas nas áreas de tratamento de água e esgoto, como construção e otimização de ETA's e ETE's, entre outros.",
      icon: {
        src: '/images/icon-agua-esgoto.png',
        alt: '',
        width: 136,
        height: 140,
      },
      links: [
        { label: 'Tratamento de Água', href: '/tratamento-de-agua/' },
        { label: 'Tratamento de Esgoto', href: '/tratamento-de-esgoto/' },
      ],
    },
    {
      title: 'Soluções Alternativas',
      text: 'Apoio a soluções de uso particular, como poços artesianos, minas, cisternas, captação de água de chuva, etc.',
      icon: {
        src: '/images/icon-solucoes-alternativas.png',
        alt: '',
        width: 140,
        height: 140,
      },
    },
    {
      title: 'Análise de Água',
      text: 'Analisamos amostras de efluentes do cliente em nosso laboratório. Atualmente possuímos o serviço de análise de potabilidade de água.',
      icon: {
        src: '/images/icon-analises.png',
        alt: '',
        width: 90,
        height: 90,
      },
      links: [{ label: 'Análise de Água', href: '/analise-de-agua/' }],
    },
  ],
};

export const models: { title: string; intro: string; cards: Card[] } = {
  title: 'Modelos de serviço',
  intro: 'Temos três modelos de serviços principais que podem lhe atender:',
  cards: [
    {
      title: 'Consultoria',
      text: 'Prestamos serviço de consultoria sobre tratamento de água e esgoto, abastecimento de água, treinamentos e equipamentos.',
      icon: {
        src: '/images/icon-consultoria.png',
        alt: '',
        width: 90,
        height: 90,
      },
      // ⚠️ No original ia para /contato, que não existe mais. Usa o WhatsApp.
      cta: {
        label: 'Saiba mais',
        srLabel: 'sobre Consultoria',
        href: site.whatsapp.href,
      },
    },
    {
      title: 'Assessoria',
      text: 'Fazemos o diagnóstico do sistema atual do cliente, planejamento e execução de melhorias de acordo com a necessidade.',
      icon: {
        src: '/images/icon-assessoria.png',
        alt: '',
        width: 90,
        height: 90,
      },
      // ⚠️ No original ia para /contato, que não existe mais. Usa o WhatsApp.
      cta: {
        label: 'Saiba mais',
        srLabel: 'sobre Assessoria',
        href: site.whatsapp.href,
      },
    },
    {
      title: 'Análise de Água',
      text: 'Oferecemos o serviço de coleta e análise de potabilidade de água. Analisamos e enviamos o laudo ao cliente por email.',
      icon: {
        src: '/images/icon-analise-agua.png',
        alt: '',
        width: 137,
        height: 140,
      },
      cta: {
        label: 'Saiba mais',
        srLabel: 'sobre Análise de Água',
        href: '/analise-de-agua/',
      },
    },
  ],
};

// TODO: confirmar com o cliente. Texto de um rascunho de outubro de 2020 que
// nunca foi publicado.
export const missionVisionValues = {
  title: 'Missão, Visão e Valores',
  items: [
    {
      title: 'Missão',
      text: 'Possibilitar a realização de projetos e soluções em total conformidade legal e o melhor custo-benefício, trazendo benefícios ao cliente e ao meio ambiente.',
    },
    {
      title: 'Visão',
      text: 'Ser uma empresa referência na realização de projetos e serviços que conectem os interesses e necessidades do cliente às exigências legais.',
    },
    {
      title: 'Valores',
      text: 'Levar qualidade de vida às pessoas de forma sustentável, contribuindo com o meio ambiente e com a saúde humana.',
    },
  ],
};

export const finalCta: { text: RichText } = {
  text: [
    {
      text: 'Precisa de uma análise de água ou de apoio no tratamento de água e esgoto?',
      strong: true,
    },
    { text: ' Fale com a nossa equipe.' },
  ],
};

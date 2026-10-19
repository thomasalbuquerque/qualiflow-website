import type { ImageData, PageMeta, RichText, Step } from './types';

export const analiseMeta: PageMeta = {
  title: 'Análise de Água Potável no Vale do Paraíba | QualiFlow',
  description:
    'Análise de potabilidade de água com coleta no local e laudo por e-mail conforme a Portaria de Consolidação nº 5/2017 do Ministério da Saúde. Atendemos São José dos Campos, Taubaté, Jacareí e região.',
};

export const importance: {
  title: RichText;
  image: ImageData;
  paragraphs: string[];
} = {
  title: [
    { text: 'Você sabe a ' },
    { text: 'real importância', highlight: true },
    { text: ' de beber água limpa?' },
  ],
  image: {
    src: '/images/agua-limpa.jpg',
    alt: 'Criança bebendo um copo de água limpa',
    width: 1280,
    height: 854,
  },
  paragraphs: [
    'No geral as pessoas sabem, mas não param para pensar o tamanho da importância de tomar água limpa.',
    'Podemos achar que nossa água é limpa, mas na verdade, muitas vezes a água que estamos tomando pode ter bactérias, fungos, coliformes fecais, pH fora da faixa saudável e até metais pesados como chumbo que podem causar doenças sérias como o câncer.',
    'Os afetados por esta má qualidade da água podem ser pessoas da própria família, ou até mesmo pessoas não conhecidas mas que estão consumindo a água que você é responsável pelo fornecimento.',
    'Um problema de saúde nessas pessoas pode gerar grandes processos jurídicos e até detenção do responsável.',
  ],
};

export const scenarios = {
  lead: 'Por isso a QualiFlow entende que todos aqueles que suspeitam sobre a qualidade da água que estão bebendo devem fazer um teste da qualidade da água, ou seja, uma análise de potabilidade, a fim de ficarem tranquilos em relação a este problema.',
  cards: [
    {
      title: 'Água potável',
      text: 'Caso a água seja comprovadamente potável, o responsável terá em mãos um laudo comprobatório, seguindo todas as normas legais, para apresentação futura caso seja requerido por alguma autoridade.',
    },
    {
      title: 'Água não potável',
      text: 'Caso a água tenha parâmetros que fazem com que a água seja classificada como não potável, o responsável será esclarecido sobre quais problemas aquela água tem, e o que pode acontecer caso ela não seja tratada.',
    },
  ],
  closing:
    'E claro, a QualiFlow estará à disposição para oferecer a solução para o tratamento da água.',
};

export const service: {
  title: string;
  highlights: string[];
  process: string[];
  steps: Step[];
  citiesIntro: string;
  contact: string[];
  ctaLabel: string;
  image: ImageData;
} = {
  title: 'Serviço de Análise de Água Potável da QualiFlow',
  highlights: [
    'Estamos atuando na área de saneamento na região do Vale do Paraíba desde 2019, e por enquanto oferecemos o serviço de análise de potabilidade nesta região.',
    'Prestamos serviços de análises de parâmetros Químicos, Físico-Químicos e Microbiológicos de água potável, água de reuso e efluentes.',
  ],
  process: [
    'Vamos ao local, coletamos as amostras e fazemos as análises em nosso laboratório.',
    'Em seguida retornamos ao cliente o laudo com o resultado por email, seguindo todos os parâmetros da Portaria da Consolidação Nº 05 de setembro de 2017 - Anexo XX do Ministério da Saúde.',
  ],
  steps: [
    { title: 'Coleta no local' },
    { title: 'Análise em laboratório' },
    {
      title: 'Laudo por e-mail',
      text: 'Conforme a Portaria de Consolidação nº 5/2017 do Ministério da Saúde.',
    },
  ],
  citiesIntro: 'Atuamos em diferentes cidades do Vale do Paraíba, SP:',
  contact: ['Entre em contato para solicitar um orçamento.'],
  ctaLabel: 'Entre em contato por WhatsApp',
  image: {
    src: '/images/analise-laboratorio.jpg',
    alt: 'Coleta de amostra de água para análise de potabilidade',
    width: 1000,
    height: 500,
  },
};

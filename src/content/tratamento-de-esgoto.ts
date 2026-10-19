import type { ServicePageContent } from './types';

export const tratamentoDeEsgoto: ServicePageContent = {
  meta: {
    title: 'Tratamento de Esgoto e Responsabilidade Técnica | QualiFlow',
    description:
      'Apoio a sistemas de tratamento de esgoto de todos os portes (lodo ativado, anaeróbio, facultativo): Responsabilidade Técnica, diagnóstico, recomendações e treinamentos.',
  },
  title: 'Tratamento de Esgoto',
  intro: [
    'Apoio a sistemas de tratamento de esgotos dos mais variados portes e métodos de tratamento, como lodo ativado, anaeróbio e facultativo.',
    'Serviços que prestamos: Consultoria e acompanhamento na parte de Responsabilidade Técnica. Primeiramente efetuamos o Diagnóstico, depois apresentamos as Recomendações Gerenciais e Técnicas geradas pelas análises do mesmo. A seguir, executamos as ações recomendadas.',
    'Estes serviços são detalhados abaixo.',
  ],
  banner: {
    src: '/images/tratamento-esgoto.jpg',
    alt: 'Tanque de aeração em estação de tratamento de esgoto',
    width: 1024,
    height: 390,
  },
  steps: [
    { title: 'Responsabilidade Técnica', href: '#responsabilidade-tecnica' },
    { title: 'Diagnóstico', href: '#diagnostico' },
    {
      title: 'Recomendações Gerenciais e Técnicas',
      href: '#recomendacoes-gerenciais',
    },
    { title: 'Execução', text: 'A seguir, executamos as ações recomendadas.' },
  ],
  details: [
    {
      id: 'responsabilidade-tecnica',
      title: 'Responsabilidade Técnica',

      text: 'Todo sistema de tratamento de esgotos deve estar em conformidade com os padrões de lançamento da legislação aplicável e a classe do corpo receptor. Para isto é preciso o acompanhamento de um responsável técnico para liderar o cumprimento das exigências da licença de operação.',
    },
    {
      id: 'diagnostico',
      title: 'Diagnóstico',
      text: 'O Diagnóstico é um serviço de auditoria do processo de tratamento de esgoto, para verificação da conformidade legal do sistema, levantamento dos riscos e demais oportunidades de melhorias.',
    },
    {
      id: 'recomendacoes-gerenciais',
      title: 'Recomendações Gerenciais',
      text: 'Recomendações para redução de custos, perdas e adequação à conformidade operacional.',
      items: [
        {
          title: 'Organização de processos',
          text: 'Utilização de formulários padronizados de acordo com a necessidade do cliente e procedimentos padrões.',
        },
      ],
    },
    {
      id: 'recomendacoes-tecnicas',
      title: 'Recomendações Técnicas',
      text: 'Recomendações diretamente ligadas a processos químicos, físico-químicos e biológicos. Estas recomendações visam promover melhorias na eficiência, conformidade legal, redução de mão de obra e demais ganhos aos processos.',
      items: [
        {
          title: 'Treinamentos',
          text: 'Capacitação de novos colaboradores dos sistemas. Os treinamentos visam aprimorar a capacidade técnica dos envolvidos nos processos, tanto nas boas práticas de operação quanto na legislação aplicável.',
        },
        {
          title: 'Planejamento operacional',
          text: 'Planejamento com times visando elaborar junto à empresa sugestões e planejar ações que visam tornar melhor o ambiente de trabalho, reduzir custos, ganho de tempo e demais benefícios tangíveis e intangíveis.',
        },
      ],
    },
  ],
  cta: {
    text: 'Entre em contato e nos conte sobre o sistema de tratamento de esgoto que pretende iniciar ou melhorar.',
  },
};

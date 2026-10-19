import type { ServicePageContent } from "./types";

export const tratamentoDeAgua: ServicePageContent = {
  meta: {
    title: "Tratamento de Água e Responsabilidade Técnica | QualiFlow",
    description:
      "Consultoria e Responsabilidade Técnica para sistemas de tratamento de água: diagnóstico, recomendações gerenciais e técnicas, treinamentos e planejamento operacional.",
  },
  title: "Tratamento de Água",
  intro: [
    "Apoio a sistemas de tratamento de água de captação superficial ou subterrânea, que passe por tratamento e/ou desinfecção para consumo posterior.",
    "Serviços que prestamos: Consultoria e acompanhamento na parte de Responsabilidade Técnica. Primeiramente efetuamos o Diagnóstico, depois apresentamos as Recomendações Gerenciais e Técnicas geradas pelas análises do mesmo. A seguir, executamos as ações recomendadas.",
    "Estes serviços são detalhados abaixo.",
  ],
  banner: {
    src: "/images/tratamento-agua.jpg",
    alt: "Estação de tratamento de água com tanques de decantação e filtros",
    width: 1024,
    height: 390,
  },
  steps: [
    { title: "Responsabilidade Técnica", href: "#responsabilidade-tecnica" },
    { title: "Diagnóstico", href: "#diagnostico" },
    { title: "Recomendações Gerenciais e Técnicas", href: "#recomendacoes-gerenciais" },
    { title: "Execução", text: "A seguir, executamos as ações recomendadas." },
  ],
  details: [
    {
      id: "responsabilidade-tecnica",
      title: "Responsabilidade Técnica",
      text: "Toda água destinada ao consumo humano deve atender aos requisitos do Anexo XX da Portaria da Consolidação Nº 5 de 28 de setembro de 2017 do Ministério da Saúde. Esta legislação exige que o sistema de abastecimento de água seja representado por um especialista para o total atendimento da legislação e de exigências de licenciamento, tanto da Vigilância Sanitária quanto dos demais órgãos relacionados.",
    },
    {
      id: "diagnostico",
      title: "Diagnóstico",
      text: "O Diagnóstico é um serviço de auditoria do processo de abastecimento de água, para verificação da conformidade legal do sistema, levantamento dos riscos aos usuários e demais oportunidades de melhorias.",
    },
    {
      id: "recomendacoes-gerenciais",
      title: "Recomendações Gerenciais",
      text: "Recomendações para redução de custos, perdas e adequação à conformidade operacional.",
      items: [
        {
          title: "Organização de processos",
          text: "Utilização de formulários padronizados de acordo com a necessidade do cliente e procedimentos padrões.",
        },
      ],
    },
    {
      id: "recomendacoes-tecnicas",
      title: "Recomendações Técnicas",
      text: "Recomendações diretamente ligadas a processos químicos, físico-químicos e biológicos. Estas recomendações visam promover melhorias na eficiência, conformidade legal, redução de mão de obra e demais ganhos aos processos.",
      items: [
        {
          title: "Treinamentos",
          text: "Capacitação de novos colaboradores dos sistemas. Os treinamentos visam aprimorar a capacidade técnica dos envolvidos nos processos, tanto nas boas práticas de operação quanto na legislação aplicável.",
        },
        {
          title: "Planejamento operacional",
          text: "Planejamento com times visando elaborar junto à empresa sugestões e planejar ações que visam tornar melhor o ambiente de trabalho, reduzir custos, ganho de tempo e demais benefícios tangíveis e intangíveis.",
        },
      ],
    },
  ],
  cta: {
    text: "Entre em contato e nos conte sobre o sistema de tratamento de água que pretende iniciar ou melhorar.",
  },
};

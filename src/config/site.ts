// Dados globais do site. Todos os contatos ficam aqui para facilitar a troca.

const whatsappNumber = "5512982858917";
const whatsappMessage =
  "Olá, tudo bem? Acessei o seu site da QualiFlow, e gostaria de saber ...";

export const site = {
  name: "QualiFlow",
  url: "https://qualiflow.com.br",
  // ⚠️ No original estava "acessoria"; corrigido para "assessoria".
  description:
    'Soluções para análise de água, e tratamento de água e esgoto. Serviços de construção e manutenção de estações de tratamento de água e de esgoto, e consultoria e assessoria em saneamento e abastecimento de água.',
  phone1: {
    display: '(12) 98285-8917',
    href: 'tel:+5512982858917',
  },
  phone2: {
    display: '(12) 99669-2001',
    href: 'tel:+5512996692001',
  },
  // ⚠️ O número do WhatsApp é diferente do telefone exibido. Isso é
  // intencional: o WhatsApp foi atualizado em 2024 e o telefone não.
  whatsapp: {
    number: whatsappNumber,
    display: "(12) 98285-8917",
    message: whatsappMessage,
    href: `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`,
  },
  email: "atendimento@qualiflow.com.br",
  mailto: "mailto:atendimento@qualiflow.com.br",
  cnpj: "35.940.567/0001-22",
  social: [
    { name: "Facebook", href: "https://www.facebook.com/QualiFlow/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/qualiflow/" },
    { name: "Instagram", href: "https://www.instagram.com/qualiflow/" },
  ],
  // Região de atuação: Vale do Paraíba, SP (as cidades abaixo "e região").
  cities: [
    "São José dos Campos",
    "Taubaté",
    "Jacareí",
    "Caçapava",
    "Igaratá",
    "Nazaré Paulista",
    "Guaratinguetá",
    "Pindamonhangaba",
    "Paraibuna",
    "Mogi das Cruzes",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Análise de Água", href: "/analise-de-agua/" },
    { label: "Tratamento de Água", href: "/tratamento-de-agua/" },
    { label: "Tratamento de Esgoto", href: "/tratamento-de-esgoto/" },
  ],
} as const;

export type SocialName = (typeof site.social)[number]["name"];

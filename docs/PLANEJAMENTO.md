# Planejamento: site da QualiFlow em Next.js + Tailwind CSS

Este é o roteiro de execução para construir o site inteiro em uma sessão. Siga as etapas na ordem. Cada etapa termina com um critério de **pronto quando**: só avance depois de cumpri-lo.

## Fontes

| O quê                                                         | Onde                                                                               |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Especificação completa (textos, cores, rotas, metas, imagens) | `/Users/thomas/Documents/projetos-pessoais/public_html/PROMPT-QUALIFLOW-NEXTJS.md` |
| Imagens originais do WordPress                                | `/Users/thomas/Documents/projetos-pessoais/public_html/wp-content/uploads/`        |
| Pasta do projeto (raiz do Next.js)                            | `/Users/thomas/Documents/projetos-pessoais/public_html/qualiflow-website/`         |

O prompt é a **fonte da verdade para os textos**. Este plano não repete os textos: ele diz em que ordem construir e registra as decisões tomadas ao inspecionar os arquivos. Ao preencher `src/content/*.ts`, copie os textos do prompt **literalmente**, já com as correções marcadas com ⚠️ aplicadas.

Ignore o restante de `public_html/` (é o WordPress antigo). Não leia `wp-config.php` nem arquivos do WordPress: nada deles é necessário.

---

## Decisões já tomadas (verificadas na sessão de planejamento)

Estas decisões **substituem** o prompt onde houver conflito.

1. **Versões:** Node 22.23, pnpm 11, Next.js **16.4.2**, React 19.3, Tailwind CSS **4.x**. Fixe `create-next-app@16.4.2`.
2. **Tailwind v4 não tem `tailwind.config.ts`.** Os tokens de cor e fonte ficam em `src/app/globals.css`, dentro de `@theme`. O template do Next 16 processa o CSS com `@tailwindcss/turbopack` (regra em `next.config.ts`). Mantenha essa regra.
3. **O template do Next 16 ativa `cacheComponents: true` e `partialPrefetching: true`** no `next.config.ts`. O site é 100% estático e não busca dados, então **remova as duas opções** para evitar conflito com `output: 'export'`.
4. **O `create-next-app` gera um `AGENTS.md`** avisando que o Next 16 tem APIs diferentes das que você conhece. Siga o aviso: antes de escrever `next.config.ts`, metadata, `sitemap.ts`/`robots.ts` e `next/image`, consulte os guias em `node_modules/next/dist/docs/` (busque por "static exports", "metadata", "sitemap", "robots", "images").
5. **Exportação estática:** `output: 'export'`, `images: { unoptimized: true }` e `trailingSlash: true`. O `trailingSlash` mantém as URLs antigas do WordPress (`/analise-de-agua/`), o que preserva o SEO, e gera `pasta/index.html`, que funciona em hospedagem Apache sem regras extras.
6. **Hospedagem:** o backup é de uma hospedagem compartilhada Apache (pasta `public_html/` e arquivo `monarx-analyzer.php`, típico da Hostinger). Por isso o redirect `/analises-laboratoriais` → `/analise-de-agua` vai em um **`public/.htaccess`**, que o export copia para `out/`. Documente também a alternativa para a Vercel (`redirects` no `vercel.json`).
7. **Logo do rodapé, correção do prompt:** `2019/04/fundo_branco_maior.png` tem **fundo branco opaco** e ficaria como um quadrado branco sobre o petróleo `#01506E`. Use **`2019/04/branco_transparente.png`** (1086×914, logo toda branca com fundo transparente). Ela foi conferida renderizada sobre `#01506E`. Registre isso na lista ⚠️ do README.
8. **Logo do header:** `logo-qualiflow-12-kb.png` (808×678) **não tem transparência** (o fundo é branco). Então o header precisa de fundo branco sólido, não transparente sobre o hero. Exiba a logo com cerca de 48 a 56 px de altura.
9. **`bg-home.png` não será copiado.** É a mesma foto do hero (água escura com reflexos) em PNG de 1,4 MB. Use só `hero-home.png` (1280×720, 48 KB). Com o overlay escuro, a ampliação não é perceptível.
10. **Ícones dos cards** são desenhos de traço **verde** com fundo transparente. Coloque-os sobre fundo claro (branco ou `brand-aqua` bem suave), nunca sobre fundo escuro ou verde. Exiba com 64 a 80 px.
11. **Contraste (WCAG AA), valores calculados:**
    | Combinação | Contraste | Decisão |
    |---|---|---|
    | `#808285` (texto do site antigo) sobre branco | 3,85:1 ❌ | Texto corpo passa a ser **`#5c5e61`** (6,5:1). Token `brand-gray`. |
    | Branco sobre `#23a455` (botão verde) | 3,22:1 ❌ para texto normal | Botões com texto branco usam **`#187a3e`** (5,4:1), token `brand-green-dark`. O `#23a455` fica para detalhes, ícones, bordas, faixas e hover. |
    | Faixa CTA verde da Home (`#23a455`) | 3,22:1 | Pode manter o fundo `#23a455` se o texto for branco **bold e ≥ 24 px** (texto grande, mínimo 3:1). Senão, use `brand-green-dark`. |
    | Branco sobre `#01506E` (rodapé) | 8,85:1 ✅ | OK |
    | `#00ff80` sobre `#01506E` (links do rodapé) | 6,58:1 ✅ | OK |
    | `#4d60a5` sobre branco (links) | 5,95:1 ✅ | OK |
    | `#000028` sobre branco ou `#a0e1d9` | 20:1 / 13,8:1 ✅ | OK |
12. **Ícones de redes sociais e do WhatsApp:** SVG inline em `src/components/icons.tsx`, sem biblioteca extra (o lucide removeu os ícones de marcas).
13. **Favicon:** use as convenções de arquivo do App Router. Copie `cropped-favicon.png` para `src/app/icon.png` e `src/app/apple-icon.png`, e apague o `src/app/favicon.ico` do template.
14. **Link do WhatsApp:** monte com `encodeURIComponent` a partir de número + mensagem em `site.ts`. O resultado precisa ser **idêntico** à URL do prompt (confira com um `console.log` ou teste rápido).
15. **Tema:** o site é só claro. Remova o bloco `prefers-color-scheme: dark` do `globals.css` do template.
16. **Git:** deixe o `create-next-app` iniciar o repositório, mas só faça commits se o usuário pedir.

---

## Estrutura alvo

```
qualiflow-website/
├── docs/PLANEJAMENTO.md            ← este arquivo
├── public/
│   ├── .htaccess                   ← redirect 301 + ErrorDocument 404
│   └── images/                     ← 15 imagens (etapa 3)
├── src/
│   ├── app/
│   │   ├── layout.tsx              ← fontes, metadata padrão, Header, Footer, WhatsAppButton
│   │   ├── globals.css             ← @import "tailwindcss" + @theme com tokens
│   │   ├── icon.png / apple-icon.png
│   │   ├── page.tsx                ← Home
│   │   ├── analise-de-agua/page.tsx
│   │   ├── tratamento-de-agua/page.tsx
│   │   ├── tratamento-de-esgoto/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── config/site.ts              ← nome, URL, contatos, WhatsApp, CNPJ, redes, cidades, nav
│   ├── content/
│   │   ├── types.ts
│   │   ├── home.ts                 ← com // TODO: confirmar com o cliente (Missão/Visão/Valores)
│   │   ├── analise-de-agua.ts
│   │   ├── tratamento-de-agua.ts
│   │   └── tratamento-de-esgoto.ts
│   └── components/
│       ├── Header.tsx              ← server component
│       ├── MobileMenu.tsx          ← "use client" (hambúrguer)
│       ├── Footer.tsx
│       ├── WhatsAppButton.tsx      ← botão flutuante
│       ├── CtaButton.tsx           ← variantes: primary | outline | light; interno (Link) ou externo (<a>)
│       ├── Section.tsx             ← wrapper com container, id, título opcional, fundo
│       ├── Hero.tsx
│       ├── ServiceCard.tsx         ← ícone + título + texto + links/botão opcionais
│       ├── Steps.tsx               ← passos numerados / timeline
│       ├── CtaBanner.tsx           ← faixa de CTA final
│       ├── ServicePage.tsx         ← template de Tratamento de Água/Esgoto
│       └── icons.tsx               ← WhatsApp, Facebook, LinkedIn, Instagram, telefone, e-mail, menu, fechar
├── next.config.ts
└── README.md
```

---

## Etapa 0: Preparação

1. Leia o `PROMPT-QUALIFLOW-NEXTJS.md` inteiro uma vez.
2. Confirme que `qualiflow-website/` contém apenas `docs/` (o `create-next-app` aceita uma pasta `docs/` já existente, o que foi testado com a 16.4.2).

**Pronto quando:** você conhece as 4 páginas e as decisões acima.

## Etapa 1: Scaffold

```bash
cd /Users/thomas/Documents/projetos-pessoais/public_html/qualiflow-website
pnpm dlx create-next-app@16.4.2 . --ts --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --use-pnpm --no-agent-feedback --yes
```

Depois:

1. Leia o `AGENTS.md` gerado e mantenha-o.
2. Limpe o boilerplate: apague `public/*.svg` e `src/app/favicon.ico`, esvazie `src/app/page.tsx` e tire as fontes Geist do `layout.tsx`.
3. Ajuste `package.json` → `"name": "qualiflow-website"`.

**Pronto quando:** `pnpm dev` sobe e mostra a página vazia sem erros.

## Etapa 2: `next.config.ts`

Consulte `node_modules/next/dist/docs/` sobre static exports. Depois:

- Adicione `output: "export"`, `trailingSlash: true` e `images: { unoptimized: true }`.
- Remova `cacheComponents` e `partialPrefetching`.
- Mantenha o bloco `turbopack.rules` do Tailwind.

**Pronto quando:** `pnpm build` gera a pasta `out/` sem erros.

## Etapa 3: Imagens

Copie com nomes limpos. Os caminhos de origem são relativos a `public_html/wp-content/uploads/`.

```bash
U=/Users/thomas/Documents/projetos-pessoais/public_html/wp-content/uploads
D=/Users/thomas/Documents/projetos-pessoais/public_html/qualiflow-website/public/images
mkdir -p "$D"
cp "$U/2021/03/logo-qualiflow-12-kb.png"                 "$D/logo.png"
cp "$U/2019/04/branco_transparente.png"                  "$D/logo-footer.png"      # ⚠️ não usar fundo_branco_maior.png
cp "$U/2021/02/capa-do-site_Easy-Resize.com_.jpg"        "$D/hero-home.png"
cp "$U/2020/07/agua-e-esgoto6.png"                       "$D/icon-agua-esgoto.png"
cp "$U/2020/07/solucoes-alternativas.png"                "$D/icon-solucoes-alternativas.png"
cp "$U/2020/07/analises2.png"                            "$D/icon-analises.png"
cp "$U/2020/07/consultoria2.png"                         "$D/icon-consultoria.png"
cp "$U/2020/07/assessoria2.png"                          "$D/icon-assessoria.png"
cp "$U/2020/07/analise-de-agua2.png"                     "$D/icon-analise-agua.png"
cp "$U/2021/03/imagem-5-raw_Easy-Resize.com_.jpg"        "$D/agua-limpa.jpg"
cp "$U/2021/02/analise-agua-potavel-laboratorio-50kb.jpg" "$D/analise-laboratorio.jpg"
cp "$U/2021/03/back-sua-agua-e-potave.jpg"               "$D/bg-agua-potavel.jpg"
cp "$U/2019/11/x1_tratamento2-1.jpg"                     "$D/tratamento-agua.jpg"
cp "$U/2019/11/3-esgoto2-1.jpg"                          "$D/tratamento-esgoto.jpg"
cp "$U/2019/09/cropped-favicon.png" /Users/thomas/Documents/projetos-pessoais/public_html/qualiflow-website/src/app/icon.png
cp "$U/2019/09/cropped-favicon.png" /Users/thomas/Documents/projetos-pessoais/public_html/qualiflow-website/src/app/apple-icon.png
```

Os alts abaixo foram escritos depois de olhar cada imagem. Use-os em `src/content/`:

| Arquivo                   | Conteúdo real                                                             | `alt`                                                                                         |
| ------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `logo.png`                | Logo colorida (gota azul em setas verdes circulares, "QualiFlow")         | `QualiFlow`                                                                                   |
| `logo-footer.png`         | Mesma logo, toda branca                                                   | `QualiFlow`                                                                                   |
| `hero-home.png`           | Superfície de água escura com reflexos                                    | decorativa: `alt=""` (é fundo)                                                                |
| `agua-limpa.jpg`          | Menina bebendo um copo de água, fundo de plantas                          | `Criança bebendo um copo de água limpa`                                                       |
| `analise-laboratorio.jpg` | Mão enchendo tubo de amostra na torneira                                  | `Coleta de amostra de água para análise de potabilidade` (texto do prompt)                    |
| `bg-agua-potavel.jpg`     | Mão com luva roxa segurando tubo de ensaio com água                       | `Técnico com luva segurando tubo de ensaio com amostra de água` (ou `""` se usada como fundo) |
| `tratamento-agua.jpg`     | Vista aérea de uma estação de tratamento de água (decantadores e filtros) | `Estação de tratamento de água com tanques de decantação e filtros`                           |
| `tratamento-esgoto.jpg`   | Tanque de aeração de uma estação de tratamento de esgoto                  | `Tanque de aeração em estação de tratamento de esgoto`                                        |
| ícones `icon-*.png`       | Ícones de traço verde                                                     | `alt=""` (o título do card já descreve)                                                       |

Lembre: `agua-esgoto6` = gotas; `solucoes-alternativas` = gota → reservatório; `analises2` = vidraria de laboratório; `consultoria2` = duas pessoas conversando; `assessoria2` = engrenagem; `analise-de-agua2` = béquer.

**Pronto quando:** `ls public/images` lista 14 arquivos, e `src/app/icon.png` e `apple-icon.png` existem.

## Etapa 4: Tema, fontes e layout base

1. **`globals.css`:** `@import "tailwindcss";` e um bloco `@theme` com:
   - `--color-brand-green: #23a455`, `--color-brand-green-dark: #187a3e`, `--color-brand-petrol: #01506E`, `--color-brand-link: #4d60a5`, `--color-brand-navy: #000028`, `--color-brand-aqua: #a0e1d9`, `--color-brand-gray: #5c5e61`, `--color-brand-footer-link: #00ff80`
   - `--font-sans: var(--font-roboto)` e `--font-heading: var(--font-montserrat)`
   - Base: `body` com `bg-white text-brand-gray font-sans`; `h1`–`h4` com `font-heading text-brand-navy`; foco visível global (`:focus-visible` com `outline` em `brand-green-dark`, offset 2px); `scroll-behavior: smooth` com `prefers-reduced-motion` respeitado; `scroll-margin-top` nas seções para o header fixo não cobrir as âncoras.
2. **`layout.tsx`:**
   - `next/font/google`: `Montserrat` (pesos 600 e 700, `variable: "--font-montserrat"`) e `Roboto` (400, 500 e 700, `variable: "--font-roboto"`), ambos com `subsets: ["latin"]` e `display: "swap"`.
   - `<html lang="pt-BR">`.
   - `metadata` padrão: `metadataBase: new URL(site.url)`, `title: { default, template: "%s | QualiFlow" }`, `description` = descrição curta, `openGraph` (locale `pt_BR`, siteName, imagem `/images/hero-home.png` ou logo).
   - Estrutura: link "Pular para o conteúdo" (sr-only, visível no foco), depois `<Header/>`, `<main id="conteudo">`, `<Footer/>` e `<WhatsAppButton/>`.
   - **Atenção ao title:** as metas do prompt já trazem "| QualiFlow". Nas páginas, use `title: { absolute: "..." }` com o texto exato do prompt, para não gerar "| QualiFlow | QualiFlow".

**Pronto quando:** uma página de teste mostra Montserrat nos títulos, Roboto no corpo e as classes `bg-brand-*` funcionando.

## Etapa 5: Config e conteúdo tipado

1. **`src/config/site.ts`**, com tudo vindo do prompt (seção "Dados globais"):
   - `name`, `url: "https://qualiflow.com.br"`, `description` (com "assessoria" corrigido ⚠️)
   - `phone: { display: "(12) 99669-2001", href: "tel:+5512996692001" }`
   - `whatsapp: { number: "5512982858917", message: "Olá, tudo bem? Acessei o seu site da QualiFlow, e gostaria de saber ...", href }`, com `href` montado por `encodeURIComponent`. Comentário: ⚠️ número do WhatsApp diferente do telefone exibido, o que é intencional (atualizado em 2024).
   - `email`, `mailto`, `cnpj`, `social: [{ name, href }]`, `cities: string[]` (11 cidades + "região" fica no texto)
   - `nav: [{ label, href }]` com as 4 rotas, usando barra final (`/analise-de-agua/`) por causa do `trailingSlash`
2. **`src/content/types.ts`:** tipos para `ImageData { src, alt, width, height }`, `Card`, `Step`, `ServicePageContent`, `PageMeta { title, description }`. Para trechos em negrito, use um tipo simples, por exemplo `RichText = string | { text: string; strong?: boolean }[]`, ou campos específicos (`titleHighlight`). Não use Markdown nem `dangerouslySetInnerHTML`.
3. **`home.ts`, `analise-de-agua.ts`, `tratamento-de-agua.ts` e `tratamento-de-esgoto.ts`:** transcreva os textos do prompt, aplicando as correções ⚠️:
   - Home: os botões de Consultoria/Assessoria vão para o WhatsApp (não `/contato`), Missão/Visão/Valores com `// TODO: confirmar com o cliente` e **sem** a seção "Trabalhos realizados".
   - Análise: "desde 2019".
   - Esgoto: "Apoio a sistemas" sem crase, sem vírgula em "Todo sistema de tratamento de esgotos deve", Diagnóstico adaptado para esgoto.
   - Os dois arquivos de tratamento têm **o mesmo formato** (`ServicePageContent`).

**Pronto quando:** `pnpm exec tsc --noEmit` passa e o link do WhatsApp gerado é igual ao do prompt.

## Etapa 6: Componentes globais

1. **`CtaButton`:** recebe `href`, `variant` (`primary` = `bg-brand-green-dark` com texto branco; `outline`; `light` = branco com texto navy, para fundos escuros) e `icon?`. Usa `next/link` para rotas internas e `<a target="_blank" rel="noopener noreferrer">` para externas (WhatsApp, redes), `tel:` e `mailto:` sem `target`.
2. **`Header`:** fundo branco, `sticky top-0`, sombra leve. Logo à esquerda (link para `/`), nav no desktop (`md:` para cima) com o item ativo destacado (`aria-current="page"`) e o botão "Fale conosco" (WhatsApp, `primary`).
   - O item ativo exige `usePathname`, ou seja, um client component. Isole isso em um `NavLinks` cliente pequeno, ou deixe o `MobileMenu` cuidar das duas versões.
3. **`MobileMenu` (`"use client"`):** botão hambúrguer com `aria-expanded`, `aria-controls` e `aria-label`. O painel fecha ao clicar num link e com `Esc`, e trava o scroll do body enquanto aberto.
4. **`Footer`:** fundo `brand-petrol`, texto branco, links `brand-footer-link`. Colunas: logo branca + descrição | Páginas | Contato (telefone, e-mail, WhatsApp) + CNPJ | redes sociais (ícones SVG com `aria-label`). Embaixo: `© {new Date().getFullYear()} QualiFlow. Todos os direitos reservados.` (o ano é resolvido no build, o que serve para um site estático).
5. **`WhatsAppButton`:** `fixed bottom-4 right-4 z-50`, círculo verde com o ícone do WhatsApp, `aria-label="Fale conosco pelo WhatsApp"` e área de toque ≥ 48 px. Não deve cobrir o conteúdo do rodapé no mobile (dê `pb` extra no footer).

**Pronto quando:** header, footer e botão flutuante aparecem em todas as rotas, o menu mobile funciona a 375 px e a navegação por teclado (Tab) passa por tudo com foco visível.

## Etapa 7: Componentes de seção

- **`Section`:** `id`, `title?`, `intro?`, `background` (`white` | `muted` | `aqua` | `petrol`), container `max-w-6xl mx-auto px-4`.
- **`Hero`:** imagem de fundo (`next/image` com `fill`, `priority`, `alt=""`), overlay `bg-brand-navy/70`, `h1` branco e slot de botões. Altura de cerca de 70vh no desktop e conteúdo-dependente no mobile.
- **`ServiceCard`:** ícone (64 a 80 px, sobre fundo claro), `h3`, texto, `links?` (lista de links de texto) e `cta?` (botão "Saiba mais").
- **`Steps`:** lista ordenada (`<ol>`) com número em círculo e título/texto. Fica horizontal no desktop e vertical no mobile.
- **`CtaBanner`:** faixa com fundo verde, texto e botões (ver a decisão de contraste 11).

**Pronto quando:** os componentes renderizam com dados de exemplo sem warnings no console.

## Etapa 8: Home (`/`)

Siga a seção "Página: Home" do prompt:

1. `Hero` com `hero-home.png`, h1 "Água tratada é saúde e bem-estar" e botões WhatsApp (`light`) + "Nossos serviços" (âncora `#servicos`, `outline` claro).
2. "Sobre a QualiFlow": dois parágrafos. Pode ir ao lado da logo grande ou de um ícone decorativo.
3. `#servicos` "Como podemos lhe ajudar?": 3 `ServiceCard`. O de Água e Esgoto tem dois links (Tratamento de Água / Tratamento de Esgoto), e o de Análise de Água tem link para `/analise-de-agua/`.
4. "Modelos de serviço": 3 cards com o botão "Saiba mais" (WhatsApp, WhatsApp, `/analise-de-agua/`).
5. "Missão, Visão e Valores": 3 blocos curtos, fundo `aqua` suave ou `muted`.
6. `CtaBanner`: "**Precisa de uma análise de água ou de apoio no tratamento de água e esgoto?** Fale com a nossa equipe." + botões WhatsApp e e-mail.
7. `metadata` com o title e a description do prompt (`title.absolute`).

**Pronto quando:** a Home bate com o prompt, seção por seção, e **não** tem "Trabalhos realizados".

## Etapa 9: Análise de Água (`/analise-de-agua`)

1. Bloco 1: grid de 2 colunas, `agua-limpa.jpg` + h1/h2 "Você sabe a **real importância** de beber água limpa?" (destaque em `brand-green-dark`) + 4 parágrafos. Esta página não tem hero, então o h1 é esse título.
2. Bloco 2: parágrafo de abertura + **dois cards lado a lado**, "Água potável" (laudo comprobatório) e "Água não potável" (esclarecimento + solução), + a frase final "E claro, a QualiFlow estará à disposição...".
3. Bloco 3: h2 "Serviço de Análise de Água Potável da QualiFlow", os 2 parágrafos em negrito, **`Steps` com 3 passos** (Coleta no local → Análise em laboratório → Laudo por e-mail, citando a Portaria), as cidades como **tags** (`site.cities`), os parágrafos de orçamento e o botão "Entre em contato por WhatsApp".
4. `analise-laboratorio.jpg` no fim (ou ao lado do bloco 3). `bg-agua-potavel.jpg` é opcional: só use se melhorar o layout.
5. `metadata` do prompt.

**Pronto quando:** todo o texto do prompt está na página, com "desde 2019".

## Etapa 10: Template `ServicePage` + Tratamento de Água e de Esgoto

1. `ServicePage({ content })`, com este layout:
   - h1 + introdução (2 parágrafos + "Estes serviços são detalhados abaixo.")
   - banner (imagem 1024×390, `rounded`, largura total do container)
   - **`Steps`**: Responsabilidade Técnica → Diagnóstico → Recomendações (Gerenciais e Técnicas) → Execução
   - seções detalhadas: Responsabilidade Técnica, Diagnóstico, Recomendações Gerenciais (com o item "Organização de processos") e Recomendações Técnicas (com "Treinamentos" e "Planejamento operacional"), em cards ou lista com títulos em negrito
   - `CtaBanner` com o texto de CTA específico + botão WhatsApp
2. `tratamento-de-agua/page.tsx` e `tratamento-de-esgoto/page.tsx` ficam com cerca de 10 linhas cada: importam o conteúdo, exportam `metadata` e renderizam `<ServicePage content={...} />`.
3. O passo "Execução" não tem texto próprio no prompt. Use a frase já existente ("A seguir, executamos as ações recomendadas.") e **não invente conteúdo**.

**Pronto quando:** as duas páginas renderizam pelo mesmo template, com as correções ⚠️ da página de esgoto aplicadas.

## Etapa 11: SEO, 404 e redirect

1. **`src/app/sitemap.ts`** e **`src/app/robots.ts`**: confira nos docs do Next 16 o que exigem com `output: 'export'` (normalmente `export const dynamic = "force-static"`). O sitemap lista as 4 URLs com barra final, e o robots libera tudo e aponta para o sitemap.
2. **`src/app/not-found.tsx`**: mensagem simples em pt-BR + links para as páginas. O export gera `out/404.html`.
3. **`public/.htaccess`**:
   ```apache
   ErrorDocument 404 /404.html
   RedirectMatch 301 ^/analises-laboratoriais/?$ /analise-de-agua/
   ```
4. Confira o title e a description de cada página no HTML gerado.

**Pronto quando:** `out/` contém `sitemap.xml`, `robots.txt`, `404.html`, `.htaccess`, `analise-de-agua/index.html`, `tratamento-de-agua/index.html` e `tratamento-de-esgoto/index.html`.

## Etapa 12: README

Substitua o README do template. Ele deve ter:

1. Descrição do projeto e da stack (com versões).
2. Comandos: `pnpm install`, `pnpm dev`, `pnpm build` (gera `out/`), `pnpm lint` e como pré-visualizar o build (`pnpm dlx serve out`).
3. Onde editar: textos em `src/content/`, contatos em `src/config/site.ts`, cores em `src/app/globals.css` (`@theme`).
4. **Publicação:**
   - Hospedagem Apache/Hostinger: enviar **o conteúdo de `out/`** (incluindo o `.htaccess` oculto) para o `public_html` do domínio, depois de fazer backup do WordPress. Nunca envie a pasta do código-fonte.
   - Vercel: importar o repositório. Explique que, com `output: 'export'`, o redirect precisa ir em `vercel.json` (dê o exemplo com `"redirects"`).
5. **Pendências para confirmar com o cliente**, lista completa:
   - ⚠️ "acessoria" corrigido para "assessoria"
   - ⚠️ WhatsApp (12) 98285-8917 ≠ telefone exibido (12) 99669-2001
   - ⚠️ `nature-image.jpg` não existe, então o hero usa `hero-home.png`
   - ⚠️ Botões de Consultoria/Assessoria levam ao WhatsApp em vez de `/contato`
   - ⚠️ "Estamos há dois anos" virou "desde 2019"
   - ⚠️ Crase em "Apoio a sistemas" (esgoto)
   - ⚠️ Vírgula removida em "Todo sistema de tratamento de esgotos deve"
   - ⚠️ Diagnóstico de esgoto adaptado (o original repetia o de água)
   - ⚠️ Seção "Trabalhos realizados" removida (números nunca preenchidos)
   - ⚠️ Logo do rodapé: usado `branco_transparente.png` (o `fundo_branco_maior.png` sugerido no prompt tem fundo branco)
   - ⚠️ Cores escurecidas para contraste: texto `#808285` → `#5c5e61`, botões `#23a455` → `#187a3e`
   - TODO: Missão, Visão e Valores vêm de um rascunho de 2020 nunca publicado

**Pronto quando:** o README cobre os 5 itens.

## Etapa 13: Verificação final

1. `pnpm lint` sem erros e `pnpm build` sem erros nem warnings relevantes.
2. `pnpm dlx serve out` e testar no navegador (use a skill `run`, se disponível):
   - as 4 páginas, nas larguras 375 px, 768 px e 1280 px, sem scroll horizontal
   - menu mobile abre e fecha, inclusive com `Esc`
   - âncora "Nossos serviços" rola até a seção sem ficar escondida atrás do header
   - todos os links de WhatsApp, `tel:`, `mailto:` e redes sociais corretos
   - navegação por teclado com foco visível, e "Pular para o conteúdo" funciona
   - imagens sem distorção, todas com `alt` adequado
   - favicon aparece
3. Revise cada página contra o prompt, parágrafo por parágrafo: nenhum texto faltando, nenhuma correção ⚠️ esquecida, nenhum texto inventado.
4. Opcional: Lighthouse (Acessibilidade e SEO ≥ 95).

**Pronto quando:** tudo acima passa. Relate ao usuário o que foi feito, o que foi verificado e as pendências do README.

---

## Fora do escopo

- Não publique nem sobrescreva nada no `public_html` real e não mexa nos arquivos do WordPress.
- Sem blog, formulário com backend, CMS, WooCommerce ou analytics.
- Não acrescente conteúdo que não está no prompt (depoimentos, números, clientes, FAQ).

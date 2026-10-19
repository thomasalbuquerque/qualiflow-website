# Site da QualiFlow

Site institucional da [QualiFlow](https://qualiflow.com.br), empresa de saneamento do Vale do Paraíba (SP). Ele substitui o antigo WordPress + Elementor por um site 100% estático.

São 4 páginas: Home, Análise de Água, Tratamento de Água e Tratamento de Esgoto. Não há banco de dados, CMS nem formulário com backend. O contato é feito por WhatsApp, telefone e e-mail.

## Stack

| Ferramenta                               | Versão                   |
| ---------------------------------------- | ------------------------ |
| Node.js                                  | 22.x (testado com 22.23) |
| Next.js (App Router, `output: "export"`) | 16.4.2                   |
| React                                    | 19.3                     |
| TypeScript                               | 5.x                      |
| Tailwind CSS                             | 4.x                      |

Fontes: Montserrat (títulos) e Roboto (corpo), via `next/font/google`. Elas são baixadas no build e servidas pelo próprio site.

## Comandos

```bash
pnpm install        # instala as dependências
pnpm dev            # servidor de desenvolvimento em http://localhost:3000
pnpm build          # gera o site estático na pasta out/
pnpm lint           # verifica o código com ESLint
pnpm dlx serve out  # pré-visualiza o build (depois do pnpm build)
```

## Onde editar

| O quê                                                                     | Arquivo                                                                                         |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Textos de cada página                                                     | `src/content/home.ts`, `analise-de-agua.ts`, `tratamento-de-agua.ts`, `tratamento-de-esgoto.ts` |
| Telefone, WhatsApp, e-mail, CNPJ, redes sociais, cidades atendidas e menu | `src/config/site.ts`                                                                            |
| Cores e fontes (tokens do Tailwind)                                       | `src/app/globals.css`, bloco `@theme`                                                           |
| Imagens                                                                   | `public/images/`                                                                                |
| Favicon                                                                   | `src/app/icon.png` e `src/app/apple-icon.png`                                                   |

O link do WhatsApp é montado automaticamente a partir do número e da mensagem em `src/config/site.ts`.

As páginas de Tratamento de Água e de Esgoto usam o mesmo template (`src/components/ServicePage.tsx`). Para mudar o layout das duas, edite só esse arquivo.

## Publicação

O `pnpm build` gera a pasta `out/` com o site completo: HTML, CSS, JS, imagens, `sitemap.xml`, `robots.txt`, `404.html` e `.htaccess`.

### Hospedagem Apache (Hostinger, hospedagem compartilhada)

1. Faça um backup completo do WordPress atual (arquivos e banco de dados).
2. Rode `pnpm build`.
3. Envie **o conteúdo** da pasta `out/` para o `public_html` do domínio, por FTP ou pelo gerenciador de arquivos.
   - Inclua o arquivo oculto `.htaccess`. Ele configura a página 404 e o redirect 301 de `/analises-laboratoriais/` para `/analise-de-agua/`.
   - Nunca envie a pasta do código-fonte (`src/`, `node_modules/` etc.), só o conteúdo de `out/`.

As URLs terminam com barra (`/analise-de-agua/`), igual ao WordPress antigo, para preservar o SEO. Cada página vira `pasta/index.html`, o que funciona no Apache sem regras extras.

### Vercel

1. Importe o repositório na Vercel. Ela detecta o Next.js sozinha.
2. Com `output: "export"`, os redirects do `next.config.ts` não funcionam e o `.htaccess` é ignorado. Crie um `vercel.json` na raiz:

```json
{
  "redirects": [
    {
      "source": "/analises-laboratoriais",
      "destination": "/analise-de-agua/",
      "permanent": true
    },
    {
      "source": "/analises-laboratoriais/",
      "destination": "/analise-de-agua/",
      "permanent": true
    }
  ]
}
```

## Pendências para confirmar com o cliente

Alterações feitas em relação ao site antigo (marcadas com ⚠️ no código):

- ⚠️ "acessoria" foi corrigido para "assessoria" na descrição da empresa.
- ⚠️ O WhatsApp é **(12) 98285-8917**, mas o telefone exibido continua **(12) 99669-2001**. Os dois foram mantidos como estavam. Confirmar se o telefone ainda está ativo.
- ⚠️ A imagem `nature-image.jpg` da Home antiga não existe mais no backup. O hero usa `hero-home.png`.
- ⚠️ Os botões "Saiba mais" de Consultoria e Assessoria iam para `/contato`, que não existe mais. Agora levam ao WhatsApp.
- ⚠️ "Estamos há dois anos atuando..." virou "Estamos atuando ... desde 2019" (o texto era de 2021).
- ⚠️ Crase corrigida em "Apoio a sistemas de tratamento de esgotos".
- ⚠️ Vírgula removida em "Todo sistema de tratamento de esgotos deve estar...".
- ⚠️ O texto do Diagnóstico da página de esgoto repetia o da página de água. Foi adaptado para esgoto.
- ⚠️ A seção "Trabalhos realizados" foi removida, porque os números nunca foram preenchidos.
- ⚠️ Logo do rodapé: foi usado `branco_transparente.png`. O `fundo_branco_maior.png` sugerido originalmente tem fundo branco opaco e apareceria como um quadrado branco sobre o rodapé.
- ⚠️ Cores escurecidas para atender o contraste mínimo de acessibilidade (WCAG AA): texto `#808285` → `#5c5e61` e botões `#23a455` → `#187a3e`. O verde original continua nos detalhes e na faixa de chamada final.
- TODO: Missão, Visão e Valores vêm de um rascunho de outubro de 2020 que nunca foi publicado.

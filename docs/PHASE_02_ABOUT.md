# Fase 2 — Página "Sobre a Dra. Deyv"

## Objetivo

Criar `pages/sobre.html`, uma página de demonstração que apresenta a visão profissional da
Dra. Deyv, o significado de longevidade dentro da proposta do site, sua abordagem humana e
integrada, e uma estrutura preparada para receber futuramente biografia, experiência,
formações e registros oficiais. Esta página ainda é uma versão de demonstração — os dados
oficiais serão inseridos somente em uma fase final específica.

## Escopo

- Criação exclusiva de `pages/sobre.html`.
- Reutilização do cabeçalho, rodapé, navegação, botões, tipografia, cores, espaçamento, foco,
  menu móvel, toast do WhatsApp e `prefers-reduced-motion` já implementados na Fase 1.
- Expansão de `css/style.css` com novos componentes (hero interno/banner, destaque
  tipográfico, tags, lista numerada de valores, área de formação/experiência), sem redesenhar
  a identidade visual existente.
- Atualização pontual de `index.html`: o item de navegação "Dra. Deyv" passa a apontar para
  `pages/sobre.html`, e um link discreto "Conheça a Dra. Deyv →" foi adicionado à seção de
  apresentação da página inicial.
- Nenhuma outra página foi criada. Nenhuma funcionalidade fora do escopo (banco de dados,
  formulário, login, agenda, pagamento, chatbot, analytics) foi adicionada.

## Estrutura da página

1. Cabeçalho (reutilizado).
2. Hero interno — identificação, título, texto e banner provisório rosa.
3. Visão sobre longevidade — título, dois parágrafos e destaque tipográfico.
4. Abordagem humana e integrada — título, texto introdutório e 4 elementos (Escuta,
   Individualidade, Integração, Acompanhamento).
5. Trajetória multidisciplinar — imagem provisória amarela + texto + 4 tags de áreas gerais
   (Saúde, Nutrição, Movimento, Práticas integrativas).
6. Valores profissionais — lista numerada com 4 princípios, em formato editorial distinto dos
   cartões da página inicial.
7. Área preparada para formação e experiência — 3 categorias estruturais (Formação,
   Experiência, Atualização contínua), sem dados fictícios.
8. CTA final — fundo verde-escuro, reutilizando a configuração central do WhatsApp.
9. Rodapé (reutilizado, com caminhos relativos ajustados).

## Textos provisórios utilizados

Todos os textos seguem exatamente o conteúdo fornecido no prompt da Fase 2 (hero interno,
visão sobre longevidade, abordagem humana, trajetória, valores e formação/experiência). Nenhum
dado profissional foi inventado. Pontos que serão substituídos estão marcados com comentários
técnicos no código:

- `TODO final: substituir áreas gerais pela lista oficial de formações e qualificações da Dra. Deyv.`
- `TODO final: inserir somente dados oficiais fornecidos e aprovados pela Dra. Deyv.`
- `TODO: inserir registro profissional assim que validado` (herdado do rodapé da Fase 1).

## Placeholders criados

| Arquivo | Dimensão | Proporção | Cor | Uso |
|---|---|---|---|---|
| `assets/img/dra-deyv/sobre-hero-placeholder.svg` | 1600×700 | 16:7 | Rosa | Banner do hero interno |
| `assets/img/dra-deyv/trajetoria-placeholder.svg` | 1200×900 | 4:3 | Amarelo | Seção "Trajetória multidisciplinar" |

`assets/img/dra-deyv/formacao-placeholder.svg` (1200×800, 3:2, azul) **não foi criado**. A
seção "Formação e experiência" foi resolvida apenas com estrutura textual/iconográfica (3
categorias com ícone simples), o que já comunica visualmente a área preparada sem alongar a
página com mais um bloco de imagem grande — a página já contém 3 imagens coloridas (hero da
home, apresentação da Dra. Deyv e trajetória) mais o banner desta página. Adicionar uma quarta
imagem tornaria a rolagem mais longa sem ganho real de clareza nesta fase.

## Navegação entre páginas

- `index.html` → item de menu "Dra. Deyv" e link discreto "Conheça a Dra. Deyv →" abrem
  `pages/sobre.html`.
- `pages/sobre.html` → "Início" volta para `../index.html`; "Abordagem", "Atendimento online",
  "EvoLift" e "Redes sociais" apontam para as respectivas âncoras em `../index.html`; o item
  "Dra. Deyv" da própria página aponta para si mesma (`sobre.html`) e recebe
  `aria-current="page"`.
- O botão/link de WhatsApp em ambas as páginas usa a mesma configuração central definida uma
  única vez em `js/main.js` (nenhuma duplicação de lógica).

## Critérios de aceite

- Página abre sem erros e sem recursos 404.
- Apenas um `h1` na página, hierarquia de títulos correta.
- Navegação entre `index.html` e `pages/sobre.html` funcional nos dois sentidos.
- CTA do WhatsApp com comportamento provisório idêntico ao da página inicial.
- Responsiva nas larguras 375, 430, 768, 1024 e 1440px, sem rolagem horizontal.
- Nenhum dado profissional, número ou link fictício.
- Identidade visual (verde-floresta, dourado, marfim) preservada; cores rosa/amarelo/azul
  aparecem somente nos placeholders.

## Resultado da implementação

Implementação concluída conforme escopo. Ver `docs/PROJECT_STATE.md` para o registro detalhado
de arquivos criados/alterados e resultado dos testes.

## Estado da fase

Fase 2 implementada e aguardando revisão interna dos gestores do projeto, seguida de
apresentação à Dra. Deyv.

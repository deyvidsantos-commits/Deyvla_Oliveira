# Fase 6 — Página "Contato"

## Objetivo

Criar `pages/contato.html`, reunindo as formas de iniciar contato com a Dra. Deyv, com o
WhatsApp como canal principal, uma explicação simples de como começa o primeiro contato,
informações gerais sobre o atendimento online, perguntas frequentes, acesso às redes sociais e
um aviso claro para situações de urgência e emergência.

## Escopo

- Criação exclusiva de `pages/contato.html`. Nenhuma página individual de FAQ ou artigo foi
  criada.
- Padronização do menu global nas seis páginas (`index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html`, `pages/evolift.html`, `pages/conteudos.html`,
  `pages/contato.html`): substituição do item "Redes sociais" por "Contato", mantendo a ordem
  Início, Dra. Deyv, Acompanhamento, EvoLift, Conteúdos, Contato, WhatsApp.
- Expansão de `css/style.css` com três novos componentes reutilizáveis (`.channel-grid`/
  `.channel-card` para os canais de contato, `.steps-grid`/`.step-item` para as etapas do
  primeiro contato, `.faq-list`/`.faq-item` para a FAQ nativa em `<details>`), reaproveitando ao
  máximo padrões já existentes (`.pillar-icon`, `.section-link`, `.section-media-grid`,
  `.responsible-use-box`, `.social-grid`, `.section-final-cta`).
- Nenhuma outra página foi criada; nenhuma funcionalidade fora do escopo foi adicionada.

## Decisão de navegação

O item "Redes sociais" foi removido do menu global e substituído por "Contato", pois o menu já
possuía sete itens e precisava permanecer legível. As redes sociais não foram removidas do site:
continuam presentes na seção `#redes-sociais` de `index.html` (preservada sem alteração), na
página de Conteúdos e agora também na própria página de Contato. Essa decisão foi registrada
como D-015 em `docs/DECISION_LOG.md`.

## Estrutura da página

1. Cabeçalho (reutilizado, menu padronizado em 7 itens, "Contato" com `aria-current="page"`).
2. Hero interno — duas colunas (texto + CTA "Falar pelo WhatsApp" à esquerda; imagem rosa à
   direita), empilhando no mobile.
3. Formas de contato (`#canais`) — 3 cartões editoriais: WhatsApp (ação principal funcional),
   Redes sociais (âncora interna para `#redes-sociais`), Atendimento online (âncora interna para
   `#atendimento-online`).
4. Como funciona o primeiro contato (`#primeiro-contato`) — 3 etapas em formato compacto (linha
   superior dourada + número + título + texto), variação deliberadamente mais enxuta do que a
   grade de cartões da jornada em `pages/acompanhamento.html`.
5. Atendimento online (`id="atendimento-online"`) — composição imagem (amarelo) + texto.
6. Perguntas frequentes (`#perguntas-frequentes`) — 7 pares `<details>`/`<summary>` nativos, sem
   JavaScript de accordion.
7. Aviso de responsabilidade e emergência (`#responsabilidade`) — caixa discreta reutilizando
   `.responsible-use-box`.
8. Redes sociais (`id="redes-sociais"`) — mesmo padrão visual aprovado na página de Conteúdos
   (sem "em breve", sem URLs, sem aparência de link ativo).
9. CTA final (`#contato-final`) — faixa verde-escuro, reutilizando a configuração central do
   WhatsApp.
10. Rodapé (reutilizado, caminhos relativos ajustados). O rodapé não repete a navegação
    principal (não possui lista de páginas), portanto não foi alterado, conforme previsto no
    escopo.

## Textos provisórios utilizados

Todos os textos seguem exatamente o conteúdo fornecido no prompt da Fase 6. Nenhum dado
profissional, comercial ou clínico foi inventado. Um único comentário técnico invisível marca o
ponto reservado para dados oficiais do atendimento online:

- `TODO final: inserir locais atendidos, plataforma e detalhes oficiais do atendimento online.`

Os comentários `TODO final: inserir URL oficial do Instagram/Facebook/TikTok/YouTube` e
`TODO: inserir registro profissional assim que validado` foram herdados do padrão já usado nas
demais páginas do site.

## Perguntas frequentes utilizadas

1. O atendimento será online?
2. Como posso começar?
3. Como funciona o acompanhamento?
4. O EvoLift faz parte do acompanhamento?
5. Preciso frequentar uma academia?
6. Posso enviar informações clínicas pelo site?
7. O atendimento substitui serviços de urgência ou emergência?

Nenhuma pergunta sobre preços, planos, convênios, diagnósticos, prescrição, horários ou países
atendidos foi incluída.

## Placeholders criados

| Arquivo | Dimensão | Proporção | Cor | Uso |
|---|---|---|---|---|
| `assets/img/contato/contato-hero-placeholder.svg` | 1400×1000 | 7:5 | Rosa | Hero interno |
| `assets/img/contato/atendimento-online-placeholder.svg` | 1200×800 | 3:2 | Amarelo | Seção de atendimento online |

Ambos os SVGs são arquivos reais (não blocos de cor via CSS), referenciados por `<img>` com
`width`, `height`, `alt` coerente com o caráter provisório, e `decoding="async"` (o hero usa
`loading="eager"` por estar acima da dobra; o da seção de atendimento online usa
`loading="lazy"`).

## Limites respeitados

Nenhum formulário, agendamento, calendário, área do paciente, login, cadastro, integração com
API, chatbot, mapa foi criado. Nenhum endereço, telefone, e-mail, horário, preço, plano, prazo
de resposta, país/região sem confirmação, link social fictício ou QR Code foi adicionado. A FAQ
usa exclusivamente `<details>`/`<summary>` nativos, sem JavaScript dedicado. Nenhuma página
individual de FAQ ou artigo foi criada. A Fase 7 não foi iniciada.

## Testes

- Console sem erros originados pelo site nas seis páginas (`index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html`, `pages/evolift.html`, `pages/conteudos.html`,
  `pages/contato.html`).
- Todas as imagens de `pages/contato.html` retornaram HTTP 200 (verificado via `fetch`
  programático); nenhum recurso 404.
- Confirmado apenas um `h1` em `pages/contato.html` e nas demais páginas.
- FAQ testada: os 7 pares `<details>`/`<summary>` abrem e fecham corretamente tanto via clique
  real do mouse quanto via alternância programática do atributo `open`; foco visível herdado da
  regra global (`summary:focus-visible` adicionada a essa regra nesta fase).
- Navegação testada nas seis páginas: menu padronizado em 7 itens, com "Contato" apontando
  corretamente (`pages/contato.html` a partir da Home; `contato.html` a partir das páginas
  internas) e `aria-current="page"` correto somente em `pages/contato.html`; menu mobile testado
  (abre, exibe os 7 itens corretos, "Contato" em destaque dourado na própria página); CTA do
  WhatsApp testado em `pages/contato.html` — clique interceptado corretamente, aviso temporário
  exibido, sem `alert()`.
- Confirmado que `#atendimento-online` (em `pages/acompanhamento.html`) e `#redes-sociais` (em
  `index.html`) continuam existindo como seções, mesmo sem link direto no menu.
- **Responsividade testada tecnicamente nas 5 larguras pedidas (375, 430, 768, 1024, 1440px)**
  via iframe com largura controlada (mesma técnica e limitação já registradas nas fases
  anteriores). Confirmado, para cada largura, ausência de rolagem horizontal; `.channel-grid`
  e `.steps-grid` em 3 colunas a partir de 1024px, `.channel-grid` em 2 colunas e `.steps-grid`
  em 1 coluna entre 768–900px, ambas em 1 coluna abaixo de 900px; menu mobile ativo até 768px,
  menu completo em 1024/1440px.
- Regressão: `index.html`, `pages/sobre.html`, `pages/acompanhamento.html` e
  `pages/evolift.html` reabertos após as alterações compartilhadas de menu e CSS — todas
  continuam funcionando sem erros; confirmado que o diagrama de integração da página
  Acompanhamento (`grid-column: 2; grid-row: 2`) e a correção do `.progress-dot` (`display:
  block`) na página EvoLift permanecem corretos; `pages/conteudos.html` (`.content-grid`)
  verificada visualmente intacta.
- Busca no projeto confirmou ausência de números de telefone, e-mails, endereços, horários,
  preços, prazos de resposta, links sociais falsos, informações clínicas não autorizadas,
  texto de bastidor visível, "TODO" visível ou "Lorem ipsum".
- **Limitação:** mesma limitação já registrada nas fases anteriores — a ferramenta de
  redimensionamento de janela do navegador de automação não funciona neste ambiente (contornada
  com iframe de largura controlada), e capturas de tela apresentaram travamentos/atualizações em
  branco intermitentes neste ambiente — os pontos afetados foram confirmados por verificação
  programática (DOM/CSS computado) em vez de depender exclusivamente da captura visual.

## Pendências

Todos os dados oficiais (locais atendidos, plataforma do atendimento online, disponibilidade,
registro profissional, URLs oficiais das redes sociais, número de WhatsApp) continuam
reservados para a fase final, conforme D-013.

## Estado da fase

Fase 6 implementada e aguardando revisão interna dos gestores do projeto.

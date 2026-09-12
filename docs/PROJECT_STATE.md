# Project State — Site Dra. Deyv

**Atualizado em:** 12/09/2026  
**Fase atual:** Publicação no GitHub Pages (transversal; não é uma nova fase editorial)  
**Estado geral:** Fase 1 — aprovada internamente. Fase 2 — aprovada internamente. Fase 3 — aprovada internamente. Fase 4 — aprovada internamente. Fase 5 — aprovada internamente. Fase 6 — implementada e aguardando revisão interna. Revisão visual global — implementada e aguardando revisão interna. Correção nominal global — implementada e aguardando revisão interna. Melhoria visual pontual do menu global — implementada e aguardando revisão interna. Publicação no GitHub Pages — publicada e verificada.

## Publicação no GitHub Pages (12/09/2026)

### Repositório e branch

- Repositório público: `https://github.com/deyvidsantos-commits/Deyvla_Oliveira`
- Branch de publicação: `main`
- Commit publicado: `6cca5ae` (`6cca5ae36f9cbd054d8cadfd7530bf24051c2a2c`) —
  "feat: publish Dra. Deyvla institutional website"
- Data do commit/push: 12/09/2026

### GitHub Pages

- Origem configurada: branch `main`, diretório `/` (Deploy from a branch).
- Estado do build no momento da verificação: `built`.
- URL pública: `https://deyvidsantos-commits.github.io/Deyvla_Oliveira/`

### O que foi feito

- Verificação de segurança prévia: nenhum `.env`, token, senha, chave privada ou credencial
  encontrado no projeto; único falso positivo de busca textual foi a palavra "Token" em uma
  tabela de cores de `docs/DESIGN_SYSTEM.md`.
- Verificação nominal: número de WhatsApp, e-mail e nome oficial confirmados corretos; zero
  ocorrência de "Deyvli" ou de corrupção do tipo "Deyvlala"/"Deyvlaa" no código; as únicas
  ocorrências isoladas de "Dra. Deyv" remanescentes são as 5 já conhecidas e intencionalmente
  preservadas em `pages/acompanhamento.html` (4 comentários técnicos invisíveis + 1 parágrafo do
  CTA final), decisão herdada da atividade de correção nominal anterior — não foram alteradas
  nesta publicação por não se tratar de correção de nome autorizada nesta atividade.
- Revisão de caminhos para compatibilidade com GitHub Pages como Project Site
  (`/Deyvla_Oliveira/`): todos os caminhos já eram relativos ao documento; nenhuma correção foi
  necessária.
- Criados `.nojekyll` (vazio, na raiz) e `README.md` reescrito no formato solicitado, com o link
  público. `.gitignore` ampliado (`.env`, `.env.*`, `.idea/`, `dist/`, `coverage/`, mantendo os
  padrões já existentes).
- Git inicializado localmente (`git init -b main`), remote `origin` configurado para o
  repositório autorizado, commit único criado com os 49 arquivos do projeto (site + docs +
  assets), push para `origin/main`, GitHub Pages ativado via `gh api` e build confirmado como
  `built`.

### Testes

- Local (antes do commit): as seis páginas retornaram HTTP 200 em todos os recursos
  (CSS/JS/SVGs), console sem erros, fontes carregadas, menu desktop/mobile funcionais, sem
  rolagem horizontal em 375/768/1024/1440px.
- Público (depois da publicação): as seis URLs retornaram HTTP 200
  (`https://deyvidsantos-commits.github.io/Deyvla_Oliveira/` e as cinco subpáginas); console sem
  erros; nenhuma imagem com falha de carregamento; fonte Manrope confirmada via
  `getComputedStyle`; link "Início" testado com clique real a partir de `pages/contato.html`,
  retornando corretamente para `index.html` dentro do mesmo repositório; WhatsApp e e-mail
  confirmados com os valores oficiais.

### Pendências

Nenhuma pendência de publicação. Dados oficiais ainda não fornecidos (logomarca definitiva,
fotografias, CRM, RQE, especialidades, biografia, redes sociais, etc.) continuam reservados
para a fase final, conforme já registrado em `docs/CONTENT_REQUIREMENTS.md` e
`docs/GLOBAL_VISUAL_REFINEMENT.md`.

### Próxima ação recomendada

Validação da publicação pelos gestores do projeto e pela Dra. Deyvla. Nenhuma fase posterior foi
iniciada.

---

## Melhoria Visual Pontual do Menu Global (12/09/2026)

Ver `docs/GLOBAL_VISUAL_REFINEMENT.md` (seção "Melhoria Visual Pontual do Menu Global") para o
registro completo. Resumo:

### O que foi feito

- Divisórias verticais discretas (`1px`, `16px` de altura, branco a 22% de opacidade) entre os
  seis links comuns do menu desktop (Início, Dra. Deyvla, Acompanhamento, EvoLift, Conteúdos,
  Contato), via pseudo-elemento `::before` — ausentes antes do primeiro item, depois do último
  link comum e no botão de WhatsApp.
- Sublinhado dourado animado (`::after`, `180ms`) que cresce do centro para as laterais no hover
  e no foco por teclado dos links comuns, sem deslocar o cabeçalho.
- Item ativo (`aria-current="page"`) com sublinhado dourado permanente e mais espesso (3px),
  não dependente apenas da cor.
- Botão de WhatsApp preservado como elemento independente, com hover discreto adicional (tom
  mais claro, deslocamento de `-1px`, sombra suave) — sem sublinhado, sem divisória.
- Espaçamento do menu ampliado (`gap: 20px → 28px`) para acomodar as divisórias com conforto.
- Menu móvel sem divisórias e sem sublinhado animado; hover/foco com fundo sutil
  (`rgba(255,255,255,0.08)`); item ativo permanece dourado.
- `prefers-reduced-motion: reduce` respeitado (regra global já existente cobre o sublinhado;
  adicionada regra específica removendo o deslocamento do botão de WhatsApp nesse modo).

### Arquivos alterados

- `css/style.css` (único arquivo alterado — nenhum HTML ou JavaScript foi modificado).
- `docs/GLOBAL_VISUAL_REFINEMENT.md`, `docs/PROJECT_STATE.md` (este documento).

### Testes

- Responsividade testada nas 5 larguras (375/430/768/1024/1440px) × 6 páginas (30 combinações):
  sem rolagem horizontal; divisórias presentes somente quando o menu desktop está ativo, nunca
  junto com o menu móvel.
- Hover testado individualmente em "Acompanhamento", "Contato" e no botão de WhatsApp: sublinhado
  correto, sem cruzar divisórias; botão sem sublinhado.
- Item ativo confirmado com sublinhado permanente de 3px.
- Console sem erros nas seis páginas.
- Menu móvel confirmado sem divisórias/sublinhado, com item ativo dourado e abertura/fechamento
  preservados.

### Regressão

Nenhum texto, link, URL, nome, e-mail, WhatsApp, paleta, fonte, logo, conteúdo de página,
rodapé ou responsividade fora do cabeçalho foi alterado.

### Próxima ação recomendada

Revisão visual da melhoria pelos gestores do projeto. Nenhuma fase posterior foi iniciada.

---

## Correção Nominal Global (12/09/2026)

### Motivo

O nome completo registrado na atividade anterior ("Revisão Visual Global", ver entrada abaixo)
estava incorreto: `Dra. Deyvli Oliveira`. O nome oficial correto, fornecido pelos gestores do
projeto, é:

- Nome completo: **Dra. Deyvla Oliveira**
- Nome público: **Dra. Deyvla** (substitui o nome público anterior "Dra. Deyv")

O e-mail (`dra.deyv@gmail.com`) e o WhatsApp (`+55 81 9444-6101` / `558194446101`) não foram
alterados — já estavam corretos.

### O que foi feito

- Substituição contextual em ordem segura (`Dra. Deyvli Oliveira` → `Dra. Deyvla Oliveira`,
  depois `Dra. Deyvli` → `Dra. Deyvla`, depois `Dra. Deyv` isolado → `Dra. Deyvla`, usando
  limite de palavra para nunca corromper ocorrências já corrigidas) nas seis páginas HTML, em
  `js/main.js` (mensagem automática do WhatsApp e texto do aviso temporário) e nos SVGs
  provisórios que mencionavam o nome (logomarca, hero da Home, hero de Sobre, hero de Contato,
  apresentação da Dra. Deyvla).
- Menu global e rodapé das seis páginas atualizados para exibir "Dra. Deyvla".
- Em `pages/acompanhamento.html`, apenas os componentes globais e os metadados foram
  corrigidos (título, meta description, logomarca do cabeçalho e do rodapé, item de menu,
  rodapé, direitos reservados) — nenhum conteúdo editorial da página (introdução, situações,
  jornada, atendimento online, integração, EvoLift, expectativas, CTA, comentários técnicos)
  foi alterado, conforme escopo desta correção.
- Documentação atualizada com nota de correção, preservando o histórico da decisão anterior
  (D-016) sem reescrevê-lo: `docs/DECISION_LOG.md` (nova D-017),
  `docs/CONTENT_REQUIREMENTS.md` (seção 5 corrigida + nota),
  `docs/GLOBAL_VISUAL_REFINEMENT.md` (nota de correção no topo + nome corrigido no corpo do
  documento).

### Arquivos alterados

- `index.html`, `pages/sobre.html`, `pages/acompanhamento.html`, `pages/evolift.html`,
  `pages/conteudos.html`, `pages/contato.html`
- `js/main.js`
- `assets/img/logo/logo-placeholder.svg`, `assets/img/hero/dra-deyv-hero-placeholder.svg`,
  `assets/img/contato/contato-hero-placeholder.svg`,
  `assets/img/dra-deyv/sobre-hero-placeholder.svg`,
  `assets/img/dra-deyv/dra-deyv-sobre-placeholder.svg`
- `docs/DECISION_LOG.md`, `docs/CONTENT_REQUIREMENTS.md`, `docs/GLOBAL_VISUAL_REFINEMENT.md`,
  `docs/PROJECT_STATE.md` (este documento)

### Testes

- Busca completa no projeto confirmou: zero ocorrências de "Deyvli"; nenhuma ocorrência
  isolada de "Dra. Deyv" fora de "Dra. Deyvla", exceto os 5 pontos intencionalmente
  preservados em `pages/acompanhamento.html` (4 comentários técnicos invisíveis + o parágrafo
  do CTA final, ambos fora do escopo desta correção).
- Nenhuma ocorrência de corrupção do tipo "Deyvlala"/"Deyvlaa" em nenhum arquivo.
- Console sem erros nas seis páginas; nenhum recurso com 404; SVGs carregando normalmente.
- Menu desktop e mobile testados nas seis páginas: "Dra. Deyvla" exibido corretamente, sem
  quebra de linha ou sobreposição, `aria-current` e funcionamento do menu móvel preservados.
- Links de WhatsApp confirmados nas seis páginas: mensagem automática corretamente codificada
  para "Olá, Dra. Deyvla. Gostaria de receber informações sobre o acompanhamento.", número,
  `target="_blank"` e `rel="noopener noreferrer"` inalterados.
- E-mail confirmado inalterado (`dra.deyv@gmail.com`).
- Regressão: conteúdo editorial de `pages/acompanhamento.html` confirmado idêntico ao anterior;
  nenhuma alteração visual, de paleta, tipografia, layout ou espaçamento em nenhuma página.

### Pendências

As mesmas já registradas em `docs/GLOBAL_VISUAL_REFINEMENT.md` e `docs/CONTENT_REQUIREMENTS.md`
(logomarca oficial, fotografias, CRM, RQE, especialidades, biografia, formação, localização,
horários, preços, redes sociais oficiais, políticas jurídicas).

### Próxima ação recomendada

Revisão interna da correção nominal pelos gestores do projeto. Nenhuma fase posterior foi
iniciada.

---

## Revisão Visual Global e Ativação de Dados Oficiais (12/09/2026)

Ver `docs/GLOBAL_VISUAL_REFINEMENT.md` para o registro completo. Resumo:

### O que foi feito

- Nova direção tipográfica: Manrope (principal) + Titillium Web (apoio), carregadas via
  Google Fonts com `preconnect`.
- Paleta centralizada em `:root` (`css/style.css`): verde institucional preservado
  (`--color-primary: #0D3024`), novo `--color-primary-deep` (CTA/menu móvel), branco como
  fundo padrão, cinza quente (`#F5F4F2`) como fundo das seções alternadas.
- Cabeçalho com fundo verde, navegação branca, item ativo dourado, botão de WhatsApp dourado
  com texto verde profundo (corrigindo contraste verde-sobre-verde).
- Cards (`.pillar-card`, `.journey-step`, `.channel-card`, `.faq-item`,
  `.responsible-use-box`) com fundo branco, borda neutra e sombra discreta.
- Botões com cantos arredondados moderados (10px, antes 999px).
- Dados oficiais ativados: nome completo (Dra. Deyvli Oliveira, em contextos formais),
  e-mail (`dra.deyv@gmail.com`) e WhatsApp (`+55 81 9444-6101`), este último substituindo o
  placeholder em `js/main.js` e ativando o comportamento real em todos os botões
  `[data-whatsapp]` das seis páginas.
- Novo canal de e-mail na página de Contato (4 cards: WhatsApp, E-mail, Redes sociais,
  Atendimento online).
- Rodapé das seis páginas com nome completo, e-mail, telefone (→ WhatsApp), navegação
  essencial e aviso informativo curto.

### Arquivos alterados

- `css/style.css`, `js/main.js`
- `index.html`, `pages/sobre.html`, `pages/acompanhamento.html`, `pages/evolift.html`,
  `pages/conteudos.html`, `pages/contato.html`
- `docs/GLOBAL_VISUAL_REFINEMENT.md` (novo), `docs/DESIGN_SYSTEM.md`,
  `docs/CONTENT_REQUIREMENTS.md`, `docs/DECISION_LOG.md` (D-016), `docs/ROADMAP.md`

### Testes

- Console sem erros nas seis páginas; balanceamento de chaves do CSS verificado
  programaticamente.
- Links de WhatsApp confirmados nas seis páginas: `https://wa.me/558194446101` com mensagem
  corretamente codificada, `target="_blank"`, `rel="noopener noreferrer"`.
- Responsividade testada nas 5 larguras (375/430/768/1024/1440px) × 6 páginas (30 combinações):
  sem rolagem horizontal, um único `h1` em cada caso; `.channel-grid` da página Contato em 4
  colunas a partir de 1024px, sem quebra com o novo card de e-mail.
- Contraste verificado matematicamente para as novas combinações de cor — todas acima do
  mínimo AA (4.5:1).
- Regressão: diagrama de integração (Fase 3), correção do `.progress-dot` (Fase 4) e
  `.content-grid` (Fase 5) confirmados intactos.
- Busca no projeto: nenhum número/e-mail/link fictício remanescente, nenhum "TODO" visível,
  nenhum "Lorem ipsum".

### Pendências

Arquivo oficial da logomarca, fotografias profissionais, CRM, RQE, especialidades oficiais,
biografia definitiva, formação, experiência, localização, horários, preços, detalhes exatos do
atendimento, Instagram, Facebook, TikTok, YouTube e políticas jurídicas definitivas.

### Próxima ação recomendada

Revisão interna da revisão visual pelos gestores do projeto. Fase 7 permanece não iniciada.

---

## Fase 6 — Implementação (12/09/2026)

### Página criada

- `pages/contato.html`, com as 10 seções previstas: cabeçalho, hero interno (duas colunas, com
  CTA "Falar pelo WhatsApp"), formas de contato (3 cartões: WhatsApp, Redes sociais, Atendimento
  online), como funciona o primeiro contato (3 etapas compactas), atendimento online
  (`#atendimento-online`), perguntas frequentes (7 pares `<details>`/`<summary>` nativos), aviso
  de responsabilidade e emergência (caixa discreta), redes sociais (`#redes-sociais`), CTA final
  e rodapé.

### Menu global padronizado novamente (todas as páginas)

- O item "Redes sociais" foi substituído por "Contato" nas seis páginas
  (`index.html`, `pages/sobre.html`, `pages/acompanhamento.html`, `pages/evolift.html`,
  `pages/conteudos.html`, `pages/contato.html`), mantendo 7 itens: Início, Dra. Deyv,
  Acompanhamento, EvoLift, Conteúdos, Contato, WhatsApp.
- As seções de redes sociais não foram removidas: `#redes-sociais` em `index.html` e em
  `pages/conteudos.html` permanecem intactas; `pages/contato.html` recebeu sua própria seção
  `#redes-sociais`, reutilizando o padrão visual (sem "em breve", sem URLs, sem aparência de
  link ativo).
- `pages/contato.html` recebeu `aria-current="page"` no item "Contato"; as demais páginas
  passaram a apontar "Contato" para `pages/contato.html`/`contato.html`.

### Arquivos criados

- `pages/contato.html`
- `assets/img/contato/contato-hero-placeholder.svg`
- `assets/img/contato/atendimento-online-placeholder.svg`
- `docs/PHASE_06_CONTATO.md`

### Arquivos alterados

- `index.html`, `pages/sobre.html`, `pages/acompanhamento.html`, `pages/evolift.html`,
  `pages/conteudos.html` — menu padronizado (item "Redes sociais" → "Contato").
- `css/style.css` — novos componentes reutilizáveis: `.channel-grid`/`.channel-card` (canais de
  contato), `.steps-grid`/`.step-item` (etapas do primeiro contato, variação compacta da
  jornada), `.faq-list`/`.faq-item` (FAQ nativa em `<details>`), `summary:focus-visible`
  adicionado à regra global de foco visível, e regras responsivas correspondentes.
- `docs/ROADMAP.md`, `docs/PROJECT_STATE.md`, `docs/DECISION_LOG.md`.

### Testes

- Console sem erros originados pelo site nas seis páginas.
- Todas as imagens de `pages/contato.html` verificadas via `fetch` programático: HTTP 200, sem
  recursos 404.
- Confirmado apenas um `h1` em `pages/contato.html`.
- FAQ testada: os 7 pares `<details>`/`<summary>` abrem e fecham corretamente (clique real do
  mouse e alternância programática), sem JavaScript dedicado.
- Navegação testada nas seis páginas: menu padronizado, "Contato" com `aria-current="page"`
  apenas em `pages/contato.html`, menu mobile com os 7 itens corretos, CTA do WhatsApp
  interceptado corretamente com aviso temporário exibido.
- **Responsividade testada tecnicamente nas 5 larguras pedidas (375, 430, 768, 1024, 1440px)**
  via iframe com largura controlada (mesma técnica e limitação já registradas nas fases
  anteriores). Confirmado, para cada largura, ausência de rolagem horizontal;
  `.channel-grid`/`.steps-grid` em 3 colunas a partir de 1024px, 2/1 colunas entre 768–900px, 1
  coluna abaixo de 900px; menu mobile ativo até 768px.
- Regressão: `index.html`, `pages/sobre.html`, `pages/acompanhamento.html`,
  `pages/evolift.html` e `pages/conteudos.html` reabertos após as alterações compartilhadas de
  menu e CSS — todas continuam funcionando sem erros; confirmado que o diagrama de integração
  da página Acompanhamento (`grid-column: 2; grid-row: 2`) e a correção do `.progress-dot`
  (`display: block`) na página EvoLift permanecem corretos.
- Busca no projeto confirmou ausência de telefones, e-mails, endereços, horários, preços,
  prazos de resposta, links sociais falsos, conteúdo clínico não autorizado, "TODO" visível ou
  "Lorem ipsum".
- **Limitação:** mesma limitação já registrada nas fases anteriores — redimensionamento nativo
  de janela não funciona neste ambiente; capturas de tela apresentaram travamentos/atualizações
  em branco intermitentes, contornados com verificação programática (DOM/CSS computado).

### Conteúdo que continua pendente da Dra. Deyv

- Locais atendidos, plataforma, disponibilidade e detalhes do atendimento online; registro
  profissional; URLs oficiais das redes sociais; número oficial do WhatsApp — adiados para a
  fase final por decisão D-013.

### Próxima ação recomendada

Revisão interna da Fase 6 pelos gestores do projeto. Fase 7 (revisão final e publicação)
permanece não iniciada e não autorizada.

---

## Fase 5 — Implementação (12/09/2026)

### Página criada

- `pages/conteudos.html`, com as 10 seções previstas: cabeçalho, hero interno (sem CTA), 
  introdução editorial, temas principais (lista editorial de 5 itens, sem aparência clicável),
  conteúdo em destaque (pré-visualização editorial única), grade de 6 pautas futuras (cartões
  minimalistas, sem links/datas/autor), aviso de responsabilidade (caixa discreta), redes
  sociais (sem "em breve", sem links fictícios), CTA final e rodapé.

### Menu global padronizado (todas as páginas)

- Menu reduzido a 7 itens em `index.html`, `pages/sobre.html`, `pages/acompanhamento.html`,
  `pages/evolift.html` e `pages/conteudos.html`: Início, Dra. Deyv, Acompanhamento, EvoLift,
  Conteúdos, Redes sociais, WhatsApp.
- Item "Atendimento online" removido do menu global nas quatro páginas existentes. A seção
  `#atendimento-online` permanece integralmente em `pages/acompanhamento.html` (nenhum conteúdo
  removido, apenas o link do menu).
- `index.html`: adicionado link discreto "Ver conteúdos →" em nova seção `#conteudos-home`,
  entre "Redes sociais" e o CTA final; hero da Home não foi tocado.

### Arquivos criados

- `pages/conteudos.html`
- `assets/img/conteudos/conteudos-hero-placeholder.svg`
- `assets/img/conteudos/destaque-longevidade-placeholder.svg`
- `assets/img/conteudos/conteudo-movimento-placeholder.svg`
- `assets/img/conteudos/conteudo-alimentacao-placeholder.svg`
- `assets/img/conteudos/conteudo-longevidade-placeholder.svg`
- `docs/PHASE_05_CONTEUDOS.md`

### Arquivos alterados

- `index.html` — menu padronizado; nova seção `#conteudos-home`.
- `pages/sobre.html` — menu padronizado.
- `pages/acompanhamento.html` — menu padronizado (seção `#atendimento-online` preservada).
- `pages/evolift.html` — menu padronizado.
- `css/style.css` — novos componentes reutilizáveis: `.section-media-2-1` (modificador de
  proporção), `.value-item .pillar-icon` (ajuste para reaproveitar `.values-list` com ícone em
  vez de número), `.content-grid`/`.content-card` (grade editorial de 3 colunas) e regras
  responsivas correspondentes (2 colunas em ≤900px, 1 coluna em ≤560px).
- `docs/ROADMAP.md`, `docs/PROJECT_STATE.md`

### Testes

- Console sem erros originados pelo site em `index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html`, `pages/evolift.html` e `pages/conteudos.html`.
- Confirmado apenas um `h1` em todas as cinco páginas.
- Navegação testada nas cinco páginas: menu padronizado, caminhos relativos corretos,
  `aria-current="page"` correto em cada página, menu mobile com os 7 itens corretos (sem
  "Atendimento online"), link discreto "Ver conteúdos →" da Home funcional.
- CTA do WhatsApp testado em `pages/conteudos.html`: mesma configuração central, clique
  interceptado corretamente, aviso temporário exibido.
- **Responsividade testada tecnicamente nas 5 larguras pedidas (375, 430, 768, 1024, 1440px)**
  via iframe com largura controlada (mesma técnica e limitação já registradas nas fases
  anteriores). Confirmado, para cada largura, ausência de rolagem horizontal; visualmente: a
  375/430px hero, temas, destaque e grade de pautas empilham em coluna única; a 768px a grade
  de pautas usa 2 colunas e o menu móvel permanece ativo; a 1024/1440px o menu completo aparece
  em uma linha e a grade de pautas exibe 3 colunas.
- Regressão: `index.html`, `pages/sobre.html`, `pages/acompanhamento.html` e
  `pages/evolift.html` reabertos após as alterações compartilhadas de menu e CSS — todas
  continuam funcionando sem erros; confirmado que o diagrama de integração da página
  Acompanhamento (`grid-column: 2; grid-row: 2`) e a correção do `.progress-dot` (`display:
  block`) na página EvoLift permanecem corretos.
- **Limitação:** mesma limitação já registrada nas fases anteriores — a ferramenta de
  redimensionamento de janela do navegador de automação não funciona neste ambiente, e o foco
  programático não ativa `:focus` neste sandbox.

### Conteúdo que continua pendente da Dra. Deyv

- Artigos completos, credenciais, especialidades, citações atribuídas à médica, estudos,
  participações em eventos, livros, entrevistas já publicados, perfis e URLs oficiais das redes
  sociais — adiados para a fase final por decisão D-013.
- Páginas individuais de artigo — não iniciadas, dependentes de aprovação futura.

### Próxima ação recomendada

Revisão interna da Fase 5 pelos gestores do projeto. Fase 6 (página "Contacto e dúvidas")
permanece não iniciada e não autorizada.

---

## Fase 4 — Correção visual pontual (11/09/2026)

### Problema corrigido

Na seção "A evolução acontece passo a passo." (`pages/evolift.html`), a linha dourada
horizontal do caminho de progresso atravessava visualmente os títulos "Início", "Continuidade"
e "Evolução". Causa: `.progress-dot` é um `<span>` sem `display` definido (padrão `inline`), o
que fazia o navegador ignorar `width`/`height`/`margin-bottom` do marcador, eliminando o espaço
que deveria separar o marcador do título.

### Correção aplicada

- `.progress-dot` passou a ter `display: block;`, restaurando o dimensionamento e o espaçamento
  corretos do marcador.
- `.progress-path { margin-top }` reduzido de `40px` para `32px`, alinhando o espaçamento entre
  o placeholder e a linha temporal ao padrão já usado em outras grades do site.

Nenhum outro elemento foi alterado: placeholder, título da seção, texto introdutório e conteúdo
dos três momentos permanecem exatamente como estavam.

### Arquivos alterados

- `css/style.css`
- `docs/PHASE_04_EVOLIFT.md`

### Testes

- Balanceamento de chaves do CSS verificado programaticamente.
- Console sem erros originados pelo site em `pages/evolift.html`.
- Confirmado visualmente no desktop: linha atrás dos marcadores, sem tocar títulos/descrições.
- Testado nas 5 larguras (375, 430, 768, 1024, 1440px) via iframe: sem rolagem horizontal;
  composição vertical sem linha em ≤768px (comportamento já existente, preservado); linha
  horizontal corretamente posicionada em 1024/1440px.
- Regressão: `index.html`, `pages/sobre.html` e `pages/acompanhamento.html` reabertos sem erros
  de console; as classes alteradas são exclusivas da página EvoLift.

### Próxima ação recomendada

Validação visual final da correção pelos gestores do projeto.

---

## Fase 4 — Implementação (11/09/2026)

### Página criada

- `pages/evolift.html`, com as 11 seções previstas: cabeçalho, hero interno, apresentação do
  EvoLift (com moldura de telemóvel em CSS puro), benefícios para a organização (linhas
  divididas), funcionalidades confirmadas (grade com linha superior + imagem amarela), jornada
  de utilização (linha vertical editorial), evolução ao longo do tempo (caminho de progresso +
  imagem azul-claro), relação entre Dra. Deyv/paciente/EvoLift (diagrama de 3 nós em CSS puro),
  limites e uso responsável (caixa discreta), CTA final e rodapé.

### Arquivos alterados

- `index.html` — item de menu "EvoLift" agora aponta para `pages/evolift.html` (antes
  `#evolift`); adicionado link discreto "Conheça o papel do EvoLift →" na seção EvoLift
  (preservada, sem remoção de conteúdo).
- `pages/sobre.html` — item de menu "EvoLift" agora aponta para `evolift.html` (antes
  `../index.html#evolift`).
- `pages/acompanhamento.html` — item de menu "EvoLift" agora aponta para `evolift.html` (antes
  `#evolift`); adicionado link discreto "Saiba mais sobre o EvoLift →" na seção EvoLift
  (preservada).
- `css/style.css` — novos componentes reutilizáveis: `.section-media-14-9` (modificador de
  proporção), `.phone-frame` (moldura de telemóvel via CSS puro), `.benefit-row`/`.benefit-item`
  (linhas divididas), `.feature-grid`/`.feature-item` (grade com linha superior),
  `.timeline`/`.timeline-step` (linha vertical editorial), `.progress-path`/`.progress-point`
  (caminho de progresso), `.relation-diagram`/`.relation-node` (diagrama de 3 nós, reutilizando
  `.integration-icon` e a regra compartilhada de `.integration-center`/`.integration-item`),
  `.responsible-use-box`, e regras responsivas correspondentes.

### Placeholders criados

- `assets/img/evolift/evolift-page-hero-placeholder.svg` — 1400×1000px, 7:5, azul, hero
  interno.
- `assets/img/evolift/evolift-mobile-placeholder.svg` — 750×1600px, ~15:32, rosa, mockup de
  telemóvel.
- `assets/img/evolift/evolift-features-placeholder.svg` — 1400×900px, 14:9, amarelo, seção de
  funcionalidades.
- `assets/img/evolift/evolift-progress-placeholder.svg` — 1400×900px, 14:9, azul-claro, seção
  de evolução.

### Navegação

Menu padronizado nas quatro páginas (Início, Dra. Deyv, Acompanhamento, Atendimento online,
EvoLift, Redes sociais, WhatsApp), com o item "EvoLift" agora apontando para
`pages/evolift.html` em todas elas e `aria-current="page"` correto em cada uma. Links discretos
adicionados na Home e na página Acompanhamento conforme especificado.

### Bug encontrado e corrigido

Durante a edição do CSS, uma substituição de texto acabou removendo acidentalmente a linha de
abertura do bloco `@media (max-width: 768px)` original (menu móvel, altura do cabeçalho),
deixando essas regras temporariamente fora de qualquer media query — o que teria quebrado o
menu móvel e o cabeçalho em todas as páginas do site. Identificado imediatamente ao reler o
arquivo (antes de qualquer teste no navegador) e corrigido restaurando a abertura do bloco;
balanceamento de chaves do CSS verificado programaticamente após a correção.

### Testes

- Servidor estático local (Node nativo); todos os recursos de `pages/evolift.html` (HTML, CSS,
  JS, 4 novos SVGs, SVG reutilizado da Home) retornaram HTTP 200.
- Console sem erros originados pelo site em `index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html` e `pages/evolift.html`.
- Confirmado apenas um `h1` nas quatro páginas; nenhuma frase de bastidor visível; comentários
  `TODO`/técnicos confirmados como invisíveis.
- Navegação testada entre as quatro páginas (menu, links discretos) e âncora
  `acompanhamento.html#atendimento-online` a partir da página EvoLift.
- CTA do WhatsApp testado em `pages/evolift.html`: mesma configuração central, clique
  interceptado corretamente, aviso temporário exibido.
- **Responsividade testada tecnicamente nas 5 larguras pedidas (375, 430, 768, 1024, 1440px)**
  via iframe com largura controlada (mesma técnica e limitação já registradas nas fases
  anteriores). Confirmado, para cada largura, ausência de rolagem horizontal; visualmente: a
  375/430px hero, moldura de telemóvel, benefícios, jornada e diagrama de relação empilham em
  coluna única; a 768px funcionalidades usa 2 colunas e o menu móvel permanece ativo; a
  1024/1440px o menu completo aparece em uma linha e o diagrama de relação exibe os 3 nós
  conectados horizontalmente.
- **Limitação:** mesma limitação já registrada nas fases anteriores — a ferramenta de
  redimensionamento de janela do navegador de automação não funciona neste ambiente, e o foco
  programático não ativa `:focus` neste sandbox.
- Regressão: Home, Sobre e Acompanhamento reabertas após as alterações compartilhadas de menu e
  CSS — todas continuam funcionando sem erros; verificado especificamente que o diagrama de
  integração da página Acompanhamento (que compartilha uma regra CSS com o novo diagrama de
  relação da página EvoLift) permanece correto.

### Conteúdo que continua pendente da Dra. Deyv

- Forma exata de acesso ao EvoLift (planos, preços, disponibilidade), registros profissionais,
  processo clínico definitivo, países atendidos, políticas comerciais e imagens autorizadas do
  aplicativo — adiados para a fase final por decisão D-013.

### Próxima ação recomendada

Revisão interna da Fase 4 pelos gestores do projeto. Próxima fase de página (Fase 5 —
Conteúdos, opcional) permanece não iniciada e não autorizada.

---

## Fase 3 — Revisão pontual (11/09/2026)

### Ajustes realizados

- **Remoção de textos de bastidor:** três frases visíveis (na Introdução, na Jornada e no
  Atendimento online) que soavam como notas técnicas internas foram substituídas por textos
  naturais e integrados, mantendo/adicionando comentários `TODO final` invisíveis no código.
  No Atendimento online, os dois parágrafos foram unificados em um texto fluido, sem repetição.
- **Diagrama "Diferentes áreas, uma visão conectada" ampliado:** diagrama maior (640px→780px),
  elementos mais próximos, círculos maiores (48px→64px; centro com destaque em 80px e fundo
  dourado), ícones mais legíveis, linhas de conexão discretas em CSS puro (sem SVG externo, sem
  JavaScript) confinadas à região central, e espaçamento vertical da seção reduzido
  moderadamente. No mobile, colapsa para lista vertical sem as linhas.
- **Seção "O que você pode esperar" em duas colunas:** título/introdução à esquerda, lista de 5
  compromissos à direita (desktop), aviso de urgência/emergência preservado abaixo ocupando a
  largura útil. Em mobile, uma coluna com a ordem título → lista → aviso.

### Arquivos alterados

- `pages/acompanhamento.html`
- `css/style.css`
- `docs/PHASE_03_ACCOMPANHAMENTO.md`

### Bug encontrado e corrigido

Durante a reorganização do CSS do diagrama, a regra de posicionamento do elemento central na
grade (`grid-column: 2; grid-row: 2;`) foi omitida por engano, fazendo "Visão conectada" aparecer
no canto superior esquerdo em vez do centro. Identificado via captura de tela e corrigido antes
da entrega.

### Testes

- Confirmado que as três frases de bastidor não aparecem mais na interface e que nenhum `TODO`
  é visível em nenhuma das três páginas.
- Diagrama testado nas 5 larguras (375/430/768/1024/1440px): sem sobreposição, sem rolagem
  horizontal; linhas visíveis e coerentes no desktop/tablet; colapso vertical limpo (sem linhas)
  no mobile.
- Seção de expectativas testada nas mesmas larguras: duas colunas a partir de ~900px, uma coluna
  abaixo disso; lista e aviso completos e na ordem correta em todos os casos.
- Console sem erros originados pelo site em `index.html`, `pages/sobre.html` e
  `pages/acompanhamento.html`; apenas um `h1` confirmado nas três.
- Regressão: Home e Sobre reabertas após as alterações compartilhadas de CSS — sem erros, sem
  alteração de conteúdo ou estrutura.
- Mesma limitação já registrada em fases anteriores: redimensionamento nativo de janela não
  funciona neste ambiente (testado via iframe); foco programático não ativa `:focus` neste
  sandbox.

### Próxima ação recomendada

Validação visual final da Fase 3 pelos gestores do projeto e, em seguida, apresentação à
Dra. Deyv.

---

## Fase 3 — Implementação (11/09/2026)

### Página criada

- `pages/acompanhamento.html`, com as 11 seções previstas: cabeçalho, hero interno (duas
  colunas), introdução ao acompanhamento, para quem é o acompanhamento (6 situações), jornada
  provisória (imagem + 6 etapas em grade), atendimento online, integração entre diferentes
  áreas (diagrama central em CSS puro), EvoLift, o que esperar do acompanhamento (5
  compromissos + nota discreta de segurança), CTA final e rodapé.

### Arquivos alterados

- `index.html` — item de menu "Abordagem" substituído por "Acompanhamento" (aponta para
  `pages/acompanhamento.html`); adicionado link discreto "Entenda como funciona o
  acompanhamento →" na seção de pilares (`#abordagem`, preservada sem remoção).
- `pages/sobre.html` — item de menu "Abordagem" substituído por "Acompanhamento" (aponta para
  `acompanhamento.html`).
- `css/style.css` — novos componentes reutilizáveis: `.section-media-7-5`/`.section-media-3-2`
  (modificadores de proporção), `.media-centered`, `.situations-grid`, `.journey-grid`/
  `.journey-step`/`.journey-number`, `.integration-diagram`/`.integration-center`/
  `.integration-item` (diagrama central sem JavaScript), `.commitment-list`/`.commitment-icon`,
  `.safety-note`, e regras responsivas correspondentes.

### Placeholders criados

- `assets/img/acompanhamento/acompanhamento-hero-placeholder.svg` — 1400×1000px, 7:5, azul,
  hero interno.
- `assets/img/acompanhamento/jornada-placeholder.svg` — 1200×800px, 3:2, rosa, apoio visual da
  jornada.
- `assets/img/acompanhamento/online-placeholder.svg` — 1200×800px, 3:2, amarelo, atendimento
  online (arquivo específico desta página, distinto do placeholder da Home).
- `assets/img/acompanhamento/evolift-acompanhamento-placeholder.svg` — 1200×900px, 4:3,
  azul-claro, seção EvoLift.

### Navegação

Menu padronizado nas três páginas (Início, Dra. Deyv, Acompanhamento, Atendimento online,
EvoLift, Redes sociais, WhatsApp), com `aria-current="page"` no item da página atual em cada
uma. Em `pages/acompanhamento.html`, "Atendimento online" e "EvoLift" apontam para as seções da
própria página (`#atendimento-online`, `#evolift`); "Redes sociais" aponta para
`../index.html#redes-sociais`. Link discreto adicionado na Home conforme especificado.

### Testes

- Servidor estático local (Node nativo); todos os recursos de `pages/acompanhamento.html`
  (HTML, CSS, JS, 4 novos SVGs, SVGs reutilizados) retornaram HTTP 200.
- Console do navegador sem erros originados do site em `pages/acompanhamento.html`,
  `pages/sobre.html` e `index.html` após as alterações (regressão verificada).
- Confirmado apenas um `h1` em `pages/acompanhamento.html`.
- **Bug encontrado e corrigido:** a lista da jornada (`<ol>`) exibia numeração nativa do
  navegador sobreposta ao número estilizado; corrigido com `list-style: none`.
- Navegação testada: item de menu e link discreto de `index.html` abrem
  `pages/acompanhamento.html`; navegação entre as três páginas (Home ↔ Sobre ↔ Acompanhamento)
  funcional; âncoras internas (`#atendimento-online`, `#evolift`) testadas com offset correto
  (~92px, sem cobertura pelo cabeçalho fixo).
- CTA do WhatsApp testado em `pages/acompanhamento.html`: mesma configuração central, clique
  interceptado corretamente, aviso temporário exibido.
- Menu mobile testado (abre, exibe item ativo em destaque dourado).
- Diagrama de integração confirmado como CSS puro (grid), sem JavaScript, colapsando para uma
  coluna vertical em telas pequenas.
- **Responsividade testada tecnicamente nas 5 larguras pedidas (375, 430, 768, 1024, 1440px)**
  via iframe com largura controlada (mesma técnica e limitação já registradas nas fases
  anteriores). Confirmado, para cada largura, ausência de rolagem horizontal; visualmente: a
  375/430px hero, grade de situações, jornada e diagrama de integração empilham em coluna
  única; a 768px a grade de situações usa 2 colunas e o menu móvel permanece ativo; a
  1024/1440px o menu completo aparece em uma linha e a jornada exibe 3 colunas.
- **Limitação:** mesma limitação já registrada nas fases anteriores — a ferramenta de
  redimensionamento de janela do navegador de automação não funciona neste ambiente, e o foco
  programático não ativa `:focus` neste sandbox.
- Regressão: Home e página Sobre verificadas após as alterações compartilhadas de menu e CSS —
  ambas continuam funcionando sem erros.

### Conteúdo que continua pendente da Dra. Deyv

- Todos os dados oficiais listados na Fase 3 (registros profissionais, especialidades,
  formação, biografia, processo definitivo de atendimento, duração, periodicidade, exames,
  valores, formas de pagamento, países/regiões atendidas, WhatsApp, redes sociais,
  fotografias) — adiados para a fase final por decisão D-013.

### Próxima ação recomendada

Revisão interna da Fase 3 pelos gestores do projeto. Próxima fase de página (Fase 4 —
EvoLift) permanece não iniciada e não autorizada.

---

## Fase 2 — Implementação (11/09/2026)

### Concluído

- Criada `pages/sobre.html` com as 9 seções previstas: cabeçalho, hero interno com banner,
  visão sobre longevidade, abordagem humana e integrada (4 elementos), trajetória
  multidisciplinar (imagem + 4 áreas de conhecimento), valores profissionais (lista numerada),
  área preparada para formação e experiência (3 categorias), CTA final e rodapé.
- Cabeçalho, rodapé, navegação, botões, toast do WhatsApp, menu móvel e
  `prefers-reduced-motion` reutilizados de `css/style.css` e `js/main.js` sem duplicação de
  lógica.
- `index.html`: item de menu "Dra. Deyv" agora aponta para `pages/sobre.html` (antes apontava
  para a âncora `#dra-deyv`); adicionado link discreto "Conheça a Dra. Deyv →" na seção de
  apresentação da página inicial.
- `css/style.css` expandido com novos componentes reutilizáveis: hero interno/banner
  (`.inner-hero`, `.banner-media`), destaque tipográfico (`.highlight-quote`), tags
  (`.tag-list`/`.tag`), lista numerada de valores (`.values-list`), área de formação
  (`.formation-grid`/`.formation-category`), link discreto (`.section-link`) e estado de
  navegação ativa (`[aria-current="page"]`).
- Registrada a decisão D-013 (dados oficiais somente na fase final) em
  `docs/DECISION_LOG.md`.

### Novo placeholder criado

- `assets/img/dra-deyv/sobre-hero-placeholder.svg` — 1600×700px, proporção 16:7, rosa,
  banner do hero interno da página Sobre.
- `assets/img/dra-deyv/trajetoria-placeholder.svg` — 1200×900px, proporção 4:3, amarelo,
  seção "Trajetória multidisciplinar".
- `assets/img/dra-deyv/formacao-placeholder.svg` **não foi criado** — decisão registrada em
  `docs/PHASE_02_ABOUT.md` (a seção de formação/experiência já é suficientemente clara apenas
  com estrutura textual/iconográfica, evitando alongar a página).

### Arquivos modificados

- `index.html`
- `css/style.css`

### Arquivos criados

- `pages/sobre.html`
- `assets/img/dra-deyv/sobre-hero-placeholder.svg`
- `assets/img/dra-deyv/trajetoria-placeholder.svg`
- `docs/PHASE_02_ABOUT.md`

### Testes

- Servidor estático local (Node nativo); todos os recursos de `pages/sobre.html` (HTML, CSS,
  JS, 2 novos SVGs, SVGs reutilizados) retornaram HTTP 200.
- Console do navegador sem erros originados do site em `pages/sobre.html` e em `index.html`
  após as alterações.
- Confirmado apenas um `h1` em `pages/sobre.html` e em `index.html`.
- Navegação testada nos dois sentidos: item de menu e link discreto de `index.html` abrem
  `pages/sobre.html`; item "Início" de `pages/sobre.html` volta para `../index.html`; itens
  "Abordagem", "Atendimento online", "EvoLift" e "Redes sociais" apontam corretamente para as
  âncoras em `../index.html`.
- CTA do WhatsApp testado em `pages/sobre.html`: mesma configuração central de
  `js/main.js`, clique interceptado corretamente e aviso temporário exibido (sem número
  fictício, sem `alert()`).
- Menu mobile testado em `pages/sobre.html` (abre, exibe item ativo em destaque dourado,
  fecha ao navegar).
- **Responsividade testada tecnicamente nas 5 larguras pedidas (375, 430, 768, 1024, 1440px)**
  via iframe com largura controlada (mesma técnica e mesma limitação da ferramenta de
  redimensionamento de janela já registradas nas fases anteriores). Confirmado, para cada
  largura, ausência de rolagem horizontal (`scrollWidth` = `clientWidth`) e, visualmente: a
  375/430px o hero interno, o menu móvel e a lista de valores empilham corretamente; a 768px a
  seção "Trajetória" empilha em coluna única e o menu móvel permanece ativo; a 1024/1440px o
  menu completo aparece em uma linha e a seção "Trajetória" exibe imagem e texto lado a lado.
- **Limitação:** mesma limitação já registrada nas fases anteriores — a ferramenta de
  redimensionamento de janela do navegador de automação não funciona neste ambiente, e o foco
  programático não ativa `:focus` neste sandbox (o CSS de foco visível não foi alterado nesta
  fase).

### Conteúdo que continua pendente da Dra. Deyv

- Todos os dados oficiais listados em D-013 (nome completo, registros, CRM/RQE,
  especialidades, formação acadêmica, cursos complementares, biografia definitiva, anos de
  experiência, locais de atendimento, WhatsApp, redes sociais, fotografias e informações
  definitivas do acompanhamento) — adiados para a fase final por decisão registrada.

### Próxima ação recomendada

Revisão interna da Fase 2 pelos gestores do projeto. Próxima fase de página (Fase 3 —
Acompanhamento) permanece não iniciada e não autorizada.

---

## Fase 1 — Revisão interna (11/09/2026)

### Ajustes executados

- Removida da interface visível a frase "Esta apresentação é provisória e será atualizada
  assim que as informações profissionais forem validadas." Substituída por um comentário
  técnico no código (`TODO: validar e substituir a apresentação após receber a biografia
  oficial da Dra. Deyv.`), que não aparece na página.
- Novo texto de apresentação da Dra. Deyv (conforme aprovado), sem especialidades, registros,
  anos de experiência ou qualquer credencial não confirmada.
- A seção "Dra. Deyv" passou a ser uma composição de duas colunas (texto + imagem), com o
  novo placeholder `assets/img/dra-deyv/dra-deyv-sobre-placeholder.svg`.
- Seção do EvoLift reposicionada: novo título ("Seu acompanhamento continua além da
  consulta"), novo texto principal, identificação secundária discreta ("Tecnologia de apoio:
  EvoLift") e aviso de que o EvoLift não substitui a consulta médica. A frase sobre ausência
  de integração técnica foi movida para comentário técnico no código (não aparece na
  interface).
- Redução moderada dos espaços verticais: a variável `--space-section` foi ajustada de
  `clamp(64px, 8vw, 120px)` para `clamp(48px, 6vw, 88px)`, reduzindo áreas vazias excessivas
  entre seções, preservando separação visual elegante.
- Logomarca provisória revisada: textos internos do SVG aumentados para legibilidade e altura
  de exibição no cabeçalho aumentada de 48px para 60px (desktop) / 48px (mobile), sem tornar o
  cabeçalho excessivamente alto.
- Adicionado `scroll-margin-top` (via variável `--header-height`) em todas as seções e no
  hero, para que o cabeçalho fixo (`sticky`) não cubra o início das seções ao navegar por
  âncora.

### Novo placeholder criado

- `assets/img/dra-deyv/dra-deyv-sobre-placeholder.svg` — 900×1100px, proporção ~9:11, cor
  azul-claro, usado na seção "Dra. Deyv". Deverá ser substituído pela futura foto de
  apresentação da Dra. Deyv.

### Arquivos modificados

- `index.html`
- `css/style.css`
- `assets/img/logo/logo-placeholder.svg`

### Testes

- Servidor estático local (Node nativo) reiniciado; todos os recursos (incluindo o novo SVG)
  retornaram HTTP 200.
- Console do navegador sem erros originados do site.
- Confirmado apenas um `h1` e todas as âncoras do menu correspondendo a `id`s existentes.
- Confirmado que nenhuma das frases proibidas ("Esta apresentação é provisória...", "Nesta
  fase, não existe integração...", "Conhecer o acompanhamento") aparece no HTML fora de
  comentários.
- `scroll-margin-top` testado programaticamente: ao navegar para `#atendimento-online` e
  `#evolift`, o topo da seção fica a ~92px do topo da viewport, alinhado à altura real do
  cabeçalho (~93px) — o cabeçalho não cobre o título da seção.
- Menu mobile testado (abrir, navegar, fechar automaticamente após clique em item) — funciona
  corretamente.
- CTA do WhatsApp retestado após as alterações: continua interceptando o clique e exibindo o
  aviso temporário, sem navegação para endereço inválido.
- **Responsividade testada tecnicamente nas 5 larguras pedidas (375, 430, 768, 1024, 1440px)**
  usando um iframe injetado via JavaScript com largura controlada (a ferramenta de
  redimensionamento de janela do navegador de automação não funciona neste ambiente — mesma
  limitação já registrada na revisão anterior). Para cada largura, confirmado via DOM
  (`scrollWidth` vs `clientWidth`) que não há rolagem horizontal, e via captura de tela que:
  a 375px e 430px o menu mobile abre, exibe os 7 itens de forma legível e fecha ao selecionar
  uma seção; a 768px o layout de duas colunas (EvoLift) empilha corretamente em uma coluna e o
  menu mobile permanece ativo; a 1024px e 1440px o menu completo aparece em uma linha sem
  ficar espremido, e os layouts de duas colunas (EvoLift, redes sociais em grade) aparecem
  lado a lado corretamente.
- **Limitação:** as capturas de tela foram obtidas via emulação por iframe (viewport real
  dentro da página), não por redimensionamento nativo da janela do navegador, devido à
  limitação da ferramenta de automação neste ambiente. O teste de estado de foco visível por
  teclado (`:focus-visible`) continua não confirmável visualmente pelo mesmo motivo já
  registrado (foco programático não ativa `:focus` neste sandbox); o CSS correspondente não
  foi alterado nesta revisão.

### Conteúdo que continua pendente da Dra. Deyv

- Número oficial do WhatsApp.
- URLs das redes sociais (Instagram, Facebook, TikTok, YouTube).
- Logomarca final.
- Fotografia principal, fotografia de apresentação e demais fotografias.
- Registro profissional (CRM/Ordem, RQE quando aplicável).
- Biografia validada e nomes definitivos dos pilares da abordagem.
- País/região de atendimento online.

### Próxima ação recomendada

Apresentação da versão revisada à Dra. Deyv e aos gestores do projeto.

---

## Fase 1 — Implementação (11/09/2026)

### Concluído

- `index.html` reescrito com as 9 seções exigidas: cabeçalho, hero, apresentação, pilares,
  atendimento online, EvoLift, redes sociais, CTA final e rodapé.
- `css/style.css` reescrito seguindo o Design System (verde-floresta, dourado, marfim),
  com componentes, responsividade e acessibilidade.
- `js/main.js` com configuração centralizada do WhatsApp, menu mobile acessível e ano
  dinâmico no rodapé.
- 4 imagens SVG provisórias criadas (rosa, amarelo, azul, azul-claro).

### Arquivos criados

- `assets/img/hero/dra-deyv-hero-placeholder.svg`
- `assets/img/hero/atendimento-online-placeholder.svg`
- `assets/img/evolift/evolift-placeholder.svg`
- `assets/img/logo/logo-placeholder.svg`

### Arquivos alterados

- `index.html`
- `css/style.css`
- `js/main.js`

### Conteúdo ainda pendente da Dra. Deyv

- Número oficial do WhatsApp.
- URLs das redes sociais (Instagram, Facebook, TikTok, YouTube).
- Logomarca final.
- Fotografia principal e demais fotografias.
- Registro profissional (CRM/Ordem, RQE quando aplicável).
- Biografia validada e nomes definitivos dos pilares da abordagem.
- País/região de atendimento online.

### Testes

- Servidor estático local (Node, módulo `http` nativo) usado para servir os arquivos.
- Todos os recursos referenciados (HTML, CSS, JS, 4 SVGs) retornaram HTTP 200; verificado
  também um caminho inexistente para confirmar 404 correto.
- Página aberta via Claude in Chrome: sem erros de console originados do site (apenas avisos
  de extensões do navegador, não relacionados ao código do projeto).
- Confirmado apenas um `h1` na página e que todos os `href="#..."` do menu correspondem a
  `id` existentes.
- CTA do WhatsApp testado: com número placeholder não configurado, o clique é interceptado
  (`preventDefault`), não navega para endereço inválido, e exibe um aviso curto e temporário
  ("O número de WhatsApp será configurado após validação da Dra. Deyv."), sem `alert()`.
- Lógica do menu mobile (toggle de classe `is-open` e `aria-expanded`) testada via disparo de
  clique programático: funciona corretamente.
- Navegação por âncora testada programaticamente (clique em link do menu rola até a seção
  correta).
- Ausência de rolagem horizontal confirmada em resolução desktop (1920px).
- Dois problemas visuais encontrados e corrigidos durante o teste: botão do CTA final ficava
  com baixo contraste (mesma cor do fundo da seção) e a logomarca do rodapé ficava ilegível
  devido a um filtro CSS de inversão de cor — ambos corrigidos.
- **Pendente/não testado:** verificação visual em larguras de tablet e telemóvel reais. A
  ferramenta de redimensionamento de janela do navegador de testes não conseguiu reduzir a
  janela (permaneceu em 1920×1080) neste ambiente. A responsividade foi construída e revisada
  via código (breakpoints em 1024px, 900px, 768px e 560px), mas não houve confirmação visual
  por screenshot em telas pequenas. Também não foi possível confirmar visualmente o estado de
  foco por teclado (`:focus`) via automação, pois o foco programático não ativa o
  pseudo-seletor `:focus` neste ambiente de automação — limitação do ambiente de teste, não do
  código (as regras `:focus-visible` com contorno dourado estão implementadas normalmente).
- Não foi testado em navegadores além do Chromium local.

### Próxima ação recomendada

Apresentação da versão à Dra. Deyv e aos gestores do projeto para validação de estilo,
organização, textos provisórios e definição do conteúdo pendente listado acima. Recomenda-se
também um teste manual de responsividade em dispositivo real ou DevTools antes da aprovação
final da Fase 1.

---

## Estado anterior (planeamento)

## Confirmado

- Nome de marca: Dra. Deyv.
- Posicionamento: Medicina da Longevidade.
- Atendimento principal: online.
- Site institucional sem banco de dados.
- Contacto principal por WhatsApp.
- Divulgação de redes sociais.
- EvoLift apresentado como apoio ao acompanhamento.
- Tecnologia atual: HTML, CSS e JavaScript.
- Identidade inicial: verde-escuro, dourado e elementos naturais.
- Um botão principal: `Agendar avaliação pelo WhatsApp`.
- Não utilizar o botão `Conhecer o acompanhamento`.
- Desenvolvimento executado pelo Claude.
- Gestão e decisões realizadas por Deyvid e ChatGPT/Codex.
- Cada nova página será tratada como uma fase.

## Estrutura informada pelo Claude

```text
Dra_Deyv/
├── index.html
├── css/style.css
├── js/main.js
├── pages/
├── assets/
│   ├── img/logo/
│   ├── img/hero/
│   ├── img/equipe/
│   ├── img/galeria/
│   ├── icons/
│   └── fonts/
├── README.md
└── .gitignore
```

## Pendente da Dra. Deyv

- Nome profissional completo.
- Local de registro e número profissional.
- Especialidades oficialmente registradas.
- Lista completa de cursos e formações.
- Biografia e história profissional.
- Público principal.
- Condições e objetivos acompanhados.
- Funcionamento e duração das consultas.
- Periodicidade do acompanhamento.
- Número oficial do WhatsApp.
- URLs das redes sociais.
- Fotografias profissionais.
- Forma exata de utilização do EvoLift.
- Países ou regiões onde poderá atender online.
- Informação sobre valores ou decisão de não os publicar.

## Bloqueios atuais

- Conteúdo profissional definitivo não disponível.
- Links de WhatsApp e redes sociais ainda não fornecidos.
- Fotografias finais ainda não fornecidas.
- Especialidades e títulos ainda não validados.

## Próxima ação

Enviar ao Claude um prompt restrito à Fase 1, utilizando conteúdo provisório claramente identificado e sem inventar credenciais, números, formações ou especialidades.


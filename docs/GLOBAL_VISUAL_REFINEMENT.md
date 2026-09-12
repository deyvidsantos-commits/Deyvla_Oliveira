# Revisão Visual Global e Ativação de Dados Oficiais

> **Nota de correção (12/09/2026):** o nome completo registrado originalmente neste documento
> (`Dra. Deyvli Oliveira`) estava incorreto. O nome oficial correto é **Dra. Deyvla Oliveira**
> (nome público **Dra. Deyvla**). O texto abaixo já reflete o nome corrigido; ver D-017 em
> `docs/DECISION_LOG.md` e a atividade "Correção Nominal Global" em `docs/PROJECT_STATE.md`
> para o registro completo da correção.

## Objetivo

Aprimorar a identidade visual das seis páginas existentes do site da Dra. Deyvla, evoluindo para
um estilo médico contemporâneo, elegante, acolhedor e editorial, coerente com a proposta de
medicina da longevidade — e ativar corretamente os primeiros canais oficiais confirmados
(WhatsApp e e-mail). Esta atividade não criou nenhuma página nova e não iniciou a Fase 7.

## Referência visual aplicada

O site `https://drapatriciamaba.com.br/` foi utilizado exclusivamente como referência de
direção visual (paleta em verde profundo/branco/cinza quente, tipografia moderna sem serifa,
blocos com bastante espaço, contraste elegante, aparência médica contemporânea). Nenhuma
estrutura, texto, imagem, marca, logotipo, componente específico ou código daquele site foi
copiado. A identidade verde da Dra. Deyvla (`#0D3024`, já estabelecida desde a Fase 1) foi
preservada como `--color-primary` e usada como base para os demais tons de verde.

## Princípios adotados

- Estilo médico, contemporâneo, elegante e acolhedor, sem excesso decorativo.
- Verde institucional preservado; branco e cinza quente como fundos alternados.
- Tipografia sem serifa (Manrope) como principal; Titillium Web apenas em identificadores
  curtos (sobretítulos, números de etapas, categorias).
- Cards com fundo branco, borda fina neutra e sombra muito discreta.
- Botões com cantos arredondados moderados (não mais em formato de pílula oval).

## Fontes

- **Manrope** (pesos 400/500/600/700) tornou-se `--font-heading` e `--font-body`, usada em
  títulos, subtítulos, textos, menus, botões, cards e FAQ.
- **Titillium Web** (pesos 400/600/700) tornou-se `--font-accent`, aplicada apenas a
  `.eyebrow` (sobretítulos), `.value-index`, `.journey-number` e `.step-number` (números de
  etapas/identificadores curtos).
- Ambas carregadas via Google Fonts com `<link rel="preconnect">` + `<link rel="stylesheet">`
  padronizado no `<head>` das seis páginas, com pilha de fallback segura
  (`"Manrope", "Segoe UI", Arial, sans-serif` e `"Titillium Web", "Segoe UI", Arial, sans-serif`).
  Nenhum `@import` no CSS; nenhum JavaScript de carregamento de fontes.
- A antiga combinação serifada (`Georgia, 'Times New Roman', serif`) foi removida das variáveis
  e não é mais referenciada por nenhum componente.

## Paleta

Centralizada em `:root` no início de `css/style.css`:

```css
--color-primary: #0D3024;        /* preservado — verde institucional da Dra. Deyvla */
--color-primary-hover: #145443;
--color-primary-soft: #1D4A39;   /* já existente, mantido para hovers de cartões */
--color-primary-deep: #062B22;   /* novo — CTA final e painel do menu móvel */

--color-background: #FFFFFF;
--color-surface: #FFFFFF;
--color-surface-soft: #F5F4F2;   /* cinza quente — fundo de seções alternadas */
--color-surface-warm: #EFEDE8;
--color-card: #FFFFFF;
--color-ivory: #FFFFFF;          /* redefinido para branco puro (texto sobre fundo escuro) */

--color-gold: #CFA451;           /* ajuste fino do dourado já usado desde a Fase 1 */
--color-accent: #CFA451;
--color-accent-soft: #E7D2A5;

--color-text: #26332F;
--color-text-soft: #66716D;
--color-muted: #66716D;          /* alias mantido por compatibilidade */
--color-border: #DEDED9;

--shadow-card: 0 2px 14px rgba(13, 48, 36, 0.06);
```

Nenhuma variável antiga foi removida — `--color-ivory` e `--color-muted` foram mantidas como
aliases para evitar uma refatoração ampla de todas as regras existentes que já as referenciam.

## Aplicação dos fundos

O ritmo alternado de fundos (branco → cinza quente → branco → cinza quente → CTA verde
profundo) já existia estruturalmente através das classes `.section`/`.alt-bg`, presentes em
todas as seis páginas desde as fases anteriores. A alternância foi obtida com uma troca mínima
de valores de variável, sem qualquer alteração de HTML ou da ordem das seções:

- `body { background: var(--color-background); }` (branco, era `--color-ivory` cor creme).
- `.alt-bg { background: var(--color-surface-soft); }` (cinza quente, era `--color-surface`
  branco).

O resultado foi conferido em todas as seis páginas: a alternância entre branco e cinza quente
é consistente e sem sequências extensas do mesmo tom, terminando sempre no CTA final em verde
profundo (`--color-primary-deep`).

## Alterações no cabeçalho

- `.site-header`: fundo `var(--color-primary)` (verde principal), borda inferior discreta
  `rgba(0,0,0,0.12)`.
- `.main-nav a`: branco suave (`rgba(255,255,255,0.85)`), hover branco puro, item ativo
  dourado com peso 700 (mantido).
- `.nav-whatsapp`: fundo dourado, texto verde profundo (`--color-primary-deep`), hover em
  dourado mais claro (`--color-accent-soft`) — corrigindo o problema de um botão verde sobre
  barra também verde.
- `.nav-toggle` e `.nav-toggle-icon`: bordas e barras em branco, para contraste sobre o novo
  fundo verde.
- Painel do menu móvel (`@media max-width: 768px`): fundo `var(--color-primary-deep)`, links
  brancos herdados da regra global, sem sobreposição.
- Preservados: menu móvel funcional, `aria-current="page"`, foco visível, navegação por
  teclado, sete itens do menu, caminhos relativos, comportamento em todas as páginas.

## Cards e botões

- `.pillar-card`, `.journey-step`, `.channel-card`, `.faq-item`, `.responsible-use-box`:
  fundo branco (`--color-card`), borda `var(--color-border)`, sombra muito discreta
  (`var(--shadow-card)`). Cartões com borda tracejada e semântica de "área reservada"
  (`.social-card`, `.formation-category`) foram mantidos como estavam, preservando o sinal
  visual de conteúdo ainda pendente.
- `.btn`: raio reduzido de `999px` (pílula) para `10px` (arredondado moderado, sem formato
  ovalado), peso 600 mantido, transições e foco visível preservados.
- CTA sobre fundo verde (`.section-final-cta .btn-primary`): já usava dourado com texto verde
  profundo — padrão preservado, apenas com o novo raio de borda.
- Ícones já seguiam o padrão "verde com detalhe dourado" (`.pillar-icon`, `.integration-icon`,
  etc. com fundo `--color-primary` e cor `--color-gold`) — nenhuma alteração foi necessária.

## Dados oficiais incluídos

Conforme fornecido:

- Nome completo: **Dra. Deyvla Oliveira** — usado em contextos formais: apresentação
  profissional (`index.html`), primeiro parágrafo de `pages/sobre.html`, card de e-mail e
  rodapé das seis páginas. O nome público "Dra. Deyv" (posteriormente corrigido para
  "Dra. Deyvla" — ver nota de correção) foi preservado no menu, nos
  títulos de seção e em textos correntes onde já era usado, conforme instruído (nenhuma
  substituição mecânica).
- E-mail: `dra.deyv@gmail.com` — ativado via `mailto:` no rodapé das seis páginas e em um
  novo card na página de Contato.
- WhatsApp: `+55 81 9444-6101` (número técnico `558194446101`) — ativado em todos os botões
  de WhatsApp do site e no rodapé (telefone clicável direcionando ao WhatsApp, não a `tel:`).
- Metadados (`<title>`/`<meta description>`) das seis páginas atualizados para usar o nome
  oficial, seguindo o padrão `{Página} | Dra. Deyvla Oliveira`.

## WhatsApp

`js/main.js`: `WHATSAPP_CONFIG.numero` atualizado para `"558194446101"` e `mensagem` para
`"Olá, Dra. Deyvla. Gostaria de receber informações sobre o acompanhamento."`. Como a função
`numeroConfigurado()` já validava o formato do número (`/^\d{8,15}$/`), o número oficial passou
a ser reconhecido como válido automaticamente — a interceptação provisória (que exibia o aviso
"número será configurado") deixou de ser acionada nesse caminho de código sem precisar remover
ou duplicar nenhuma lógica. Todos os botões `[data-whatsapp]` das seis páginas passaram a
receber, via JavaScript já existente, o link real (`https://wa.me/558194446101?text=...`),
`target="_blank"` e `rel="noopener noreferrer"`. Nenhuma alteração de texto visível dos botões
foi feita.

## E-mail

Em `pages/contato.html`, a seção "Escolha o canal mais adequado para você." foi reorganizada de
3 para 4 canais (WhatsApp, E-mail, Redes sociais, Atendimento online), na ordem especificada. O
novo card de E-mail usa o ícone de envelope (reutilizando o estilo `.pillar-icon`), título
"E-mail", o texto fornecido e o link `mailto:dra.deyv@gmail.com` com o próprio endereço como
texto visível. Sem promessa de prazo de resposta.

## Rodapé

Nas seis páginas, o rodapé passou a exibir, de forma discreta: nome completo (Dra. Deyvla
Oliveira), e-mail (`mailto:`), telefone (clicável, direcionando ao WhatsApp via `data-whatsapp`,
nunca `tel:`), uma nova coluna de navegação essencial (Início, Dra. Deyvla, Acompanhamento,
EvoLift, Conteúdos, Contato), o bloco de redes sociais e o botão de WhatsApp já existentes, um
aviso curto de caráter informativo ("Conteúdo de caráter geral e informativo. Não substitui
consulta médica.") e a linha de direitos reservados atualizada com o nome completo. Nenhum CRM,
RQE, endereço, especialidade oficial, horário, preço ou rede social ainda não confirmada foi
inserido.

## Arquivos alterados

- `css/style.css` — variáveis (paleta e fontes), cabeçalho, menu móvel, botões, cards
  (`.pillar-card`, `.journey-step`, `.channel-card`, `.faq-item`, `.responsible-use-box`),
  `.channel-grid` (3→4 colunas), CTA final, rodapé (`.footer-inner` 3→4 colunas, novas classes
  `.footer-direct-contact`/`.footer-nav-list`), tipografia (`h1`/`h2`/`h3`, `.eyebrow`,
  `.value-index`, `.journey-number`, `.step-number`), `summary:focus-visible` (preservado).
- `js/main.js` — `WHATSAPP_CONFIG` (número e mensagem oficiais).
- `index.html`, `pages/sobre.html`, `pages/acompanhamento.html`, `pages/evolift.html`,
  `pages/conteudos.html`, `pages/contato.html` — fontes no `<head>`, metadados, rodapé
  (nome completo, e-mail, telefone, navegação essencial, aviso, direitos reservados).
- `index.html` — primeira menção formal do nome completo na seção de apresentação.
- `pages/sobre.html` — primeira menção formal do nome completo na introdução da abordagem.
- `pages/contato.html` — novo card de e-mail no `.channel-grid` (4 canais).
- `docs/GLOBAL_VISUAL_REFINEMENT.md` (este documento), `docs/DESIGN_SYSTEM.md`,
  `docs/CONTENT_REQUIREMENTS.md`, `docs/PROJECT_STATE.md`, `docs/DECISION_LOG.md`,
  `docs/ROADMAP.md`.

## Testes

- Balanceamento de chaves do CSS verificado programaticamente após todas as edições.
- Console sem erros nas seis páginas.
- Fontes confirmadas via `getComputedStyle`: `body`/`h1` em Manrope, `.eyebrow` em Titillium
  Web.
- Links de WhatsApp verificados programaticamente nas seis páginas: todos apontam para
  `https://wa.me/558194446101` com a mensagem corretamente codificada
  (`Ol%C3%A1%2C%20Dra.%20Deyvla...`), `target="_blank"` e `rel="noopener noreferrer"`.
- Telefone do rodapé confirmado como link ativado por `data-whatsapp` (não `tel:`); e-mail do
  rodapé e do card confirmados como `mailto:dra.deyv@gmail.com`.
- Regressão: diagrama de integração da página Acompanhamento (`grid-column: 2; grid-row: 2`),
  correção do `.progress-dot` (`display: block`) na página EvoLift e grade de conteúdos
  (`.content-grid`) da página Conteúdos confirmados intactos.
- **Responsividade testada tecnicamente nas 5 larguras pedidas (375, 430, 768, 1024, 1440px)**
  nas seis páginas (30 combinações) via iframe com largura controlada (mesma técnica e
  limitação já registradas nas fases anteriores): sem rolagem horizontal e exatamente um `h1`
  em todos os casos. Confirmado especificamente: menu móvel com painel verde profundo e os 7
  itens corretos; `.channel-grid` da página Contato em 4 colunas a partir de 1024px, 2 colunas
  entre 768–900px e 1 coluna abaixo de 900px, sem quebra da grade com o novo card de e-mail.
- Contraste verificado matematicamente (fórmula de luminância relativa WCAG) para as novas
  combinações: branco sobre verde principal (14.33:1), dourado sobre verde principal — item
  ativo (6.20:1), texto verde profundo sobre dourado — botão WhatsApp (6.60:1), dourado sobre
  verde profundo — menu móvel (6.60:1), texto principal sobre branco (13.15:1), texto secundário
  sobre branco (5.06:1) e sobre cinza quente (4.61:1) — todas acima do mínimo AA (4.5:1) para
  texto normal.
- Busca no projeto confirmou: nenhum número de telefone antigo ou fictício remanescente,
  nenhuma URL provisória de WhatsApp, todos os `href="#"` restantes pertencem exclusivamente a
  botões `[data-whatsapp]` (substituídos em tempo de execução pelo `js/main.js`, mesmo padrão
  usado desde a Fase 1), nenhum "TODO" visível fora de comentários, nenhum "Lorem ipsum".

## Melhoria Visual Pontual do Menu Global (12/09/2026)

Aprimorada a separação e a interação visual entre os itens do menu desktop compartilhado pelas
seis páginas, inspirada apenas na organização visual de uma referência externa (divisórias,
sublinhado animado, destaque de item ativo) — sem copiar literalmente nenhum menu. Nenhum
texto, URL ou estrutura editorial foi alterado; a alteração ficou inteiramente restrita a
`css/style.css`.

### Divisórias

Divisórias verticais finas (`1px`, `16px` de altura, `rgba(255,255,255,0.22)`, centralizadas)
adicionadas via pseudo-elemento `::before` em `.main-nav li:not(:first-child):not(:last-child)`
— aparecem apenas entre os seis links comuns (Início, Dra. Deyvla, Acompanhamento, EvoLift,
Conteúdos, Contato), nunca antes do primeiro item, nunca depois do último link comum e nunca
dentro ou antes do botão de WhatsApp (último `<li>`, explicitamente excluído pela seletor
`:not(:last-child)`). O espaçamento do menu (`.main-nav ul`) foi ampliado de `20px` para `28px`
para acomodar as divisórias sem apertar os itens.

### Sublinhado animado (hover/foco)

Adicionado um sublinhado dourado (`var(--color-gold)`) via `::after` em
`.main-nav a:not(.nav-whatsapp)` — nasce com `width: 0` centralizado e cresce para `100%` em
`180ms` no hover e no foco por teclado (`:focus-visible`), sem deslocar o cabeçalho ou outros
itens (posicionamento absoluto) e sem cruzar as divisórias (a largura do sublinhado é limitada
à própria largura do link). O botão de WhatsApp (`.nav-whatsapp`) foi explicitamente excluído
dessa regra.

### Item ativo

O link com `aria-current="page"` mantém o sublinhado dourado permanentemente visível, com
espessura maior (`3px`, contra `2px` do hover), independente do mouse — o destaque não depende
apenas da cor. Confirmado `aria-current="page"` correto nas seis páginas (inalterado nesta
atividade).

### Botão WhatsApp

Preservado como elemento independente (fundo dourado, texto verde profundo, link real, número e
mensagem inalterados, nova aba, `rel="noopener noreferrer"`). Adicionado apenas um hover
discreto: tom dourado mais claro (`var(--color-accent-soft)`, já existente), deslocamento
vertical de `-1px` e sombra suave (`0 4px 10px rgba(6, 43, 34, 0.25)`). Nenhum sublinhado e
nenhuma divisória foram aplicados ao botão.

### Comportamento mobile

No menu móvel (`@media max-width: 768px`), as divisórias e o sublinhado animado foram
explicitamente ocultados (`display: none`), substituídos por um destaque de fundo sutil
(`rgba(255,255,255,0.08)` com `border-radius: 8px`) no hover/foco dos links comuns. O item ativo
continua dourado. A abertura/fechamento do menu móvel (`js/main.js`) não foi tocada.

### Movimento reduzido

A regra global já existente `@media (prefers-reduced-motion: reduce)` (que zera
`transition-duration`/`animation-duration` via `*`) já elimina a animação do sublinhado sem
alteração adicional. Foi acrescentada apenas uma regra específica removendo o deslocamento
vertical do botão de WhatsApp no hover (`transform: none`) nesse modo, já que uma transformação
sem transição ainda constitui um deslocamento visual instantâneo.

### Testes

- Verificado programaticamente nas seis páginas × 5 larguras (375/430/768/1024/1440px — 30
  combinações): sem rolagem horizontal em nenhum caso; divisórias presentes se e somente se o
  menu desktop estiver ativo (nenhuma combinação com divisórias visíveis e menu móvel ativo ao
  mesmo tempo, nem o inverso).
- Hover testado individualmente (via `hover` real do cursor) em "Acompanhamento", "Contato" e no
  botão de WhatsApp: sublinhado dourado cresce corretamente sob os links comuns sem tocar as
  divisórias; o botão de WhatsApp exibe o tom mais claro e a sombra, sem sublinhado.
- Item ativo confirmado com sublinhado permanente de `3px` em `index.html` (`Início`).
- Console sem erros nas seis páginas; nenhuma quebra de layout observada.
- **Limitação já registrada em fases anteriores:** o foco programático (`element.focus()`) não
  ativa `:focus-visible` neste sandbox de automação — o mecanismo do sublinhado no foco usa a
  mesma condição `:focus-visible` já validada pela regra global de contorno dourado (em uso
  desde a Fase 1), portanto o comportamento real por teclado é considerado coberto por essa
  validação anterior.

## Limitações

Mesma limitação já registrada nas fases anteriores — a ferramenta de redimensionamento de
janela do navegador de automação não funciona neste ambiente (contornada com iframe de largura
controlada), e capturas de tela apresentaram travamentos/atualizações em branco intermitentes,
contornados com nova tentativa e verificação programática (DOM/CSS computado) quando
necessário.

## Pendências

Continuam reservados para a fase final, sem invenção: arquivo oficial da logomarca,
fotografias profissionais, CRM, RQE, especialidades oficiais, biografia definitiva, formação,
experiência, localização, horários, preços, detalhes exatos do atendimento, Instagram,
Facebook, TikTok, YouTube e políticas jurídicas definitivas.

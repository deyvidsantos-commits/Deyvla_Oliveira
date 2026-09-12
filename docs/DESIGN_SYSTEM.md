# Design System Inicial — Dra. Deyv

> **Nota (12/09/2026):** este documento registra o design system inicial da Fase 0/1. A
> revisão visual global (ver `docs/GLOBAL_VISUAL_REFINEMENT.md`) evoluiu a paleta, a tipografia
> e o cabeçalho conforme descrito na seção "Atualização — Revisão Visual Global" ao final deste
> arquivo, preservando o verde institucional e o espírito original. O histórico abaixo foi
> mantido sem remoção.

## 1. Direção visual

Palavras-chave:

- Sofisticação.
- Natureza.
- Saúde.
- Confiança.
- Longevidade.
- Acolhimento.
- Clareza.

Evitar aparência hospitalar excessivamente fria, excesso de dourado, efeitos chamativos, fundos carregados e comunicação visual genérica de academia.

## 2. Paleta provisória

| Token | Cor | Uso |
|---|---|---|
| `--color-primary` | `#0D3024` | cabeçalho, áreas de destaque, títulos |
| `--color-primary-soft` | `#1D4A39` | cartões e estados de interação |
| `--color-gold` | `#C8A45D` | detalhes, linhas, ícones e destaques |
| `--color-ivory` | `#F6F1E7` | fundo claro principal |
| `--color-surface` | `#FFFFFF` | cartões e superfícies |
| `--color-text` | `#1D2823` | texto principal |
| `--color-muted` | `#647069` | texto secundário |

As cores devem ser ajustadas após receber o ficheiro original da logomarca. A imagem do cartão de visita serve apenas como referência inicial e não como amostra cromática exata.

## 3. Tipografia

- Títulos: serifada elegante, com leitura clara.
- Corpo e interface: sans-serif limpa.
- Não usar fontes manuscritas em textos longos.
- Limitar a duas famílias tipográficas.
- Se fontes externas forem utilizadas, documentar origem e impacto no carregamento.

## 4. Uso da marca

- Preservar proporções da logomarca.
- Não aplicar sombras pesadas ou distorções.
- Manter margem de segurança ao redor.
- Preparar versão para fundo claro e fundo escuro apenas quando houver ficheiro adequado ou aprovação.

## 5. Componentes iniciais

- Cabeçalho fixo ou estático conforme melhor leitura do hero.
- Botão primário verde ou dourado com contraste acessível.
- Cartões dos pilares com ícones discretos.
- Blocos alternando marfim, branco e verde-escuro.
- Ícones de redes sociais consistentes.
- Botão flutuante de WhatsApp opcional, sem animação invasiva.

## 6. Imagens

- Priorizar fotografias reais da Dra. Deyv.
- Luz natural ou estúdio com tons quentes.
- Evitar bancos de imagem médicos genéricos.
- Reservar espaço correto mesmo antes das imagens finais.
- Não criar aparência ou retrato fictício da médica.

## 7. Movimento

- Transições entre 150 e 300 ms.
- Entrada suave de elementos apenas se não prejudicar desempenho.
- Sem carrosséis automáticos.
- Sem vídeos de fundo na primeira versão.
- Respeitar preferência do utilizador por movimento reduzido.

## Atualização — Revisão Visual Global (12/09/2026)

Aplicada em todas as seis páginas existentes. Ver `docs/GLOBAL_VISUAL_REFINEMENT.md` para o
registro completo. Resumo do que muda em relação às seções 1–7 acima:

- **Tipografia:** a combinação serifada inicial foi substituída por **Manrope** (títulos,
  textos, menus, botões, cards, FAQ) e **Titillium Web** (sobretítulos, números de etapas,
  categorias). Carregadas via Google Fonts com `preconnect`.
- **Paleta:** o verde institucional (`#0D3024`) foi preservado como `--color-primary`. Foram
  adicionados `--color-primary-deep` (CTA final, menu móvel), branco como fundo padrão das
  seções e um cinza quente (`#F5F4F2`) como fundo das seções alternadas — no lugar do tom
  marfim/creme usado inicialmente.
- **Cabeçalho:** passou a ter fundo verde principal, itens de menu em branco, item ativo
  dourado e botão de WhatsApp com fundo dourado e texto verde profundo (evitando um botão verde
  sobre barra verde).
- **Cards:** fundo branco, borda fina neutra e sombra muito discreta (antes: fundo marfim com
  borda esverdeada).
- **Botões:** cantos arredondados moderados (10px) no lugar do formato de pílula (999px)
  usado inicialmente.

As diretrizes de imagens (seção 6) e de uso da marca (seção 4) permanecem inalteradas.


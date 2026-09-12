# Fase 3 — Página "Acompanhamento"

## Objetivo

Criar `pages/acompanhamento.html`, explicando de forma provisória e clara o conceito de
acompanhamento integrado, para quem a proposta poderá ser adequada, uma possível jornada de
acompanhamento, o papel do atendimento online e do EvoLift, o que o visitante pode esperar da
abordagem, os limites da página enquanto os dados oficiais não foram fornecidos, e como entrar
em contacto pelo WhatsApp. A página transmite organização, proximidade, responsabilidade e
continuidade, sem prometer tratamento ou resultado.

## Escopo

- Criação exclusiva de `pages/acompanhamento.html`.
- Padronização do menu nas três páginas existentes (`index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html`): o item "Abordagem" foi substituído por "Acompanhamento" em
  `index.html` e `pages/sobre.html`, apontando para a nova página.
- Adição de um link discreto "Entenda como funciona o acompanhamento →" na seção de pilares
  da Home (a seção em si foi preservada, sem remoção).
- Expansão de `css/style.css` com novos componentes reutilizáveis (grade de 6 situações,
  jornada em grade numerada, diagrama de integração central sem JavaScript, lista de
  compromissos com ícone de confirmação, nota discreta de segurança), reaproveitando ao máximo
  padrões já existentes (`.pillar-card`, `.section-media-grid`, `.tag-list`, `.formation-icon`).
- Nenhuma outra página foi criada; nenhuma funcionalidade fora do escopo foi adicionada.

## Estrutura da página

1. Cabeçalho (reutilizado, menu padronizado).
2. Hero interno — duas colunas (texto + imagem azul), diferente da composição empilhada da
   página Sobre.
3. Introdução ao acompanhamento — "Mais do que uma consulta isolada."
4. Para quem é o acompanhamento — 6 situações gerais em grade (ícone + título + texto).
5. Jornada provisória — imagem de apoio (rosa) + 6 etapas numeradas em grade responsiva.
6. Atendimento online (`id="atendimento-online"`) — imagem amarela + texto + CTA.
7. Integração entre diferentes áreas — diagrama central (CSS puro, sem JavaScript).
8. EvoLift (`id="evolift"`) — imagem azul-claro + texto + 4 tags de funcionalidades.
9. O que esperar do acompanhamento — 5 compromissos + nota discreta sobre urgência/emergência.
10. CTA final (fundo verde-escuro), reutilizando a configuração central do WhatsApp.
11. Rodapé (reutilizado, caminhos relativos ajustados).

## Jornada provisória

As seis etapas (Primeiro contacto, Avaliação individual, Planeamento, Aplicação na rotina,
Acompanhamento da evolução, Reavaliação e ajustes) foram apresentadas como uma grade responsiva
de cartões numerados (`.journey-grid`/`.journey-step`), com números grandes em serifa dourada
(`.journey-number`), e não como uma linha horizontal única — evitando o risco explícito de uma
linha longa que quebre mal em telemóvel. A grade é 3 colunas no desktop, 2 em tablet e 1 coluna
(totalmente vertical) em telas pequenas (≤560px). Não depende de JavaScript nem de carrossel.
Uma imagem de apoio (rosa) foi posicionada acima da grade, sem esconder ou substituir as seis
etapas.

## Conteúdo provisório e pontos reservados para a fase final

Todos os textos seguem exatamente o conteúdo fornecido no prompt. Comentários técnicos
(invisíveis na interface) marcam os pontos que dependem de validação oficial:

- `TODO final: substituir pela descrição oficial do modelo de acompanhamento da Dra. Deyv.`
- `TODO final: validar o público e as necessidades oficialmente acompanhadas pela Dra. Deyv.`
- `TODO final: substituir pelas etapas oficiais do acompanhamento.`
- `TODO final: validar exatamente como o EvoLift será utilizado no acompanhamento da Dra. Deyv.`
- `TODO: inserir registro profissional assim que validado` (herdado do rodapé).

Duas notas discretas (não alarmantes, mas legíveis) informam que etapas/duração/frequência e o
processo definitivo da jornada serão validados pela Dra. Deyv na fase final — apresentadas com
estilo tipográfico muted, sem parecer erro técnico.

## Placeholders criados

| Arquivo | Dimensão | Proporção | Cor | Uso |
|---|---|---|---|---|
| `assets/img/acompanhamento/acompanhamento-hero-placeholder.svg` | 1400×1000 | 7:5 | Azul | Hero interno |
| `assets/img/acompanhamento/jornada-placeholder.svg` | 1200×800 | 3:2 | Rosa | Apoio visual da jornada |
| `assets/img/acompanhamento/online-placeholder.svg` | 1200×800 | 3:2 | Amarelo | Seção de atendimento online |
| `assets/img/acompanhamento/evolift-acompanhamento-placeholder.svg` | 1200×900 | 4:3 | Azul-claro | Seção do EvoLift |

## Decisões

Nenhuma decisão técnica nova além das já previstas no prompt e nos documentos existentes foi
necessária. Um bug de implementação foi corrigido durante os testes (não é uma decisão formal):
a lista ordenada da jornada (`<ol class="journey-grid">`) exibia a numeração nativa do navegador
("1.", "2.", "3.") sobreposta ao número estilizado — corrigido com `list-style: none` na regra
`.journey-grid`.

## Pendências

Todos os dados oficiais listados na regra da Fase 3 (registros profissionais, especialidades,
formação, biografia, processo definitivo de atendimento, duração, periodicidade, exames,
valores, formas de pagamento, países/regiões atendidas, WhatsApp, redes sociais, fotografias)
continuam reservados para a fase final, conforme D-013.

## Critérios de aceite

- Página abre sem erros e sem recursos 404.
- Apenas um `h1`, hierarquia de títulos correta.
- Menu padronizado e consistente nas três páginas, com `aria-current="page"` correto em cada
  uma.
- Navegação funcional entre Home, Sobre e Acompanhamento (idas e voltas).
- Jornada apresentada sem carrossel, sem JavaScript, vertical em telas pequenas.
- Diagrama de integração funcional em CSS puro, sem canvas, responsivo.
- CTA do WhatsApp com comportamento provisório idêntico às páginas anteriores.
- Responsiva nas larguras 375, 430, 768, 1024 e 1440px, sem rolagem horizontal.
- Nenhum dado oficial, protocolo clínico, duração, frequência, valor, localização, link ou
  número inventado.
- Identidade visual preservada; cores rosa/amarelo/azul/azul-claro somente nos placeholders.
- Home e Sobre continuam funcionando sem regressão após as alterações compartilhadas.

## Resultado da implementação

Implementação concluída conforme escopo. Ver `docs/PROJECT_STATE.md` para o registro detalhado
de arquivos criados/alterados e resultado dos testes.

## Estado da fase

Fase 3 implementada; primeira versão avaliada visualmente pelos gestores.

---

## Revisão pontual (11/09/2026)

Três ajustes aplicados após a avaliação visual da primeira versão, sem reformulação da página.

### Ajuste 1 — Remoção de textos de bastidor

Três frases de bastidor foram removidas da interface visível e substituídas por texto natural,
mantendo comentários técnicos invisíveis para a fase final:

- **Introdução:** removido "As etapas, a duração e a frequência serão definidas oficialmente
  pela Dra. Deyv e apresentadas na versão final do site." Substituído por "O acompanhamento é
  organizado de forma individualizada, considerando as necessidades, os objetivos e o momento
  de cada pessoa." (segundo parágrafo normal, não mais destacado como nota técnica). Adicionado
  `TODO final: substituir pela descrição oficial do modelo, duração e frequência do
  acompanhamento.`
- **Jornada:** removido "A estrutura abaixo representa uma proposta inicial. O processo
  definitivo será validado pela Dra. Deyv na etapa final do projeto." Substituído por "Cada
  etapa contribui para construir um processo mais organizado, consciente e alinhado à
  realidade do paciente." O comentário técnico da seção foi atualizado para `TODO final:
  validar e substituir pelas etapas oficiais do acompanhamento da Dra. Deyv.`
- **Atendimento online:** removido "Os locais atendidos, a plataforma utilizada e os detalhes
  do atendimento serão confirmados na versão final." Os dois parágrafos originais foram
  unificados em um único texto fluido, sem repetição: "O formato online oferece mais
  praticidade para integrar encontros e orientações à rotina, mantendo um processo organizado
  e uma comunicação clara ao longo do acompanhamento, mesmo à distância." Adicionado `TODO
  final: inserir locais atendidos, plataforma e detalhes oficiais do atendimento online.`

Uma verificação adicional na página confirmou que nenhuma outra frase de bastidor visível
estava presente — as demais ocorrências de palavras como "TODO" e "final" no código são apenas
comentários HTML invisíveis, legítimos para manutenção interna.

### Ajuste 2 — Diagrama "Diferentes áreas, uma visão conectada"

- Diagrama ampliado (largura máxima de 640px para 780px) e com elementos mais próximos (gap
  reduzido de 16px para 12px, margem superior de 40px para 28px).
- Círculos aumentados: itens periféricos de 48px para 64px; o centro ("Visão conectada") ganhou
  destaque próprio com 80px e fundo dourado (antes idêntico aos demais), reforçando a hierarquia
  visual pedida.
- Ícones internos aumentados (24–26px para 30–34px) para melhor legibilidade.
- Adicionadas linhas de conexão discretas (pseudo-elementos CSS, sem SVG externo, sem
  JavaScript, sem canvas): uma linha vertical e uma horizontal, douradas e finas, confinadas à
  região central do diagrama (entre 30% e 70% de cada eixo) — suficientes para sugerir a conexão
  entre o centro e as quatro áreas sem nunca alcançar ou atravessar os textos periféricos.
  Posicionadas atrás dos círculos via `z-index`.
- Espaçamento vertical da seção `#integracao` reduzido moderadamente (60% do valor padrão de
  `--space-section`), sem afetar as demais seções do site.
- **Bug encontrado e corrigido durante os testes:** ao reorganizar o CSS, a regra que
  posicionava o elemento central na célula 2×2 da grade foi omitida por engano, fazendo
  "Visão conectada" aparecer no canto superior esquerdo. Corrigido restaurando `grid-column: 2;
  grid-row: 2;` para `.integration-center`.
- No telemóvel (≤560px), o diagrama colapsa para uma coluna vertical (já existente) e as linhas
  de conexão são ocultadas (`display: none`), evitando qualquer aparência de cruz quebrada.

### Ajuste 3 — Seção "O que você pode esperar dessa proposta"

- A seção passou a usar uma composição de duas colunas no desktop (reutilizando a classe
  genérica `.section-media-grid`, já usada em outras seções de duas colunas do site): título e
  texto introdutório ("Um acompanhamento baseado em clareza, individualidade e construção
  responsável ao longo do tempo.") à esquerda; a lista dos cinco compromissos (ícones e textos
  preservados sem alteração) à direita.
- O aviso de urgência/emergência foi mantido integralmente e passou a ocupar um contêiner de
  largura total abaixo das duas colunas, preservando aparência discreta, legibilidade e o ícone
  informativo existente.
- Em telemóvel, a grade colapsa automaticamente para uma coluna (mecanismo já existente,
  reutilizado sem alteração): título e introdução aparecem antes da lista, e o aviso permanece
  por último.

### Resultado dos testes

- Confirmado que nenhuma das três frases de bastidor aparece mais na interface; nenhum `TODO`
  aparece visualmente em nenhuma das três páginas.
- Diagrama testado em 375/430/768/1024/1440px: sem sobreposição, sem rolagem horizontal, linhas
  visíveis e coerentes no desktop/tablet, colapso vertical limpo (sem linhas) no mobile.
- Seção de expectativas testada nas mesmas larguras: duas colunas a partir de ~900px, uma
  coluna abaixo disso, lista e aviso completos e na ordem correta em todos os casos.
- Console sem erros originados pelo site em `index.html`, `pages/sobre.html` e
  `pages/acompanhamento.html`.
- Apenas um `h1` confirmado nas três páginas.
- Regressão: Home e Sobre reabertas após as alterações compartilhadas de CSS — ambas continuam
  funcionando sem erros, sem alteração de conteúdo ou estrutura.
- Limitação já registrada em fases anteriores mantida: redimensionamento nativo de janela não
  funciona neste ambiente (testado via iframe); foco programático não ativa `:focus` neste
  sandbox.

## Estado da fase

Fase 3 — revisão pontual concluída; aguardando validação visual final.

# Fase 4 — Página "EvoLift"

## Objetivo

Criar `pages/evolift.html`, explicando o que é o EvoLift, por que fará parte do acompanhamento
da Dra. Deyv, como poderá ajudar o paciente a organizar exercícios e evolução, quais
funcionalidades estão confirmadas, como se relaciona com o acompanhamento, quais são os limites
do aplicativo e como receber informações pelo WhatsApp. A página apresenta o EvoLift como parte
da experiência de acompanhamento da Dra. Deyv, não como uma página comercial independente do
aplicativo.

## Escopo

- Criação exclusiva de `pages/evolift.html`.
- Padronização do menu nas quatro páginas (`index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html`, `pages/evolift.html`): o item "EvoLift" passou a apontar para a
  nova página em todas elas.
- Adição de links discretos: "Conheça o papel do EvoLift →" na seção EvoLift da Home; "Saiba
  mais sobre o EvoLift →" na seção EvoLift da página Acompanhamento.
- Expansão de `css/style.css` com novos componentes reutilizáveis (moldura de telemóvel em CSS
  puro, linhas divididas para benefícios, grade com linha superior para funcionalidades, linha
  vertical editorial para a jornada, caminho de progresso para a evolução, diagrama de relação
  de três nós, caixa de uso responsável), reaproveitando componentes já existentes
  (`.section-media-grid`, `.highlight-quote`, `.integration-icon`, modificadores de proporção).
- Nenhuma outra página foi criada; nenhuma funcionalidade fora do escopo foi adicionada.

## Funcionalidades confirmadas do EvoLift utilizadas na página

- Registro de exercícios.
- Registro de cargas.
- Histórico de evolução (consulta de registros anteriores).
- Organização do treino (informações reunidas de forma acessível e estruturada).

Nenhuma outra funcionalidade foi mencionada ou inventada (sem prescrição automática,
diagnóstico, inteligência artificial, chat médico, videoconsulta, mensagens, dietas, exames,
alertas clínicos, compartilhamento automático, sincronização com relógios ou integração com
academia).

## Estrutura da página

1. Cabeçalho (reutilizado, menu padronizado).
2. Hero interno — duas colunas (texto + CTA + imagem azul).
3. Apresentação do EvoLift — texto editorial + destaque tipográfico ("Registrar hoje ajuda a
   compreender a evolução de amanhã.") + moldura de telemóvel com placeholder rosa.
4. Benefícios para a organização — 4 itens em linhas divididas (formato diferente dos pilares
   da Home).
5. Funcionalidades confirmadas — imagem amarela + grade de 4 itens com linha superior dourada.
6. Jornada de utilização — linha vertical editorial com 4 etapas (formato diferente da grade de
   6 cartões da página Acompanhamento).
7. Evolução ao longo do tempo — imagem azul-claro + caminho de progresso com 3 momentos (Início,
   Continuidade, Evolução), sem gráficos ou percentagens fictícias.
8. Relação entre Dra. Deyv, paciente e EvoLift — diagrama de 3 nós conectados em CSS puro
   (Paciente, Dra. Deyv, EvoLift, nessa ordem de leitura).
9. Limites e uso responsável — caixa discreta (sem vermelho/alarme).
10. CTA final (fundo verde-escuro), reutilizando a configuração central do WhatsApp.
11. Rodapé (reutilizado, caminhos relativos ajustados).

## Placeholders criados

| Arquivo | Dimensão | Proporção | Cor | Uso |
|---|---|---|---|---|
| `assets/img/evolift/evolift-page-hero-placeholder.svg` | 1400×1000 | 7:5 | Azul | Hero interno |
| `assets/img/evolift/evolift-mobile-placeholder.svg` | 750×1600 | ~15:32 | Rosa | Mockup de telemóvel na apresentação |
| `assets/img/evolift/evolift-features-placeholder.svg` | 1400×900 | 14:9 | Amarelo | Seção de funcionalidades confirmadas |
| `assets/img/evolift/evolift-progress-placeholder.svg` | 1400×900 | 14:9 | Azul-claro | Seção de evolução ao longo do tempo |

A moldura do telemóvel (`.phone-frame`) é feita apenas com CSS (borda, `border-radius`,
`aspect-ratio`) ao redor do SVG — nenhuma interface fictícia foi desenhada dentro da imagem ou
via CSS.

## Textos de bastidor

Nenhuma frase de bastidor (como "será validado na fase final", "conteúdo provisório",
"informação pendente", "ainda não existe integração" ou "o site não armazena dados") aparece na
interface visível. As duas orientações técnicas exigidas pelo prompt ("nesta fase não existe
integração técnica entre o site e o aplicativo" e "o site não acessa nem armazena dados do
EvoLift") foram mantidas exclusivamente como comentários HTML invisíveis na seção de Limites.
Um comentário adicional (`TODO final: validar como as informações do EvoLift serão utilizadas
pela Dra. Deyv.`) foi incluído na seção de Benefícios, conforme solicitado.

## Limites respeitados

Nenhum dado profissional, formação, registro, contacto, processo clínico, forma exata de acesso
ao EvoLift, plano, preço, país atendido, disponibilidade ou política comercial foi inventado.
Não foi afirmado acesso automático da médica aos dados, monitoramento em tempo real, mensagens
dentro do aplicativo, compartilhamento automático de dados, integração clínica ou armazenamento
médico no site.

## Critérios de aceite

- Página abre sem erros e sem recursos 404.
- Apenas um `h1`, hierarquia de títulos correta.
- Menu padronizado e consistente nas quatro páginas, com `aria-current="page"` correto em cada
  uma.
- Diagramas (relação e evolução) em CSS puro, sem JavaScript, sem canvas, responsivos.
- Jornada em formato distinto da página Acompanhamento; benefícios em formato distinto dos
  pilares da Home.
- CTA do WhatsApp com comportamento provisório idêntico às páginas anteriores.
- Responsiva nas larguras 375, 430, 768, 1024 e 1440px, sem rolagem horizontal.
- Identidade visual preservada; azul somente nos placeholders.
- Home, Sobre e Acompanhamento continuam funcionando sem regressão após as alterações
  compartilhadas.

## Resultado da implementação

Implementação concluída conforme escopo. Ver `docs/PROJECT_STATE.md` para o registro detalhado
de arquivos criados/alterados e resultado dos testes.

## Testes

- Servidor estático local (Node nativo); todos os recursos de `pages/evolift.html` (HTML, CSS,
  JS, 4 novos SVGs, SVG reutilizado da Home) retornaram HTTP 200.
- Console sem erros originados pelo site em `index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html` e `pages/evolift.html`.
- Confirmado apenas um `h1` nas quatro páginas.
- Navegação testada: menu e links discretos de Home e Acompanhamento abrem
  `pages/evolift.html`/`evolift.html` corretamente; item "EvoLift" da própria página aponta
  para si mesma com `aria-current="page"`.
- CTA do WhatsApp testado: mesma configuração central, clique interceptado corretamente, aviso
  temporário exibido.
- Responsividade testada tecnicamente nas 5 larguras via iframe com largura controlada (mesma
  técnica e limitação já registradas nas fases anteriores): sem rolagem horizontal em nenhuma;
  moldura de telemóvel, benefícios, funcionalidades, jornada, caminho de progresso e diagrama de
  relação colapsam corretamente em coluna única no mobile e se reorganizam em tablet/desktop.
- Regressão: Home, Sobre e Acompanhamento reabertas após as alterações compartilhadas de menu e
  CSS — todas continuam funcionando sem erros; o diagrama de integração da página Acompanhamento
  (que compartilha uma regra CSS com o novo diagrama de relação) foi verificado visualmente e
  permanece correto.

## Pendências

Todos os dados oficiais (registros profissionais, contactos, processo clínico, forma exata de
acesso ao EvoLift, planos, preços, países atendidos, disponibilidade, políticas comerciais)
continuam reservados para a fase final, conforme D-013.

## Estado da fase

Fase 4 implementada e aguardando revisão interna dos gestores do projeto.

---

## Correção visual pontual (11/09/2026)

### Problema visual identificado

Na seção "A evolução acontece passo a passo.", a linha dourada horizontal do caminho de
progresso (`.progress-path`) atravessava visualmente os títulos "Início", "Continuidade" e
"Evolução". Também havia espaço vertical um pouco excessivo entre o placeholder da evolução e o
início da linha temporal.

**Causa raiz:** `.progress-dot` é um elemento `<span>`, que por padrão possui `display: inline`.
As propriedades `width`, `height` e `margin` vertical definidas em `.progress-dot` não têm
efeito em elementos inline — ou seja, o marcador não reservava a altura (14px) nem o espaço
inferior (16px) esperados antes do título. Com isso, o título ficava muito mais próximo do topo
do que o previsto, exatamente na faixa vertical onde a linha (calibrada para um marcador de
14px de altura) estava posicionada, causando o cruzamento visual. Esse mesmo padrão funciona
corretamente na jornada de utilização e no diagrama de relação porque, nesses casos, o marcador
é filho direto de um contêiner `display: flex` (que "blockifica" seus filhos diretos), o que não
ocorre em `.progress-point`.

### Correção aplicada

- Adicionada `display: block;` a `.progress-dot`, fazendo o marcador reservar corretamente sua
  altura e margem inferior antes do título — nenhuma outra propriedade precisou ser alterada, já
  que os valores numéricos existentes (altura do marcador, `top` da linha, margem inferior)
  já estavam calibrados corretamente para essa correção.
- Reduzido moderadamente `.progress-path { margin-top: 40px }` para `32px`, alinhando o
  espaçamento com o padrão já usado em outras grades do site (`.journey-grid`,
  `.situations-grid`, `.formation-grid`, `.feature-grid` usam `margin-top: 32px`).

Nenhuma alteração foi feita no HTML — a correção foi resolvida inteiramente no CSS existente,
sem valores frágeis baseados em posicionamento arbitrário (a solução permanece estável mesmo se
os textos dos três momentos mudarem de tamanho no futuro).

### Comportamento desktop

Linha dourada fina posicionada atrás dos três marcadores circulares (via `z-index`), marcadores
centralizados em cada uma das três colunas, títulos e descrições abaixo da linha sem qualquer
contato visual, distribuição equilibrada da esquerda para a direita (Início → Continuidade →
Evolução).

### Comportamento móvel/tablet

Comportamento já existente preservado e verificado: em larguras ≤768px, o caminho de progresso
já colapsava para uma composição vertical empilhada (`flex-direction: column`) com a linha
horizontal oculta (`display: none`) — sem sobreposição, sem cruzamento de texto e com a ordem de
leitura correta (Início, Continuidade, Evolução) em todas as larguras testadas.

### Testes realizados

- Balanceamento de chaves do CSS verificado programaticamente após a edição.
- Console sem erros originados pelo site em `pages/evolift.html`.
- Confirmado visualmente no desktop: linha atrás dos marcadores, sem tocar títulos ou
  descrições.
- Testado nas 5 larguras (375, 430, 768, 1024, 1440px) via iframe com largura controlada (mesma
  técnica e limitação já registradas nas fases anteriores): sem rolagem horizontal em nenhuma; a
  375/430/768px a composição empilha verticalmente sem linha, ordem correta, sem sobreposição; a
  1024/1440px a linha horizontal fica corretamente atrás dos marcadores, sem tocar textos.
- Regressão: `index.html`, `pages/sobre.html` e `pages/acompanhamento.html` reabertos — sem
  erros de console; as classes alteradas (`.progress-path`/`.progress-dot`) são exclusivas da
  página EvoLift, sem uso nas demais páginas.

### Resultado

Problema visual corrigido integralmente com uma alteração mínima e não frágil no CSS
compartilhado. Nenhum texto, imagem, estrutura de seção ou outra página foi alterado.

## Estado da fase (atualizado)

Fase 4 — correção visual concluída; aguardando validação final.

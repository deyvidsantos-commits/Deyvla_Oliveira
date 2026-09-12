# Registo de Decisões

## D-001 — Site institucional estático

**Data:** 11/09/2026  
**Estado:** aprovada

O site não utilizará banco de dados. Será desenvolvido em HTML, CSS e JavaScript, salvo decisão futura devidamente aprovada.

## D-002 — Conversão pelo WhatsApp

**Data:** 11/09/2026  
**Estado:** aprovada

O principal objetivo de conversão será encaminhar o visitante para o WhatsApp da Dra. Deyv.

## D-003 — CTA principal único

**Data:** 11/09/2026  
**Estado:** aprovada

O CTA principal será `Agendar avaliação pelo WhatsApp`.

O botão `Conhecer o acompanhamento` foi rejeitado e não deve ser implementado.

## D-004 — Divulgação de redes sociais

**Data:** 11/09/2026  
**Estado:** aprovada

O site divulgará as redes sociais oficiais por links. Não haverá integração dinâmica de feeds na primeira versão.

## D-005 — EvoLift como apoio

**Data:** 11/09/2026  
**Estado:** aprovada

O EvoLift será apresentado como ferramenta de apoio ao acompanhamento de exercícios e evolução. Não haverá integração técnica com o site nesta etapa.

## D-006 — Desenvolvimento em fases por página

**Data:** 11/09/2026  
**Estado:** aprovada

Cada página nova corresponde a uma fase. A página inicial é a Fase 1. Páginas futuras dependem de autorização.

## D-007 — Primeira versão para validação

**Data:** 11/09/2026  
**Estado:** aprovada

A primeira versão será apresentada à Dra. Deyv para recolher alterações, complementos e novas decisões. Não será tratada como versão final.

## D-008 — Responsabilidades

**Data:** 11/09/2026  
**Estado:** aprovada

Claude executará o desenvolvimento. Deyvid e ChatGPT/Codex atuarão na gestão, definição e revisão do projeto.

## D-009 — Remoção de textos internos da interface

**Data:** 11/09/2026  
**Estado:** aprovada

Frases de bastidor (destinadas à documentação, não ao visitante) não devem aparecer na interface visível do site. Quando necessário registrar uma pendência, o conteúdo passa a ser um comentário técnico no código-fonte, sem exibição visual.

## D-010 — Segunda imagem da Dra. Deyv na apresentação

**Data:** 11/09/2026  
**Estado:** aprovada

A seção de apresentação da Dra. Deyv passa a incluir uma imagem provisória em composição de duas colunas (texto + imagem), em vez de texto isolado.

## D-011 — Novo posicionamento da seção do EvoLift

**Data:** 11/09/2026  
**Estado:** aprovada

A seção do EvoLift passa a ser comunicada com foco na continuidade do acompanhamento ("Seu acompanhamento continua além da consulta"), com identificação secundária discreta da tecnologia, mantendo o aviso de que o EvoLift não substitui a consulta médica.

## D-012 — Redução moderada dos espaços verticais

**Data:** 11/09/2026  
**Estado:** aprovada

A escala de espaçamento vertical entre seções foi reduzida moderadamente para evitar áreas vazias excessivas, preservando separação visual elegante entre seções.

## D-013 — Dados oficiais somente na fase final

**Data:** 11/09/2026  
**Estado:** aprovada

Os dados oficiais, contactos, credenciais, biografia definitiva, links e fotografias da Dra. Deyv serão fornecidos e inseridos somente após a construção estrutural das páginas planejadas. A falta dessas informações não deve bloquear as fases intermediárias.

Durante essas fases serão utilizados:

- Conteúdo provisório neutro;
- Placeholders;
- Comentários técnicos;
- Configurações centralizadas;
- Links desativados quando não houver destino real.

Nenhuma informação profissional poderá ser inventada em nenhuma fase.

## D-014 — Padronização do menu global e remoção de "Atendimento online"

**Data:** 12/09/2026  
**Estado:** aprovada

O menu global de navegação foi padronizado em 7 itens em todas as páginas: Início, Dra. Deyv,
Acompanhamento, EvoLift, Conteúdos, Redes sociais, WhatsApp. O item "Atendimento online" foi
removido do menu para evitar que a navegação ficasse extensa demais. A seção correspondente não
foi removida do site — continua acessível dentro de `pages/acompanhamento.html`, apenas sem
link direto no menu principal.

## D-015 — Substituição de "Redes sociais" por "Contato" no menu global

**Data:** 12/09/2026  
**Estado:** aprovada

Com a criação da página de Contato (Fase 6), o item global "Redes sociais" foi substituído por
"Contato" no menu principal, mantendo 7 itens: Início, Dra. Deyv, Acompanhamento, EvoLift,
Conteúdos, Contato, WhatsApp. As redes sociais não foram removidas do site — continuam
acessíveis dentro do conteúdo: na seção `#redes-sociais` de `index.html`, na página de
Conteúdos e na nova página de Contato (que também recebeu sua própria seção
`#redes-sociais`).

## D-016 — Revisão visual global e ativação dos primeiros dados oficiais

**Data:** 12/09/2026  
**Estado:** aprovada

A identidade visual das seis páginas foi refinada para um estilo médico contemporâneo,
elegante e editorial, usando `https://drapatriciamaba.com.br/` apenas como referência de
direção (paleta, tipografia, atmosfera), sem copiar estrutura, texto, imagem, marca ou código.
O verde institucional da Dra. Deyv (`#0D3024`) foi preservado como `--color-primary`; a
tipografia serifada foi substituída por **Manrope** (principal) e **Titillium Web** (apoio,
em identificadores curtos); o cabeçalho passou a ter fundo verde com navegação branca; cards
passaram a ter fundo branco, borda neutra e sombra discreta; botões passaram a ter cantos
arredondados moderados no lugar do formato de pílula.

Nesta mesma atividade, os primeiros dados oficiais confirmados foram registrados e ativados:
nome completo **Dra. Deyvli Oliveira** (usado em contextos formais, mantendo "Dra. Deyv" como
marca curta), e-mail `dra.deyv@gmail.com` e WhatsApp `+55 81 9444-6101`. O número de WhatsApp
substituiu o placeholder `SEU_NUMERO_AQUI` em `js/main.js`, ativando o comportamento real (já
previsto desde a Fase 1) de abrir o `wa.me` correspondente em nova aba, sem necessidade de
remover ou duplicar lógica. A página de Contato passou a exibir 4 canais (WhatsApp, E-mail,
Redes sociais, Atendimento online) e o rodapé das seis páginas passou a exibir nome completo,
e-mail, telefone (direcionando ao WhatsApp) e uma navegação essencial, sem incluir CRM, RQE,
endereço, especialidade oficial, horários, preços ou redes sociais ainda não confirmadas.
Nenhuma página nova foi criada e a Fase 7 não foi iniciada. Ver `docs/GLOBAL_VISUAL_REFINEMENT.md`
para o registro completo.

> **Nota de correção (12/09/2026):** o nome completo registrado nesta decisão (`Dra. Deyvli
> Oliveira`) estava incorreto. Ver D-017 abaixo para a correção oficial. Este texto é mantido
> como registro histórico do que foi decidido e implementado no momento desta entrada.

## D-017 — Correção do nome oficial: Dra. Deyvli Oliveira → Dra. Deyvla Oliveira

**Data:** 12/09/2026  
**Estado:** aprovada

O nome completo registrado em D-016 (`Dra. Deyvli Oliveira`) estava incorreto. O nome oficial
correto, fornecido pelos gestores do projeto, é:

- Nome completo: **Dra. Deyvla Oliveira**
- Nome público: **Dra. Deyvla**

Todas as ocorrências de "Dra. Deyvli Oliveira", "Dra. Deyvli" e do nome público anterior
"Dra. Deyv" foram corrigidas para "Dra. Deyvla Oliveira"/"Dra. Deyvla" nas seis páginas
(menu, rodapé, hero, textos editoriais, metadados, atributos de acessibilidade), nos SVGs
provisórios e na mensagem automática do WhatsApp em `js/main.js`. O e-mail
(`dra.deyv@gmail.com`) e o número de WhatsApp (`+55 81 9444-6101` / `558194446101`) não foram
alterados, pois estavam corretos. Na página `pages/acompanhamento.html`, apenas os componentes
globais e os metadados foram corrigidos, preservando integralmente o conteúdo editorial das
seções, conforme escopo desta correção. Nenhuma página, funcionalidade, commit, push ou deploy
foi realizado. Ver `docs/GLOBAL_VISUAL_REFINEMENT.md` (nota de correção) e
`docs/CONTENT_REQUIREMENTS.md` (seção 5, atualizada) para o registro completo.


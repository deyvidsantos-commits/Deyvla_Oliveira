# Roadmap — Site Dra. Deyv

## Estratégia

O desenvolvimento será dividido em fases. Cada página nova corresponde a uma fase própria. Nenhuma fase futura deve começar sem validação da fase anterior pelos gestores do projeto.

## Fase 0 — Fundação e documentação

**Estado:** concluída para início do protótipo.

- Definição de objetivos e limites.
- Organização da documentação.
- Identidade visual inicial.
- Estrutura técnica básica criada pelo Claude.
- Preparação da especificação da página inicial.

## Fase 1 — Página inicial (`index.html`)

**Estado:** aprovada internamente.

Objetivo: criar a primeira versão para apresentação à Dra. Deyv.

Conteúdo previsto:

- Cabeçalho e navegação.
- Hero com posicionamento, fotografia e CTA do WhatsApp.
- Apresentação resumida da Dra. Deyv.
- Pilares da abordagem integrada.
- Resumo do atendimento online.
- Apresentação resumida do EvoLift.
- Redes sociais.
- CTA final e rodapé.

Entrega: página responsiva, sem banco de dados e sem funcionalidades não aprovadas.

## Fase 2 — Página “Sobre” (`pages/sobre.html`)

**Estado:** aprovada internamente.

Implementada com conteúdo provisório neutro (ver `docs/PHASE_02_ABOUT.md`). Os dados oficiais
abaixo foram adiados para a fase final de inserção de dados (ver D-013 em
`docs/DECISION_LOG.md`) e não bloquearam a construção da página:

- Biografia aprovada.
- Formação médica.
- Especialidades e registros oficiais.
- Cursos e formações complementares.
- Fotografias profissionais.
- História e propósito profissional.

## Fase 3 — Página “Acompanhamento” (`pages/acompanhamento.html`)

**Estado:** aprovada internamente.

Implementada com conteúdo provisório neutro (ver `docs/PHASE_03_ACCOMPANHAMENTO.md`). Os dados
oficiais abaixo foram adiados para a fase final de inserção de dados (ver D-013 em
`docs/DECISION_LOG.md`) e não bloquearam a construção da página:

- Para quem é o acompanhamento (público oficial).
- Etapas definitivas do atendimento.
- Frequência e formato.
- Áreas abordadas.
- Limites do atendimento online.
- CTA para WhatsApp (número oficial).

## Fase 4 — Página “EvoLift” (`pages/evolift.html`)

**Estado:** aprovada internamente.

Implementada com conteúdo provisório neutro (ver `docs/PHASE_04_EVOLIFT.md`). Os dados oficiais
abaixo foram adiados para a fase final de inserção de dados (ver D-013 em
`docs/DECISION_LOG.md`) e não bloquearam a construção da página:

- Forma exata de acesso ao EvoLift (planos, preços, disponibilidade).
- Registros profissionais e contactos oficiais.
- Processo clínico definitivo de utilização.
- Países atendidos e políticas comerciais.
- Imagens autorizadas do aplicativo.

## Fase 5 — Página “Conteúdos” (`pages/conteudos.html`)

**Estado:** aprovada internamente.

Implementada com conteúdo provisório neutro (ver `docs/PHASE_05_CONTEUDOS.md`): hero interno,
introdução editorial, 5 temas principais, 1 conteúdo em destaque e 6 pautas futuras, todos como
pré-visualizações editoriais estáticas. Nenhuma página individual de artigo foi criada — elas
não estão iniciadas e dependem de aprovação futura. Os dados oficiais abaixo foram adiados para
a fase final de inserção de dados (ver D-013 em `docs/DECISION_LOG.md`) e não bloquearam a
construção da página:

- Artigos completos e conteúdo clínico validado.
- Credenciais, especialidades e citações atribuídas à médica.
- Estudos, participações em eventos, livros e entrevistas já publicados.
- Perfis e URLs oficiais das redes sociais.

Como parte desta fase, o menu global foi padronizado em 7 itens (Início, Dra. Deyv,
Acompanhamento, EvoLift, Conteúdos, Redes sociais, WhatsApp) em todas as páginas existentes,
removendo "Atendimento online" do menu — a seção correspondente continua acessível dentro de
`pages/acompanhamento.html`.

## Fase 6 — Página “Contato” (`pages/contato.html`)

**Estado:** implementada e aguardando revisão interna.

Implementada com conteúdo provisório neutro (ver `docs/PHASE_06_CONTATO.md`): hero interno,
formas de contato (WhatsApp, redes sociais, atendimento online), etapas do primeiro contato,
atendimento online, perguntas frequentes (FAQ nativa em `<details>`), aviso de responsabilidade
e emergência, redes sociais e CTA final. Os dados oficiais abaixo foram adiados para a fase
final de inserção de dados (ver D-013 em `docs/DECISION_LOG.md`) e não bloquearam a construção
da página:

- Locais atendidos, plataforma e disponibilidade do atendimento online.
- Registro profissional.
- URLs oficiais das redes sociais.
- Número oficial do WhatsApp.

Como parte desta fase, o menu global foi padronizado novamente: o item "Redes sociais" foi
substituído por "Contato" em todas as seis páginas (ver D-015 em `docs/DECISION_LOG.md`). As
redes sociais não foram removidas do site — continuam em `index.html`, em
`pages/conteudos.html` e agora também em `pages/contato.html`.

## Fase 7 — Revisão final e publicação

**Estado:** futura.

- Revisão de conteúdo pela Dra. Deyv.
- Revisão de títulos e registros profissionais.
- SEO técnico.
- Acessibilidade.
- Desempenho.
- Política de privacidade, cookies e termos necessários.
- Testes nos principais tamanhos de tela.
- Configuração de domínio e hospedagem.

> **Nota:** a publicação básica no GitHub Pages (repositório
> `deyvidsantos-commits/Deyvla_Oliveira`, branch `main`) já foi realizada em 12/09/2026 (ver
> D-018 em `docs/DECISION_LOG.md`) para permitir o acompanhamento público do desenvolvimento.
> Isso não substitui a Fase 7: domínio próprio, revisão final de conteúdo, políticas jurídicas e
> os demais itens acima continuam pendentes.

## Revisão visual global (12/09/2026)

Transversal às seis páginas existentes (Fases 1–6); não é uma nova fase editorial e não altera
a numeração das fases. Identidade visual evoluída para um estilo médico contemporâneo (Manrope
+ Titillium Web, paleta com verde institucional preservado, cabeçalho verde, cards com fundo
branco) e primeiros dados oficiais ativados (nome completo, e-mail e WhatsApp). Ver
`docs/GLOBAL_VISUAL_REFINEMENT.md` e D-016 em `docs/DECISION_LOG.md`. Estado: implementada e
aguardando revisão interna.

## Nota sobre o menu global

A partir da Fase 6, o menu global padrão de todas as páginas é: Início, Dra. Deyv,
Acompanhamento, EvoLift, Conteúdos, Contato, WhatsApp. O item "Redes sociais" (usado entre as
Fases 5 e 6) foi substituído por "Contato" — as redes sociais continuam acessíveis dentro do
conteúdo (Home, Conteúdos e Contato). Novas fases que adicionarem páginas devem avaliar se o
item correspondente deve ser incluído neste menu ou tratado como link discreto dentro de outra
página, para evitar que o menu volte a ficar extenso.

## Regra de mudança

Após a demonstração da Fase 1, o roadmap será atualizado conforme o retorno da Dra. Deyv. Páginas podem ser adicionadas, removidas, renomeadas ou combinadas.


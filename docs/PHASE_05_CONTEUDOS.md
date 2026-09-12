# Fase 5 — Página "Conteúdos"

## Objetivo

Criar `pages/conteudos.html`, um espaço editorial dedicado a conteúdos educativos sobre saúde,
alimentação, movimento, hábitos e longevidade, apresentado de forma clara e responsável. A
página organiza os principais temas que serão desenvolvidos no futuro, apresenta um exemplo de
conteúdo em destaque e uma grade de pautas futuras — sem publicar nenhum artigo completo, dado
clínico ou informação oficial ainda não validada.

## Escopo

- Criação exclusiva de `pages/conteudos.html`. Nenhuma página individual de artigo foi criada.
- Padronização do menu global nas cinco páginas (`index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html`, `pages/evolift.html`, `pages/conteudos.html`) em sete itens:
  Início, Dra. Deyv, Acompanhamento, EvoLift, Conteúdos, Redes sociais, WhatsApp.
- Remoção do item "Atendimento online" do menu global. A seção `#atendimento-online` continua
  existindo integralmente em `pages/acompanhamento.html` — apenas deixou de ser referenciada no
  menu; nenhum conteúdo foi removido.
- Adição de um link discreto "Ver conteúdos →" na Home, entre a seção de redes sociais e o CTA
  final, sem alterar o hero nem criar uma seção grande.
- Expansão de `css/style.css` com um novo componente reutilizável (`.content-grid`/
  `.content-card`, grade editorial de 3 colunas com mínimo de elementos gráficos) e um pequeno
  modificador de proporção (`.section-media-2-1`), reaproveitando componentes já existentes
  (`.inner-hero`, `.banner-media`, `.values-list`/`.value-item` com `.pillar-icon`,
  `.section-media-grid`, `.responsible-use-box`, `.social-grid`/`.social-card`,
  `.section-final-cta`).
- Nenhuma outra página foi criada; nenhuma funcionalidade fora do escopo foi adicionada.

## Estrutura da página

1. Cabeçalho (reutilizado, menu padronizado em 7 itens, "Conteúdos" com `aria-current="page"`).
2. Hero interno — identificação "CONTEÚDOS", título, texto e texto complementar, sem CTA,
   banner com placeholder rosa (2:1).
3. Introdução editorial — dois parágrafos sobre o papel do conhecimento na longevidade.
4. Temas principais — lista editorial de 5 temas (Longevidade, Alimentação, Movimento, Hábitos e
   rotina, Saúde e prevenção), cada um com ícone e texto curto, sem links e sem aparência
   clicável.
5. Conteúdo em destaque — pré-visualização editorial única (categoria "Longevidade", título e
   resumo), imagem amarela, sem botão "Ler mais", sem data, sem autor, sem contador.
6. Grade de conteúdos futuros — 6 pautas editoriais (Movimento, Hábitos, Alimentação,
   Bem-estar, Acompanhamento, Prevenção) em formato de cartão minimalista, sem links, datas,
   autor ou métricas.
7. Aviso de responsabilidade — caixa discreta reutilizando `.responsible-use-box`.
8. Redes sociais — espaços neutros para Instagram, Facebook, TikTok e YouTube, sem links, sem
   nomes de usuário e sem indicação "em breve" (diferente da Home, por especificação desta
   fase).
9. CTA final — reutiliza a configuração central do WhatsApp.
10. Rodapé (reutilizado, caminhos relativos ajustados).

## Temas principais

| Tema | Texto |
|---|---|
| Longevidade | Reflexões sobre saúde, autonomia e qualidade de vida ao longo dos anos. |
| Alimentação | Conteúdos sobre escolhas alimentares equilibradas e sustentáveis. |
| Movimento | Informações sobre atividade física, mobilidade e prevenção. |
| Hábitos e rotina | Conteúdos sobre organização, sono, equilíbrio e consistência. |
| Saúde e prevenção | Informações gerais sobre cuidado contínuo e prevenção. |

## Pautas da grade de conteúdos futuros

| Categoria | Título |
|---|---|
| Movimento | Movimentar-se com regularidade, não com intensidade. |
| Hábitos | Pequenas rotinas sustentam grandes mudanças. |
| Alimentação | Comer bem é mais sobre padrão do que sobre regras. |
| Bem-estar | Equilíbrio emocional também é parte da longevidade. |
| Acompanhamento | Acompanhar a evolução é tão importante quanto iniciar. |
| Prevenção | Cuidar antes de precisar tratar. |

Nenhuma das seis pautas foi publicada como artigo completo — todas são pré-visualizações
editoriais estáticas, sem link, botão, data, autor ou tempo de leitura.

## Placeholders criados

| Arquivo | Dimensão | Proporção | Cor | Uso |
|---|---|---|---|---|
| `assets/img/conteudos/conteudos-hero-placeholder.svg` | 1600×800 | 2:1 | Rosa | Hero interno |
| `assets/img/conteudos/destaque-longevidade-placeholder.svg` | 1400×900 | 14:9 | Amarelo | Conteúdo em destaque |
| `assets/img/conteudos/conteudo-movimento-placeholder.svg` | 900×600 | 3:2 | Azul | Cartões da grade (reutilizado) |
| `assets/img/conteudos/conteudo-alimentacao-placeholder.svg` | 900×600 | 3:2 | Rosa | Cartões da grade (reutilizado) |
| `assets/img/conteudos/conteudo-longevidade-placeholder.svg` | 900×600 | 3:2 | Amarelo | Cartões da grade (reutilizado) |

Os três últimos placeholders foram alternados entre os seis cartões da grade (em vez de criar
seis arquivos distintos). Cada ocorrência recebeu um comentário HTML individual documentando
qual imagem definitiva deverá substituí-la (ex.: `<!-- TODO final: substituir por imagem
definitiva sobre "Movimentar-se com regularidade, não com intensidade." -->`), permitindo
substituição individual futura sem depender do nome do arquivo reutilizado.

## Textos de bastidor

Nenhuma frase de bastidor ("conteúdo provisório", "artigos ainda não disponíveis", "em
construção", "fase final", "aguardando a Dra. Deyv") aparece na interface visível. As
orientações técnicas exigidas foram mantidas exclusivamente como comentários HTML invisíveis:

- Na introdução editorial: `TODO final: validar a apresentação editorial com a Dra. Deyv.`
- No conteúdo em destaque: `TODO editorial: criar e validar o artigo completo antes de ativar
  este conteúdo.`
- Na grade de pautas: `TODO editorial: transformar cada pauta em artigo individual somente após
  aprovação e revisão profissional.`
- Em cada espaço de rede social: comentário indicando onde a URL oficial deverá ser inserida.

## Limites respeitados

Nenhuma página individual de artigo foi criada. Nenhuma funcionalidade de busca, filtro,
formulário, newsletter, captura de e-mail, banco de dados, CMS, login, cadastro, comentário,
feed ou integração social foi implementada. Nenhum link fictício, publicação fictícia,
credencial fictícia ou conteúdo clínico detalhado foi inventado. Nenhum pacote foi instalado,
nenhum framework foi adicionado, nenhuma imagem externa foi usada. Nenhuma publicação, deploy,
`git init`, commit, push ou mudança de branch foi realizado. A Fase 6 não foi iniciada.

## Critérios de aceite

- Página abre sem erros e sem recursos 404.
- Apenas um `h1`, hierarquia de títulos correta.
- Menu padronizado em 7 itens nas cinco páginas, sem "Atendimento online", com
  `aria-current="page"` correto em cada uma.
- Seção `#atendimento-online` preservada integralmente em `pages/acompanhamento.html`.
- Temas principais sem aparência clicável (sem links, sem cursor de ponteiro).
- Destaque e pautas futuras sem qualquer aparência de artigo publicado (sem "Ler mais", data,
  autor, contador ou link).
- Redes sociais sem "em breve", sem links fictícios, sem nomes de usuário.
- CTA do WhatsApp com comportamento provisório idêntico às páginas anteriores.
- Responsiva nas larguras 375, 430, 768, 1024 e 1440px, sem rolagem horizontal.
- Identidade visual preservada; cores de destaque somente nos placeholders.
- Home, Sobre, Acompanhamento e EvoLift continuam funcionando sem regressão após as alterações
  compartilhadas de menu e CSS.

## Testes

- Servidor estático local (Node nativo); recursos de `pages/conteudos.html` verificados sem
  erro de carregamento.
- Console sem erros originados pelo site em `index.html`, `pages/sobre.html`,
  `pages/acompanhamento.html`, `pages/evolift.html` e `pages/conteudos.html`.
- Confirmado apenas um `h1` em todas as cinco páginas.
- Navegação testada: menu padronizado nas cinco páginas, com caminhos relativos corretos
  (`../index.html`, `sobre.html`, `acompanhamento.html`, `evolift.html`, `conteudos.html`,
  `../index.html#redes-sociais`) e `aria-current="page"` correto em cada página; link discreto
  "Ver conteúdos →" da Home abre `pages/conteudos.html` corretamente; menu mobile testado (abre,
  exibe os 7 itens, "Conteúdos" em destaque dourado na própria página).
- CTA do WhatsApp testado em `pages/conteudos.html`: mesma configuração central, clique
  interceptado corretamente, aviso temporário exibido.
- Responsividade testada tecnicamente nas 5 larguras (375, 430, 768, 1024, 1440px) via iframe
  com largura controlada (mesma técnica e limitação já registradas nas fases anteriores):
  sem rolagem horizontal em nenhuma; a 375/430px hero, temas, destaque e grade de pautas
  empilham em coluna única e o menu mobile permanece ativo; a 768px a grade de pautas usa 2
  colunas; a 1024/1440px o menu completo aparece em uma linha e a grade de pautas exibe 3
  colunas.
- Regressão: `index.html`, `pages/sobre.html`, `pages/acompanhamento.html` e
  `pages/evolift.html` reabertos após as alterações compartilhadas de menu e CSS — todas
  continuam funcionando sem erros de console; confirmado especificamente que o diagrama de
  integração da página Acompanhamento (`grid-column: 2; grid-row: 2`) e a correção do
  `.progress-dot` (`display: block`) na página EvoLift permanecem corretos.
- **Limitação:** mesma limitação já registrada nas fases anteriores — a ferramenta de
  redimensionamento de janela do navegador de automação não funciona neste ambiente, e o foco
  programático não ativa `:focus` neste sandbox.

## Pendências

Todos os dados oficiais (artigos completos, credenciais, especialidades, citações atribuídas à
médica, estudos, participações em eventos, livros, entrevistas, publicações já existentes,
perfis sociais e URLs oficiais) continuam reservados para a fase final, conforme D-013.
Páginas individuais de artigo não foram iniciadas e dependem de aprovação futura.

## Estado da fase

Fase 5 implementada e aguardando revisão interna dos gestores do projeto.

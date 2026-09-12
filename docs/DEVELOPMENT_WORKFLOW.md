# Fluxo de Desenvolvimento e Gestão

## 1. Papéis

### Gestores do projeto

Deyvid e ChatGPT/Codex:

- Definem escopo e prioridades.
- Registram decisões.
- Preparam os prompts de execução.
- Avaliam relatórios e resultados do Claude.
- Aprovam ou rejeitam alterações.
- Atualizam o estado e o roadmap.

### Executor

Claude:

- Analisa o prompt e os documentos indicados.
- Implementa apenas o escopo autorizado.
- Preserva a estrutura existente.
- Testa o que foi alterado.
- Informa ficheiros modificados, decisões e pendências.
- Não cria requisitos por conta própria.

### Cliente e aprovadora de conteúdo

Dra. Deyv:

- Valida identidade, conteúdo e posicionamento.
- Fornece informações profissionais e materiais.
- Solicita alterações ou aprova cada versão.

## 2. Ciclo de cada fase

1. Gestores definem o escopo da página.
2. Conteúdo e assets necessários são identificados.
3. É criado um prompt restrito para o Claude.
4. Claude implementa sem expandir escopo.
5. Claude executa testes direcionados.
6. Gestores revisam visual, conteúdo e código.
7. Dra. Deyv avalia a versão quando aplicável.
8. Correções são registradas e executadas.
9. Estado e decisões são atualizados.
10. A próxima fase só começa após autorização.

## 3. Regras para prompts ao Claude

Todo prompt deve conter:

- Objetivo da fase.
- Documentos obrigatórios para leitura.
- Ficheiros que podem ser alterados.
- Ficheiros que não podem ser alterados.
- Requisitos funcionais e visuais.
- Conteúdo aprovado e placeholders.
- Critérios de aceite.
- Testes esperados.
- Formato obrigatório do relatório final.

## 4. Regras de implementação

- Não adicionar banco de dados.
- Não adicionar frameworks, bibliotecas ou serviços sem aprovação.
- Não inventar conteúdo profissional.
- Não iniciar páginas futuras.
- Não publicar nem configurar domínio sem autorização.
- Não fazer commit ou push sem instrução explícita de Deyvid.
- Não substituir assets fornecidos sem aprovação.
- Manter HTML, CSS e JavaScript claros e fáceis de manter.

## 5. Relatório obrigatório do Claude

Ao terminar cada tarefa, informar:

1. Resumo do que foi implementado.
2. Lista de ficheiros criados ou alterados.
3. Decisões tomadas durante a implementação.
4. Testes executados e resultados.
5. Pendências e placeholders.
6. Pontos que precisam de validação dos gestores ou da Dra. Deyv.

## 6. Definição de pronto

Uma fase só está concluída quando:

- Todos os critérios de aceite foram verificados.
- Não há erros visíveis no navegador.
- Funciona em ecrã móvel e computador.
- Links da fase foram testados.
- Conteúdo provisório está identificado.
- Gestores aprovaram a entrega.
- Documentação foi atualizada.


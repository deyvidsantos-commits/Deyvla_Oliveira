# Arquitetura do Site

## 1. Tipo de solução

Site institucional estático, desenvolvido com HTML semântico, CSS e JavaScript simples.

Não haverá servidor de aplicação, banco de dados, autenticação ou armazenamento de dados do visitante.

## 2. Estrutura recomendada

```text
Dra_Deyv/
├── index.html
├── pages/
│   ├── sobre.html
│   ├── acompanhamento.html
│   ├── evolift.html
│   ├── conteudos.html
│   └── contato.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── img/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── dra-deyv/
│   │   ├── evolift/
│   │   └── galeria/
│   ├── icons/
│   └── fonts/
├── docs/
├── README.md
└── .gitignore
```

Criar `assets/img/dra-deyv/` e `assets/img/evolift/` quando os respetivos ficheiros forem recebidos.

## 3. Navegação inicial

Na Fase 1, o menu poderá apontar para seções do próprio `index.html`. Isso é aceitável no protótipo. Quando uma página for aprovada e criada em fase própria, o item correspondente deverá passar a apontar para essa página.

Menu provisório:

- Início
- Dra. Deyv
- Abordagem
- Atendimento online
- EvoLift
- Redes sociais
- WhatsApp

## 4. Comportamentos permitidos

- Menu responsivo.
- Rolagem suave entre seções na página inicial.
- Botões e links externos.
- Abertura segura das redes sociais em nova aba.
- Botão de WhatsApp com mensagem pré-preenchida.
- Animações discretas, respeitando `prefers-reduced-motion`.

## 5. Comportamentos não permitidos nesta fase

- Captura de dados do visitante.
- Formulários de saúde.
- Chatbot.
- Cookies de marketing ou ferramentas de rastreamento.
- Integrações externas além de links.
- Conteúdo carregado dinamicamente de redes sociais.

## 6. Requisitos técnicos

- HTML semântico e único `h1` por página.
- CSS organizado por variáveis, base, componentes, seções e responsividade.
- JavaScript apenas quando necessário.
- Imagens com `alt`, dimensões definidas e carregamento otimizado.
- Contraste adequado e navegação por teclado.
- Sem dependências externas desnecessárias.
- Não adicionar frameworks sem aprovação.
- Não alterar a estrutura principal sem registrar a decisão.

## 7. WhatsApp

Formato previsto:

`https://wa.me/NUMERO?text=MENSAGEM`

O número deve conter código do país e apenas dígitos. Enquanto não houver número oficial, usar placeholder visível no código e impedir que um link fictício seja publicado.

Mensagem provisória:

`Olá, Dra. Deyv! Conheci o seu trabalho através do site e gostaria de receber informações sobre a avaliação inicial.`


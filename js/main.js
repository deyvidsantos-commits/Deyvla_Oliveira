(function () {
  "use strict";

  /* ------------------------------------------------------------------
     Configuração central do WhatsApp
     Número oficial confirmado. Enquanto o valor abaixo for um número
     válido, os botões de WhatsApp abrem diretamente o wa.me correspondente
     em nova aba; a lógica abaixo mantém, sem alteração, o comportamento de
     aviso temporário para o caso de o número precisar ser removido no
     futuro.
     ------------------------------------------------------------------ */
  var WHATSAPP_CONFIG = {
    numero: "558194446101",
    mensagem:
      "Olá, Dra. Deyvla. Gostaria de receber informações sobre o acompanhamento."
  };

  function numeroConfigurado(numero) {
    return /^\d{8,15}$/.test(numero);
  }

  function montarLinkWhatsApp() {
    return (
      "https://wa.me/" +
      WHATSAPP_CONFIG.numero +
      "?text=" +
      encodeURIComponent(WHATSAPP_CONFIG.mensagem)
    );
  }

  function mostrarAvisoWhatsApp() {
    var toast = document.getElementById("whatsapp-toast");
    if (!toast) {
      return;
    }
    toast.textContent =
      "O número de WhatsApp será configurado após validação da Dra. Deyvla.";
    toast.hidden = false;
    window.clearTimeout(mostrarAvisoWhatsApp._timer);
    mostrarAvisoWhatsApp._timer = window.setTimeout(function () {
      toast.hidden = true;
    }, 5000);
  }

  function iniciarWhatsApp() {
    var configurado = numeroConfigurado(WHATSAPP_CONFIG.numero);
    var link = montarLinkWhatsApp();
    var botoes = document.querySelectorAll("[data-whatsapp]");

    botoes.forEach(function (botao) {
      botao.setAttribute("href", link);
      botao.setAttribute("target", "_blank");
      botao.setAttribute("rel", "noopener noreferrer");

      if (!configurado) {
        botao.addEventListener("click", function (event) {
          event.preventDefault();
          mostrarAvisoWhatsApp();
        });
      }
    });
  }

  /* ------------------------------------------------------------------
     Menu mobile
     ------------------------------------------------------------------ */
  function iniciarMenu() {
    var botao = document.getElementById("nav-toggle");
    var nav = document.getElementById("main-nav");
    if (!botao || !nav) {
      return;
    }

    function fecharMenu() {
      nav.classList.remove("is-open");
      botao.setAttribute("aria-expanded", "false");
    }

    botao.addEventListener("click", function () {
      var aberto = nav.classList.toggle("is-open");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        fecharMenu();
      }
    });
  }

  function iniciarAno() {
    var ano = document.getElementById("ano");
    if (ano) {
      ano.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    iniciarWhatsApp();
    iniciarMenu();
    iniciarAno();
  });
})();

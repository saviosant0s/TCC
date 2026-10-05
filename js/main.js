/* ==========================================================================
   Guia Prático WCAG — interações
   - Barra de acessibilidade (alto contraste e tamanho da fonte), com as
     preferências salvas no navegador.
   - Demonstrações: qualquer elemento com data-message escreve essa mensagem
     na saída indicada em data-output (usado no "leitor de tela simulado").
   ========================================================================== */
(function () {
    'use strict';

    var STORAGE_KEY = 'guia-wcag:preferencias';
    var FONT = { min: 90, max: 160, step: 10, padrao: 100 };

    var root = document.documentElement;
    var contrastButton = document.getElementById('btn-contrast');
    var toolbarStatus = document.getElementById('toolbar-status');

    var prefs = loadPrefs();

    function loadPrefs() {
        var defaults = { fontSize: FONT.padrao, contrast: false };
        try {
            var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
            return Object.assign(defaults, saved);
        } catch (e) {
            return defaults;
        }
    }

    function savePrefs() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        } catch (e) {
            // Sem armazenamento (ex.: janela anônima): o site funciona igual.
        }
    }

    function applyPrefs() {
        root.style.fontSize = prefs.fontSize + '%';
        document.body.classList.toggle('high-contrast', prefs.contrast);
        contrastButton.setAttribute('aria-pressed', String(prefs.contrast));
    }

    function announce(text) {
        toolbarStatus.textContent = text;
    }

    function changeFontSize(direction) {
        var next = prefs.fontSize + direction * FONT.step;
        if (direction === 0) next = FONT.padrao;

        if (next > FONT.max || next < FONT.min) {
            announce(direction > 0 ? 'Tamanho máximo da fonte atingido.' : 'Tamanho mínimo da fonte atingido.');
            return;
        }

        prefs.fontSize = next;
        applyPrefs();
        savePrefs();
        announce('Tamanho da fonte: ' + next + '%.');
    }

    function toggleContrast() {
        prefs.contrast = !prefs.contrast;
        applyPrefs();
        savePrefs();
    }

    var actions = {
        'toggle-contrast': toggleContrast,
        'font-increase': function () { changeFontSize(1); },
        'font-decrease': function () { changeFontSize(-1); },
        'font-reset': function () { changeFontSize(0); }
    };

    document.addEventListener('click', function (event) {
        var actionEl = event.target.closest('[data-action]');
        if (actionEl && actions[actionEl.dataset.action]) {
            actions[actionEl.dataset.action]();
            return;
        }

        var messageEl = event.target.closest('[data-message]');
        if (messageEl) {
            var output = document.getElementById(messageEl.dataset.output);
            if (!output) return;
            // Limpa antes de escrever para o leitor de tela anunciar de novo
            // mesmo quando a mensagem se repete.
            output.textContent = '';
            setTimeout(function () {
                output.textContent = messageEl.dataset.message;
            }, 50);
        }
    });

    applyPrefs();
})();

/* ==========================================================================
   Guia Prático WCAG — interações
   - Preferências de leitura (alto contraste e tamanho do texto), salvas no
     navegador.
   - Demonstrações: qualquer elemento com data-message acrescenta uma linha
     no registro indicado em data-output (o "visualizador de fala").
   - Índice lateral: marca o critério que está na tela.
   ========================================================================== */
(function () {
    'use strict';

    var STORAGE_KEY = 'guia-wcag:preferencias';
    var FONT = { min: 90, max: 160, step: 10, padrao: 100 };
    var MAX_LINHAS = 5;

    var root = document.documentElement;
    var contrastButton = document.getElementById('btn-contrast');
    var prefsStatus = document.getElementById('prefs-status');

    var prefs = loadPrefs();

    /* --- Preferências --- */

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
        prefsStatus.textContent = text;
    }

    function changeFontSize(direction) {
        var next = direction === 0 ? FONT.padrao : prefs.fontSize + direction * FONT.step;

        if (next > FONT.max || next < FONT.min) {
            announce(direction > 0 ? 'O texto já está no tamanho máximo.' : 'O texto já está no tamanho mínimo.');
            return;
        }

        prefs.fontSize = next;
        applyPrefs();
        savePrefs();
        announce('Tamanho do texto: ' + next + '%.');
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

    /* --- Visualizador de fala --- */

    function logLine(output, tag, message) {
        var empty = output.querySelector('.speech__empty');
        if (empty) empty.remove();

        var line = document.createElement('p');
        if (tag) {
            var tagEl = document.createElement('span');
            tagEl.className = 'speech__tag';
            tagEl.textContent = tag;
            line.appendChild(tagEl);
        }
        line.appendChild(document.createTextNode(message));
        output.appendChild(line);

        while (output.children.length > MAX_LINHAS) {
            output.removeChild(output.firstElementChild);
        }
    }

    document.addEventListener('click', function (event) {
        var actionEl = event.target.closest('[data-action]');
        if (actionEl && actions[actionEl.dataset.action]) {
            actions[actionEl.dataset.action]();
            return;
        }

        var messageEl = event.target.closest('[data-message]');
        if (messageEl) {
            var output = document.getElementById(messageEl.dataset.output);
            if (output) logLine(output, messageEl.dataset.tag, messageEl.dataset.message);
        }
    });

    /* --- Índice lateral: critério atual --- */

    var indexLinks = document.querySelectorAll('.index a[href^="#"]');

    if ('IntersectionObserver' in window && indexLinks.length) {
        var linkFor = {};
        indexLinks.forEach(function (link) {
            linkFor[link.getAttribute('href').slice(1)] = link;
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                indexLinks.forEach(function (link) { link.removeAttribute('aria-current'); });
                var current = linkFor[entry.target.id];
                if (current) current.setAttribute('aria-current', 'true');
            });
        }, { rootMargin: '-30% 0px -60% 0px' });

        Object.keys(linkFor).forEach(function (id) {
            var section = document.getElementById(id);
            if (section) observer.observe(section);
        });
    }

    applyPrefs();
})();

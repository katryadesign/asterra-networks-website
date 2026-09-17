/* _theme.js — перемикач теми для стрес-тесту семантичного шару. Урок 08, крок 5.
   Службове, як _chrome.css: не продукт. Ставить data-theme на <html> ще до
   першого малювання (скрипт у <head> без defer) і додає кнопку в смугу
   станів екрана (.wf-states) або в шапку вітрини (.doc-head).
   Вибір пам'ятається в localStorage лише як зручність переглядача. */
(function () {
  var KEY = 'asterra-theme';
  var root = document.documentElement;
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function apply(v) {
    if (v === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
  }
  apply(read());
  document.addEventListener('DOMContentLoaded', function () {
    var host = document.querySelector('.wf-states .wrap, .doc-head');
    if (!host) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'wf-theme';
    function label() {
      var light = root.getAttribute('data-theme') === 'light';
      btn.textContent = 'Theme test: ' + (light ? 'light' : 'dark');
      btn.setAttribute('aria-pressed', light ? 'true' : 'false');
    }
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next); write(next); label();
    });
    label();
    host.insertBefore(btn, host.querySelector(':scope > em'));   // перед описом стану, щоб смуга не росла
  });
})();

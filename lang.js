/* EN/PL switch. English text lives in the HTML; Polish text lives in window.PL on each page. */
(function () {
  var EN = {};
  var items = document.querySelectorAll('[data-t]');
  items.forEach(function (el) { EN[el.getAttribute('data-t')] = el.textContent; });

  function setLang(lang) {
    var dict = lang === 'pl' ? (window.PL || {}) : EN;
    items.forEach(function (el) {
      var v = dict[el.getAttribute('data-t')];
      if (v != null) el.textContent = v;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('nb-lang', lang); } catch (e) {}
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });

  var saved = 'en';
  try { saved = localStorage.getItem('nb-lang') || 'en'; } catch (e) {}
  setLang(saved === 'pl' ? 'pl' : 'en');

  /* Image slots: show the photo if the file exists, otherwise keep the label */
  document.querySelectorAll('.slot img').forEach(function (img) {
    function ok() { img.parentNode.classList.add('has-img'); }
    function fail() { img.parentNode.classList.add('no-img'); img.remove(); }
    if (img.complete) { img.naturalWidth ? ok() : fail(); }
    else { img.addEventListener('load', ok); img.addEventListener('error', fail); }
  });
})();

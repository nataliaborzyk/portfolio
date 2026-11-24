/* interactive bits: honey print files viewer + pattern colourway studio */
(function () {
  var stage = document.getElementById('pf-stage');
  if (stage) {
    var chips = document.querySelectorAll('.pf-chip');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        var k = c.getAttribute('data-label');
        chips.forEach(function (o) { o.classList.toggle('is-on', o === c); o.setAttribute('aria-pressed', o === c ? 'true' : 'false'); });
        document.getElementById('pf-cut').src = 'images/honey-cut-' + k + '.webp';
        document.getElementById('pf-file').src = 'images/honey-file-' + k + '.jpg';
        document.getElementById('pf-die').src = 'images/honey-die-' + k + '.png';
        var n = c.getAttribute('data-kind') === 'n';
        document.getElementById('pf-spec-f').hidden = n;
        document.getElementById('pf-spec-n').hidden = !n;
      });
    });
    document.getElementById('pf-bleed').addEventListener('change', function (e) { stage.classList.toggle('show-file', e.target.checked); });
  }
  var pat = document.getElementById('pt-pat');
  if (pat) {
    var sws = document.querySelectorAll('.pt-sw');
    sws.forEach(function (b) {
      b.addEventListener('click', function () {
        pat.style.setProperty('--tile', 'url(images/patterns-dingo-' + b.getAttribute('data-cw') + '.jpg)');
        sws.forEach(function (o) { o.classList.toggle('is-on', o === b); o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      });
    });
    var sc = document.getElementById('pt-scale');
    sc.addEventListener('input', function () { pat.style.setProperty('--size', sc.value + 'px'); });
    document.getElementById('pt-tilet').addEventListener('change', function (e) { pat.classList.toggle('show-tile', e.target.checked); });
    ['sky', 'lilac', 'mint', 'grey'].forEach(function (k) { var i = new Image(); i.src = 'images/patterns-dingo-' + k + '.jpg'; });
  }
})();

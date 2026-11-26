/* Bee the Light promo: reveal-on-scroll for .reveal cards.
   The promo page loads this file; before it existed the reveal class never got .in,
   so the price cards stayed at opacity 0 for every visitor (measured 2026-11-26: 12 of 12 hidden).
   If IntersectionObserver is unavailable, reveal everything at once so nothing stays hidden. */
(function () {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add('in');
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(function (el) { io.observe(el); });
})();

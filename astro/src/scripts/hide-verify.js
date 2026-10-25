/* Hides [VERIFY …] / [ADD …] / [CONTENT NEEDED …] editor notes from visitors. Add ?review to
   the URL to see them (content review mode). A block left with no real content collapses with
   its note. Every occurrence this catches is also logged in VERIFY-LIST.md at the repo root —
   this script is a safety net, not the primary mechanism for tracking what's unverified. */
(function () {
  if (/[?&]review\b/.test(location.search)) return;
  var RE = /\[(?:VERIFY|ADD|CONTENT NEEDED)[^\]]*\]\s*/g;
  var root = document.body;

  function media(el) {
    return (el.matches && el.matches("img,svg,video,picture,input,select,textarea")) ||
      (el.querySelector && el.querySelector("img,svg,video,picture,input,select,textarea"));
  }
  function visText(el) {
    var t = "";
    for (var c = el.firstChild; c; c = c.nextSibling) {
      if (c.nodeType === 3) t += c.nodeValue;
      else if (c.nodeType === 1 && c.style.display !== "none") t += visText(c);
    }
    return t.trim();
  }
  function collapse(el) {
    for (var i = 0; el && el !== root && i < 8; i++) {
      if (media(el)) return;
      if (i > 0 && el.querySelector && el.querySelector("h1,h2,h3,h4,h5,h6") && el.parentElement && media(el.parentElement)) return;
      var t = visText(el);
      if (i === 0 ? t.length === 0 : t.length <= 48) { el.style.display = "none"; el = el.parentElement; } else return;
    }
  }
  function clean(node) {
    if (!node) return;
    var w = document.createTreeWalker(node.nodeType === 3 ? node.parentNode : node, NodeFilter.SHOW_TEXT), n, hit = [];
    while ((n = w.nextNode())) { if (n.nodeValue.indexOf("[") > -1 && RE.test(n.nodeValue)) hit.push(n); RE.lastIndex = 0; }
    hit.forEach(function (t) { t.nodeValue = t.nodeValue.replace(RE, "").replace(/^\s*[—–-]\s*/, ""); collapse(t.parentElement); });
  }
  clean(root);
  new MutationObserver(function (ms) {
    ms.forEach(function (m) { if (m.type === "characterData") clean(m.target); else m.addedNodes.forEach(clean); });
  }).observe(root, { childList: true, subtree: true, characterData: true });
})();

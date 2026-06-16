import type { QuartzComponent, QuartzComponentProps } from "@quartz-community/types"
import styles from "./styles/notesToc.scss"

const script = `
(function () {
  function handleNavOrRender() {
    var allTocs = document.querySelectorAll("div.notes-toc-explorer");
    for (var i = 0; i < allTocs.length; i++) {
      var toc = allTocs[i];
      // always start closed (no persisted state)
      toc.classList.remove("notes-toc-open");
      toc.classList.remove("collapsed");
      toc.setAttribute("aria-expanded", "true");
      document.documentElement.classList.remove("mobile-no-scroll");

      var cleanupHandlers = [];
      var isMobile = window.matchMedia("(max-width: 800px)").matches;

      var mobileBtn = toc.querySelector(".mobile-toc-explorer");
      if (mobileBtn) {
        mobileBtn.classList.remove("hide-until-loaded");
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { toc.classList.add("notes-toc-ready"); });
        });
        (function (btn, tocEl) {
          var handler = function () {
            var opened = tocEl.classList.toggle("notes-toc-open");
            tocEl.setAttribute("aria-expanded", opened ? "true" : "false");
            if (opened) document.documentElement.classList.add("mobile-no-scroll");
            else document.documentElement.classList.remove("mobile-no-scroll");
          };
          btn.addEventListener("click", handler);
          cleanupHandlers.push(function () { btn.removeEventListener("click", handler); });
        })(mobileBtn, toc);
      }

      var desktopBtn = toc.querySelector(".desktop-toc-explorer");
      if (desktopBtn) {
        (function (btn, tocEl) {
          var handler = function () {
            var collapsed = tocEl.classList.toggle("collapsed");
            tocEl.setAttribute("aria-expanded", collapsed ? "false" : "true");
          };
          btn.addEventListener("click", handler);
          cleanupHandlers.push(function () { btn.removeEventListener("click", handler); });
        })(desktopBtn, toc);
      }

      // tapping any link closes the mobile overlay
      var links = toc.querySelectorAll("a");
      for (var l = 0; l < links.length; l++) {
        (function (link, tocEl) {
          var linkHandler = function () {
            if (window.matchMedia("(max-width: 800px)").matches) {
              tocEl.classList.remove("notes-toc-open");
              tocEl.setAttribute("aria-expanded", "false");
              document.documentElement.classList.remove("mobile-no-scroll");
            }
          };
          link.addEventListener("click", linkHandler);
          cleanupHandlers.push(function () { link.removeEventListener("click", linkHandler); });
        })(links[l], toc);
      }

      if (typeof window !== "undefined" && window.addCleanup) {
        window.addCleanup(function () { cleanupHandlers.forEach(function (fn) { fn(); }); });
      }
    }

    // scroll-spy: highlight headings currently in view
    if (window.__notesTocObserver) window.__notesTocObserver.disconnect();
    var observer = new IntersectionObserver(function (entries) {
      for (var e = 0; e < entries.length; e++) {
        var entry = entries[e];
        var slug = entry.target.id;
        var links = document.querySelectorAll('a[data-for="' + slug + '"]');
        var windowHeight = entry.rootBounds ? entry.rootBounds.height : null;
        if (!windowHeight || !links.length) continue;
        if (entry.boundingClientRect.y < windowHeight) {
          for (var k = 0; k < links.length; k++) links[k].classList.add("in-view");
        } else {
          for (var k = 0; k < links.length; k++) links[k].classList.remove("in-view");
        }
      }
    });
    window.__notesTocObserver = observer;
    var headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
    headers.forEach(function (h) { observer.observe(h); });
  }

  document.addEventListener("nav", handleNavOrRender);
  document.addEventListener("render", handleNavOrRender);
})();
`

interface TocEntry {
  depth: number
  text: string
  slug: string
}

let numTocs = 0

const MobileToc: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const toc = (fileData as { toc?: TocEntry[] }).toc
  if (!toc || toc.length === 0) return null

  const id = `notes-toc-${numTocs++}`

  return (
    <div class="notes-toc-explorer" aria-expanded={false}>
      <button
        type="button"
        class="notes-toc-toggle mobile-toc-explorer hide-until-loaded"
        aria-controls={id}
        aria-label="Table of contents"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width={2}
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide-menu"
        >
          <line x1={4} x2={20} y1={12} y2={12} />
          <line x1={4} x2={20} y1={6} y2={6} />
          <line x1={4} x2={20} y1={18} y2={18} />
        </svg>
      </button>
      <button
        type="button"
        class="notes-toc-toggle title-button desktop-toc-explorer"
        aria-expanded={true}
      >
        <h2>Table of Contents</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="5 8 14 8"
          fill="none"
          stroke="currentColor"
          stroke-width={2}
          stroke-linecap="round"
          stroke-linejoin="round"
          class="fold"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div id={id} class="notes-toc-content" aria-expanded={true} role="group">
        <h2 class="notes-toc-overlay-heading">Table of Contents</h2>
        <ul class="overflow notes-toc-ul">
          {toc.map((entry) => (
            <li class={`depth-${entry.depth}`}>
              <a href={`#${entry.slug}`} data-for={entry.slug}>
                {entry.text}
              </a>
            </li>
          ))}
          <li class="overflow-end" />
        </ul>
      </div>
    </div>
  )
}

MobileToc.css = styles
MobileToc.afterDOMLoaded = script

export default (() => MobileToc) satisfies (opts?: unknown) => QuartzComponent

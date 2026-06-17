import type { QuartzComponent, QuartzComponentProps } from "@quartz-community/types"
import { resolveRelative, simplifySlug } from "@quartz-community/utils/path"
import styles from "./styles/backlinks.scss"

export interface BacklinksOptions {
  hideWhenEmpty: boolean
}

const defaultOptions: BacklinksOptions = { hideWhenEmpty: true }

interface BacklinkCandidate {
  unlisted?: boolean
  links?: string[]
  slug?: string
  frontmatter?: { title?: string }
}

let listCount = 0

export default ((opts?: Partial<BacklinksOptions>) => {
  const options: BacklinksOptions = { ...defaultOptions, ...opts }
  const listId = `list-${listCount++}`

  const Backlinks: QuartzComponent = ({
    fileData,
    allFiles,
    displayClass,
  }: QuartzComponentProps & { displayClass?: string }) => {
    const slug = simplifySlug(fileData.slug as never)
    const backlinkFiles = (allFiles as unknown as BacklinkCandidate[]).filter(
      (file) => file.unlisted !== true && file.links?.includes(slug as unknown as string),
    )
    if (options.hideWhenEmpty && backlinkFiles.length === 0) return null

    const classes = [displayClass, "backlinks"].filter(Boolean).join(" ")
    return (
      <div class={classes}>
        <h2>Backlinks</h2>
        <ul class="overflow" id={listId}>
          {backlinkFiles.length > 0 ? (
            backlinkFiles.map((f) => (
              <li>
                <a
                  href={resolveRelative(fileData.slug as never, f.slug as never)}
                  class="internal"
                >
                  {f.frontmatter?.title}
                </a>
              </li>
            ))
          ) : (
            <li>No backlinks found</li>
          )}
          <li class="overflow-end" />
        </ul>
      </div>
    )
  }

  Backlinks.css = styles
  Backlinks.afterDOMLoaded = `
document.addEventListener("nav", function () {
  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var parentUl = entry.target.parentElement;
      if (!parentUl) continue;
      if (entry.isIntersecting) parentUl.classList.remove("gradient-active");
      else parentUl.classList.add("gradient-active");
    }
  });
  var ul = document.getElementById("${listId}");
  if (!ul) return;
  var end = ul.querySelector(".overflow-end");
  if (!end) return;
  observer.observe(end);
});
`

  return Backlinks
}) satisfies (opts?: Partial<BacklinksOptions>) => QuartzComponent

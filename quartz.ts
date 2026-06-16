import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { registerCondition } from "./quartz/plugins/loader/conditions"

const isIndexPage = (slug: string) => slug === "index" || slug.startsWith("index-")
registerCondition("is-index-page", (props) => isIndexPage(props.fileData.slug ?? ""))
registerCondition("not-index-page", (props) => !isIndexPage(props.fileData.slug ?? ""))

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

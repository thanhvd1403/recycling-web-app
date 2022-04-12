import { remark } from "remark";
import html from "remark-html";

/**
 * Function to render markdown text to html string.
 * @param {*} markdown Markdown text to render.
 * @returns {string} HTML string output.
 */
export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

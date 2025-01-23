import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_CXfaa4O1.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"this-is-a-test-blog-post\">This is a test blog post!</h1>\n<p>This is the content of the post.</p>";

				const frontmatter = {"title":"Test Blog Post 70","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma","publishDate":"2024-10-02T00:00:00.000Z","tags":["Training Tips","Pet Food"]};
				const file = "C:/Users/digga/pt-pet-supply/src/content/blog/test-blog-post9.md";
				const url = undefined;
				function rawContent() {
					return "\r\n# This is a test blog post!\r\n\r\nThis is the content of the post.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"this-is-a-test-blog-post","text":"This is a test blog post!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

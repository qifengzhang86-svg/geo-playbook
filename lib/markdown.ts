import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  featured?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  excerpt?: string;
}

export function getPostSlugs(): string[] {
  const dir = CONTENT_DIR;
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = {
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    slug: data.slug ?? slug,
    featured: Boolean(data.featured),
  };
  return {
    slug,
    frontmatter,
    content,
    excerpt: frontmatter.description,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null);
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(
    (p) => p.frontmatter.category.toLowerCase() === category.toLowerCase()
  );
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const set = new Set(posts.map((p) => p.frontmatter.category).filter(Boolean));
  return Array.from(set);
}

export function getPrevNextPosts(slug: string): {
  prev: Post | null;
  next: Post | null;
} {
  const posts = getAllPosts();
  const i = posts.findIndex((p) => p.slug === slug);
  if (i < 0) return { prev: null, next: null };
  return {
    prev: i > 0 ? posts[i - 1] ?? null : null,
    next: i < posts.length - 1 && i >= 0 ? posts[i + 1] ?? null : null,
  };
}

export function getRelatedPosts(
  slug: string,
  category: string,
  limit = 4
): Post[] {
  const sameCategory = getPostsByCategory(category).filter((p) => p.slug !== slug);
  return sameCategory.slice(0, limit);
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return String(result);
}

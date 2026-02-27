import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getPostsByCategory } from "@/lib/markdown";
import type { Post } from "@/lib/markdown";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  return {
    title: `分类：${decoded}`,
    description: `GEO Playbook - ${decoded} 分类下的文章列表。`,
  };
}

export function generateStaticParams() {
  return getCategories().map((category) => ({
    category: encodeURIComponent(category),
  }));
}

function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
      <Link href={`/articles/${post.slug}`} className="block group">
        <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {post.frontmatter.title}
        </h2>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {post.frontmatter.description}
        </p>
        <p className="mt-2 text-xs text-gray-500">
          {post.frontmatter.date}
        </p>
      </Link>
    </article>
  );
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  const categories = getCategories();
  const match = categories.find(
    (c) => c.toLowerCase() === decoded.toLowerCase()
  );
  if (!match && categories.length > 0) notFound();
  const posts = getPostsByCategory(decoded);

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/topics"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          ← 全部分类
        </Link>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
          {decoded}
        </h1>
        <p className="mt-2 text-gray-600">
          共 {posts.length} 篇文章
        </p>
      </div>
      {posts.length === 0 ? (
        <p className="text-gray-500">该分类下暂无文章。</p>
      ) : (
        <div className="space-y-0">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

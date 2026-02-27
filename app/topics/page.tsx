import type { Metadata } from "next";
import Link from "next/link";
import { getCategories, getAllPosts } from "@/lib/markdown";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "分类",
  description: "按主题浏览 GEO 相关文章分类。",
};

export default function TopicsPage() {
  const categories = getCategories();
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        分类
      </h1>
      <p className="text-gray-600">
        按主题浏览 GEO 相关文章。
      </p>
      <AdSlot id="ad-topics" label="广告" className="my-6" />
      {categories.length === 0 ? (
        <p className="text-gray-500">暂无分类。</p>
      ) : (
        <ul className="space-y-4">
          {categories.map((cat) => {
            const count = posts.filter(
              (p) => p.frontmatter.category.toLowerCase() === cat.toLowerCase()
            ).length;
            return (
              <li key={cat}>
                <Link
                  href={`/topics/${encodeURIComponent(cat)}`}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {cat}
                </Link>
                <span className="ml-2 text-sm text-gray-500">
                  （{count} 篇）
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

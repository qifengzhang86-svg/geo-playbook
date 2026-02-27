import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/markdown";
import type { Post } from "@/lib/markdown";

export const metadata: Metadata = {
    title: "GEO 资讯",
    description: "GEO Playbook - 深度解析生成式引擎优化（GEO）前沿资讯。掌握 AI 搜索的底层推荐逻辑，获取帮助品牌重塑流量分发核心竞争力的实战策略。",
};

function ArticleCard({ post }: { post: Post }) {
    return (
        <article className="border-b border-gray-200 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
            <Link href={`/articles/${post.slug}`} className="block group">
                <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                        {post.frontmatter.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.frontmatter.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.frontmatter.title}
                </h2>
                <p className="mt-2 text-gray-600 line-clamp-2 md:line-clamp-3 leading-relaxed">
                    {post.frontmatter.description}
                </p>
            </Link>
        </article>
    );
}

export default function ArticlesPage() {
    const posts = getAllPosts();

    return (
        <div className="space-y-8 max-w-4xl pt-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    GEO 资讯
                </h1>
                <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
                    深度解析最新 AI 搜索算法与生成式引擎优化（GEO）实战策略。在这里，掌握重构品牌流量分配的新法则。
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    共收录 {posts.length} 篇精选文章
                </p>
            </div>

            {posts.length === 0 ? (
                <p className="text-gray-500 py-8">暂无文章发布，敬请期待。</p>
            ) : (
                <div className="mt-8">
                    {posts.map((post) => (
                        <ArticleCard key={post.slug} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}

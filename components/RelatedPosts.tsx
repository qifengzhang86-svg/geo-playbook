import Link from "next/link";
import type { Post } from "@/lib/markdown";

interface PrevNextProps {
  prev: Post | null;
  next: Post | null;
}

export function PrevNext({ prev, next }: PrevNextProps) {
  if (!prev && !next) return null;
  return (
    <nav
      className="flex flex-col sm:flex-row justify-between gap-4 mt-8 pt-8 border-t border-gray-200"
      aria-label="上一篇 / 下一篇"
    >
      <div className="min-w-0 flex-1">
        {prev ? (
          <Link
            href={`/articles/${prev.slug}`}
            className="block text-sm text-gray-600 hover:text-blue-600"
          >
            <span className="text-gray-500">上一篇：</span>
            {prev.frontmatter.title}
          </Link>
        ) : (
          <span className="text-sm text-gray-400" />
        )}
      </div>
      <div className="min-w-0 flex-1 text-right">
        {next ? (
          <Link
            href={`/articles/${next.slug}`}
            className="block text-sm text-gray-600 hover:text-blue-600"
          >
            <span className="text-gray-500">下一篇：</span>
            {next.frontmatter.title}
          </Link>
        ) : (
          <span className="text-sm text-gray-400" />
        )}
      </div>
    </nav>
  );
}

interface RelatedListProps {
  posts: Post[];
  title?: string;
}

export function RelatedList({ posts, title = "相关文章" }: RelatedListProps) {
  if (posts.length === 0) return null;
  return (
    <aside className="mt-10 pt-8 border-t border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {title}
      </h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/articles/${post.slug}`}
              className="text-gray-600 hover:text-blue-600"
            >
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

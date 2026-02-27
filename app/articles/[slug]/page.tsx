import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getPostSlugs,
  getPostBySlug,
  markdownToHtml,
  getPrevNextPosts,
  getRelatedPosts,
} from "@/lib/markdown";
import ArticleStructuredData from "@/components/ArticleStructuredData";
import { PrevNext, RelatedList } from "@/components/RelatedPosts";
import AdSlot from "@/components/AdSlot";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://geo-info.example.com";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const title = post.frontmatter.title;
  const description = post.frontmatter.description;
  const url = `${SITE_URL}/articles/${slug}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.frontmatter.date,
      section: post.frontmatter.category,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const html = await markdownToHtml(post.content);
  const { prev, next } = getPrevNextPosts(slug);
  const related = getRelatedPosts(slug, post.frontmatter.category);
  return (
    <>
      <ArticleStructuredData post={post} slug={slug} />
      <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-8">
        <article className="prose prose-gray max-w-none">
        <header className="mb-8">
          <nav aria-label="面包屑" className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-700">
              首页
            </Link>
            <span className="mx-1">/</span>
            <Link
              href={`/topics/${encodeURIComponent(post.frontmatter.category)}`}
              className="hover:text-gray-700"
            >
              {post.frontmatter.category}
            </Link>
            <span className="mx-1">/</span>
            <span className="text-gray-700">{post.frontmatter.title}</span>
          </nav>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            ← 返回首页
          </Link>
        <AdSlot id="ad-article-top" label="广告" className="my-6" />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
          {post.frontmatter.title}
        </h1>
        <p className="mt-2 text-gray-600">
          {post.frontmatter.date} ·{" "}
          <Link
            href={`/topics/${encodeURIComponent(post.frontmatter.category)}`}
            className="hover:text-blue-600 hover:underline"
          >
            {post.frontmatter.category}
          </Link>
        </p>
      </header>
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <AdSlot id="ad-article-mid" label="广告" className="my-6" />
      <PrevNext prev={prev} next={next} />
      <AdSlot id="ad-article-bottom" label="广告" className="my-6" />
      <RelatedList posts={related} />
    </article>
        <aside className="hidden lg:block">
          <AdSlot id="ad-article-sidebar" label="广告" className="sticky top-20" />
        </aside>
      </div>
    </>
  );
}

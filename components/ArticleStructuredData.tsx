import type { Post } from "@/lib/markdown";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://geo-info.example.com";

interface Props {
  post: Post;
  slug: string;
}

export default function ArticleStructuredData({ post, slug }: Props) {
  const url = `${BASE_URL}/articles/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      "@type": "Organization",
      name: "GEO 资讯",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "GEO 资讯",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.frontmatter.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: post.frontmatter.category,
        item: `${BASE_URL}/topics/${encodeURIComponent(post.frontmatter.category)}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.frontmatter.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
    </>
  );
}

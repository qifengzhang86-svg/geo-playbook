import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://geo-info.example.com";

export const metadata: Metadata = {
  title: {
    default: "GEO Playbook | 生成式引擎优化",
    template: "%s | GEO Playbook",
  },
  description:
    "分享生成式引擎优化（GEO）专业知识，涵盖 AI 搜索、LLM 引用与内容策略。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: SITE_URL,
    siteName: "GEO Playbook",
    title: "GEO Playbook | 生成式引擎优化",
    description:
      "分享生成式引擎优化（GEO）专业知识，涵盖 AI 搜索、LLM 引用与内容策略。",
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

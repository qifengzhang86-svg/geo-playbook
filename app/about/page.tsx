import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
  description:
    "GEO Playbook 专注于分享生成式引擎优化（GEO）领域的专业知识与行业动态。",
};

export default function AboutPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        关于本站
      </h1>
      <p className="text-gray-600 leading-relaxed">
        GEO Playbook 专注于分享生成式引擎优化（Generative Engine Optimization，GEO）领域的专业知识与行业动态，帮助 SEO 从业者、内容运营与营销人员理解并适应 AI 搜索时代的内容策略。
      </p>
      <p className="text-gray-600 leading-relaxed">
        本站内容涵盖 GEO 基础概念、策略与案例、工具与实操以及行业动态，力求提供准确、可操作的信息，便于读者在生成式搜索场景下提升内容可见性与引用率。
      </p>
      <p className="text-gray-600 leading-relaxed">
        如有合作或投稿意向，欢迎通过联系页面与我们沟通。
      </p>
    </div>
  );
}

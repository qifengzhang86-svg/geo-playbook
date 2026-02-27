import React from "react";
import Link from "next/link";
import { BookOpen, TrendingUp, Cpu, ArrowRight } from "lucide-react";

const HomePage = () => {
  const latestPosts = [
    {
      id: 1,
      title:
        "GEO 基础：如何让你的内容被 Perplexity 和 ChatGPT Search 引用？",
      excerpt:
        "传统 SEO 正在失效，生成式引擎优化 (GEO) 才是未来的流量红利。本文详解 AI 搜索的工作原理及内容优化的三大核心原则。",
      category: "实操指南",
      date: "2026-02-26",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Google AI Overviews (SGE) 算法大更新：实体构建的重要性",
      excerpt:
        "最新观察发现，Google AI 概览更倾向于引用具备明确“实体 (Entity)”结构的内容。如何通过结构化数据提升被抓取概率？",
      category: "算法动态",
      date: "2026-02-20",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "2026 年必备的 5 款 AI 内容检测与反侦察工具评测",
      excerpt:
        "在这个 AI 生成内容泛滥的时代，如何确保你的原创内容不被降权？我们评测了目前市面上主流的几款工具。",
      category: "工具评测",
      date: "2026-02-15",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "语义连贯性 (Semantic Coherence) 在 GEO 中的实战应用",
      excerpt:
        "大模型更看重上下文的逻辑而非单纯的关键词堆砌。学习如何组织你的段落，让 AI 认为你的文章最具权威性。",
      category: "进阶策略",
      date: "2026-02-10",
      readTime: "12 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 border-b border-gray-100">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 mb-8 ring-1 ring-inset ring-blue-600/20 shadow-sm animate-fade-in">
            <TrendingUp className="w-4 h-4 mr-2 shrink-0" />
            抢占 AI 搜索时代的流量红利
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[1.1] text-balance">
            让您的品牌
            <br className="hidden sm:block" />
            成为 AI 推荐的
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              唯一答案
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            在这个“不搜即得”的零点击时代，传统的 SEO 正在失效。
            <strong className="text-gray-900">GEO (生成式引擎优化)</strong> 是中小企业反超大厂的新基建，
            让您的产品在 Deepseek 和 ChatGPT Search 中赢得头等舱位。
          </p>
        </div>
      </section>

      {/* GEO Value Section for SMEs */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              为什么营销负责人必须拥抱 GEO？
            </h2>
            <p className="text-gray-500 text-lg">
              根据 2026 年行业研究，超过 60% 的商业决策正由生成式 AI 辅助完成。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              {
                title: "大幅降低获客成本",
                desc: "AI 总结替代了昂贵的竞价排名，通过优质内容赢得 AI 的“免费”推荐。",
                icon: "💰",
              },
              {
                title: "抢占第一提及权重",
                desc: "在 AI 的对比回答中，确保您的品牌始终处于第一梯队，构建绝对竞争优势。",
                icon: "🎯",
              },
              {
                title: "应对搜索流量重组",
                desc: "随着传统点击率下滑，GEO 确保即使没有点击，您的品牌价值也已直达用户神经。",
                icon: "🚀",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Strategy Section - GEO Engine */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                GEO 核心增长引擎
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "引用率优化 (Citation Optimization)",
                    desc: "通过“事实+观点”的结构化改写，使您的内容更易被 RAG 模型检索并标注为核心引文。",
                  },
                  {
                    title: "权威度建模 (Authority Modeling)",
                    desc: "利用专家语调和非对称信息差，在 AI 的训练语料中建立“行业定义者”的品牌形象。",
                  },
                  {
                    title: "深度链接引导 (Deep Link Strategy)",
                    desc: "优化核心转化页面的语义结构，引导 AI 在生成的回答中直接附带产品落地页链接。",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full aspect-square bg-gradient-to-br from-blue-500 to-indigo-700 rounded-3xl p-1 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8 text-white">
                <div className="space-y-6 text-center">
                  <Cpu className="w-16 h-16 mx-auto mb-4 animate-pulse" />
                  <p className="text-xl font-medium">正在实时演练 GEO 策略...</p>
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-xl text-left text-xs font-mono">
                    <div className="text-blue-200">{"// 生成式引擎优化实战"}</div>
                    <div>const score = calculateGEOWeight(brandContent);</div>
                    <div className="text-green-300">{"// 提升引用概率 +42%"}</div>
                    <div>pushToVectorDatabase(optimizedNodes);</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              实战案例与最新洞察
            </h2>
            <p className="text-gray-500">追踪大模型推荐机制的最佳路径</p>
          </div>
          <Link
            href="/topics"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:border-blue-200 transition-all"
          >
            查看全部分类
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              href="/articles/what-is-geo"
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:border-blue-100 transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/10">
                  {post.category}
                </span>
                <span className="text-xs font-medium text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">
                  深度阅读 · {post.readTime}
                </span>
                <span className="text-sm font-bold text-blue-600 flex items-center gap-1.5 transform group-hover:translate-x-1 transition-transform">
                  阅读全文
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* GEO FAQ Section */}
      <section className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              GEO 常见问题解答
            </h2>
            <p className="text-gray-500 text-lg">
              关于生成式引擎优化的核心概念与入门指导
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "什么是 GEO（生成式引擎优化）？",
                answer: "GEO (Generative Engine Optimization) 是指针对人工智能助手（如 DeepSeek、Kimi、ChatGPT 等）进行内容优化的实践。与传统 SEO 追求搜索结果页面的点击率不同，GEO 的核心目标是让您的内容被 AI 引擎准确理解并作为权威信息源直接在生成式回答中引用。",
              },
              {
                question: "为什么中小企业需要进行 GEO 优化？",
                answer: "随着 AI 搜索普及，用户的购买习惯正在向“直接询问 AI”转变，传统搜索引擎的点击率大幅下降。通过 GEO 优化，中小企业可以在回答长尾与专业问题时卡位第一提及权重，从而以极低的获客成本获取意图明确的高质量流量，实现对大厂的反超。",
              },
              {
                question: "GEO 优化的核心策略有哪些？",
                answer: "根据普林斯顿大学的 GEO-BENCH 研究，最有效的三大策略包括：整合最新的行业数据和统计信息（提升42%的可见性），增加行业专家或领袖的权威引语（提升38%），以及在内容中明确引用可靠来源如研报或官方数据（提升34%）。这些策略直接迎合了 RAG（检索增强生成）系统对事实的偏好。",
              },
              {
                question: "企业该如何开始实践 GEO？",
                answer: "建议首先从重构内容格式（使用清晰的标题层级、项目符号和表格）入手，注入真实统计数据。其次，针对长尾的自然语言提问（从社群或客服工单中收集）编写专门的回答。同时，在国内高权重的三方平台（如知乎、微信公众号、小红书）进行多渠道分发，以建立强大的信任源。",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group p-6 bg-gray-50 border border-gray-100 rounded-2xl focus-within:ring-2 focus-within:ring-blue-600/50 open:bg-white open:border-blue-100 open:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg text-gray-900 focus:outline-none">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 group-open:bg-blue-50 group-open:border-blue-100 group-open:text-blue-600 group-open:rotate-180 transition-all duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 pr-12">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

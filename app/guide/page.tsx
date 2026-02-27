import type { Metadata } from "next";
import { BookOpen, TrendingUp, Search, Target, Users, Zap, LayoutTemplate, MessageSquare, Code2, Link as LinkIcon, Activity } from "lucide-react";

export const metadata: Metadata = {
    title: "实战指南：中小企业的生成式引擎优化 (GEO)",
    description: "帮助品牌在 AI 时代保持可见性并抓住新的增长机遇的 GEO 实战指南。",
};

export default function GuidePage() {
    return (
        <div className="bg-white pb-24">
            {/* Article Hero */}
            <section className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 mb-6 ring-1 ring-inset ring-blue-600/20">
                        <BookOpen className="w-4 h-4 mr-2" />
                        最佳实践
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                        赢在 AI 时代：中小企业与营销负责人的<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            生成式引擎优化 (GEO)
                        </span> 实战指南
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        随着大型语言模型（LLM）和人工智能助手的普及，传统搜索引擎正在经历一场革命。本指南将带您全面了解 GEO，帮助您的品牌在 AI 时代保持可见性并抓住新的增长机遇。
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20 text-gray-800">

                {/* Section 1 */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                            <Search className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">一、 GEO 基础概念</h2>
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p>
                            <strong className="text-gray-900">生成式引擎优化（GEO）</strong>是指通过创建和优化内容，使其出现在
                            <span className="font-semibold text-blue-600 bg-blue-50 px-1 py-0.5 rounded mx-1">DeepSeek</span>、
                            <span className="font-semibold text-blue-600 bg-blue-50 px-1 py-0.5 rounded mx-1">豆包</span>、
                            <span className="font-semibold text-blue-600 bg-blue-50 px-1 py-0.5 rounded mx-1">Kimi 智能助手</span>、
                            <span className="font-semibold text-blue-600 bg-blue-50 px-1 py-0.5 rounded mx-1">文心一言</span>
                            等人工智能生成回复中的实践过程。
                        </p>
                        <div className="mt-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                            <p className="mb-0 text-gray-700 italic">
                                与传统搜索引擎优化（SEO）追求“搜索结果页面（SERP）顶部的可点击链接”不同，GEO 的核心目标是成为<strong>被 AI 引擎准确理解、提取并作为权威信息源引用的对象</strong>。
                            </p>
                        </div>
                        <p className="mt-6">
                            在 AI 时代，您发布的每一篇图文、常见问题解答或短视频不仅是营销内容，更是 AI 的“训练语料”。如果大模型不了解或不信任您的品牌，它们就不会在生成答案时引用您，您的潜在客户也就永远无法发现您的存在。
                        </p>
                    </div>
                </section>

                {/* Section 2 */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">二、 理论基础：普林斯顿大学的 GEO 研究</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                        GEO 并非空穴来风，其背后有严谨的学术支撑。普林斯顿大学联合佐治亚理工学院等机构开展了针对 GEO 的开创性研究，并发布了 <strong>GEO-BENCH</strong> 基准测试（该测试的结论同样适用于国内主流大模型的逻辑）。
                    </p>
                    <p className="text-gray-600 mb-8">
                        研究发现，传统的 SEO 策略（如简单的关键词堆砌）在 AI 引擎中几乎无效，甚至会导致大模型的“降权”。相反，通过特定的内容优化策略，可以将品牌在 AI 回复中的<strong>可见性提升 30%-40%</strong>。
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-6">三种被证实最有效的核心策略：</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-3xl font-black text-blue-600">+42%</span>
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">提升</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">整合统计数据</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                在内容中加入最新的行业数据、研究发现和量化见解。AI 引擎在生成答案时，高度优先考虑事实性和可验证的信息。
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-3xl font-black text-indigo-600">+38%</span>
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">提升</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">增加权威引语</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                加入行业领袖、研究人员或专家的直接引语。大模型将其视为高可信度内容的信号。
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-3xl font-black text-violet-600">+34%</span>
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">提升</span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">引用可靠来源</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                在内容中明确引用白皮书、行业研报或官方数据，因为 AI 偏好透明且来源清晰的内容。
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                            <Activity className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">三、 本土 AI 搜索的最新市场数据</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                        国内市场数据的急剧变化表明，向 AI 搜索的转型已不是“未来趋势”，而是“正在发生”的现实：
                    </p>
                    <div className="space-y-4">
                        <div className="p-6 bg-white border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-2xl flex gap-4">
                            <div className="mt-1 flex-shrink-0">
                                <Users className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">AI 助手普及率狂飙</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    根据 QuestMobile 2025 年度报告，国内 AI 原生应用月活已达 <strong>3.34 亿</strong>，整体移动端 AI 应用用户规模突破 <strong>7.22 亿</strong>；DeepSeek、豆包、Kimi、文心一言稳居第一梯队，日均问答与检索请求量超 <strong>50 亿次</strong>。
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-2xl flex gap-4">
                            <div className="mt-1 flex-shrink-0">
                                <Zap className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">传统搜索流量面临重塑</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    百度移动搜索结果中 <strong>超 64% 由 AI 生成</strong>，首条结果富媒体覆盖率达 70%。传统搜索中大量查询已演变为“零点击”（Zero-click）体验，用户在顶部 AI 概览中就能获取答案，传统网页自然点击率持续被挤压。
                                </p>
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] rounded-2xl flex gap-4">
                            <div className="mt-1 flex-shrink-0">
                                <Target className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">种草与决策链路缩短</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    用户习惯从“在搜索引擎找网页”转向“向 AI 助手提问”或“在小红书、抖音等带 AI 搜索的社区直接看总结”。年轻一代消费者 <strong>超 70%</strong> 的消费决策依赖对话式 AI 推荐。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600 shrink-0">
                            <LayoutTemplate className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">四、 对企业营销的影响</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8">
                        AI 引擎的崛起对企业的营销战略、预算分配和流量转化带来了深远影响：
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <li className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-3 text-lg">流量质量重于数量</h4>
                            <p className="text-sm text-gray-600">
                                虽然 GEO 带来的总访客数量可能少于传统 SEO，但触达的用户具有极高的明确意图。AI 已完成前期筛选，这类流量转化的概率显著提升。
                            </p>
                        </li>
                        <li className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-3 text-lg">内容生态的闭环挑战</h4>
                            <p className="text-sm text-gray-600">
                                国内大模型训练与检索高度依赖知乎、微信公众号、小红书、百家号等平台的高质量语料，企业必须在这些“高权重”平台建立信任源。
                            </p>
                        </li>
                        <li className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-3 text-lg">营销预算与重心转移</h4>
                            <p className="text-sm text-gray-600">
                                公域流量见顶后，预算将向优质内容生产与私域流量池精细化运营倾斜；企业急需“懂 AI 逻辑、能为大模型抓取做优化”的新型人才。
                            </p>
                        </li>
                    </ul>
                </section>

                {/* Section 5 */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-600">五、 企业如何开始实践 GEO？</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-10">
                        对于中小企业来说，开始实践 GEO 需要结合内容策略和国内全渠道分发。以下是切实可行的 5 个关键步骤：
                    </p>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                        {/* Step 1 */}
                        <div className="relative flex items-start md:justify-center">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">1. 建立高质量内容 (E-E-A-T)</h4>
                                <p className="text-gray-600 text-sm">AI 模型更偏好经验、专业性、权威性和信任度高的来源。</p>
                            </div>
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-100 text-blue-600 font-bold shadow-sm">
                                1
                            </div>
                            <div className="w-full md:w-1/2 pl-12 md:pl-12">
                                <div className="md:hidden mb-4">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">1. 建立高质量内容 (E-E-A-T)</h4>
                                    <p className="text-gray-600 text-sm mb-4">AI 模型更偏好经验、专业性、权威性和信任度高的来源。</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                    <strong className="block text-gray-900 mb-1">重构内容格式：</strong>
                                    <span className="text-sm text-gray-600 block mb-3">遵循“一段一个核心观点”，用清晰标题层级、项目符号、表格，方便 RAG 快速解析。</span>
                                    <strong className="block text-gray-900 mb-1">注入硬核元素：</strong>
                                    <span className="text-sm text-gray-600 block">产品介绍中整合真实统计数据、专家评价与第三方权威报告引用。</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex items-start md:justify-center">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-left">
                                    <strong className="block text-gray-900 mb-1">解答真实问题：</strong>
                                    <span className="text-sm text-gray-600 block">收集社群、客服工单、知乎/小红书的真实提问，针对性创作长尾问题解答内容。</span>
                                </div>
                            </div>
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-100 text-indigo-600 font-bold shadow-sm">
                                2
                            </div>
                            <div className="w-full md:w-1/2 pl-12 md:pl-12">
                                <div className="mb-4">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">2. 迎合对话式与长尾意图</h4>
                                    <p className="text-gray-600 text-sm mb-4 md:mb-0">用户使用 AI 的提问方式更偏向自然语言（如从“CRM软件”变为“50人电商公司适合用什么CRM系统”）。</p>
                                </div>
                                <div className="md:hidden bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-left">
                                    <strong className="block text-gray-900 mb-1">解答真实问题：</strong>
                                    <span className="text-sm text-gray-600 block">收集社群、客服工单、知乎/小红书的真实提问，针对性创作长尾问题解答内容。</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex items-start md:justify-center">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">3. 技术实施与机器可读性</h4>
                            </div>
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-violet-100 text-violet-600 font-bold shadow-sm">
                                3
                            </div>
                            <div className="w-full md:w-1/2 pl-12 md:pl-12">
                                <div className="md:hidden mb-4">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">3. 技术实施与机器可读性</h4>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                    <strong className="block text-gray-900 mb-1">结构化数据与清晰语义：</strong>
                                    <span className="text-sm text-gray-600 block mb-3">保持网页 HTML 结构清晰（如独立 FAQ 模块），帮助大模型爬虫理解上下文。</span>
                                    <strong className="block text-gray-900 mb-1">采用 llms.txt 标准：</strong>
                                    <span className="text-sm text-gray-600 block">在网站根目录配置 llms.txt，向 AI 代理明确核心知识提取规则。</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative flex items-start md:justify-center">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-left">
                                    <strong className="block text-gray-900 mb-1">高权重渠道布局：</strong>
                                    <span className="text-sm text-gray-600 block mb-3">深耕知乎、微信公众号、小红书、百家号、B站，这些内容被 AI 优先引用概率更高。</span>
                                    <strong className="block text-gray-900 mb-1">构建联合引用：</strong>
                                    <span className="text-sm text-gray-600 block">让品牌在行业盘点中与头部竞品并列，向大模型释放强语义关联信号。</span>
                                </div>
                            </div>
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-fuchsia-100 text-fuchsia-600 font-bold shadow-sm">
                                4
                            </div>
                            <div className="w-full md:w-1/2 pl-12 md:pl-12">
                                <div className="mb-4">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">4. 建立多平台与联合引用</h4>
                                    <p className="text-gray-600 text-sm mb-4 md:mb-0">国内 AI 引擎的知识来源不局限于企业官网。</p>
                                </div>
                                <div className="md:hidden bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-left">
                                    <strong className="block text-gray-900 mb-1">高权重渠道布局：</strong>
                                    <span className="text-sm text-gray-600 block mb-3">深耕知乎、微信公众号、小红书、百家号、B站，这些内容被 AI 优先引用概率更高。</span>
                                    <strong className="block text-gray-900 mb-1">构建联合引用：</strong>
                                    <span className="text-sm text-gray-600 block">让品牌在行业盘点中与头部竞品并列，向大模型释放强语义关联信号。</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="relative flex items-start md:justify-center">
                            <div className="hidden md:block w-1/2 pr-12 text-right">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">5. 追踪可见性并持续迭代</h4>
                                <p className="text-gray-600 text-sm">GEO 效果追踪与传统 SEO 排名不同。</p>
                            </div>
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-rose-100 text-rose-600 font-bold shadow-sm">
                                5
                            </div>
                            <div className="w-full md:w-1/2 pl-12 md:pl-12">
                                <div className="md:hidden mb-4">
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">5. 追踪可见性并持续迭代</h4>
                                    <p className="text-gray-600 text-sm mb-4">GEO 效果追踪与传统 SEO 排名不同。</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                    <strong className="block text-gray-900 mb-1">手动交叉审计：</strong>
                                    <span className="text-sm text-gray-600 block mb-3">定期在主流大模型输入行业核心问题，观察品牌提及率、情感倾向与竞品表现。</span>
                                    <strong className="block text-gray-900 mb-1">结合国内数据工具：</strong>
                                    <span className="text-sm text-gray-600 block">用 5118、站长之家等或调用 API 批量测试提及率与展示份额。</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}

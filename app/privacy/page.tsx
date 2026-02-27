import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "GEO Playbook 网站的隐私政策与 Cookie 使用说明。",
};

export default function PrivacyPage() {
  return (
    <div className="space-y-6 max-w-2xl prose prose-gray">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        隐私政策
      </h1>
      <p className="text-gray-600 leading-relaxed">
        本页面说明 GEO Playbook（本站）如何收集、使用与保护您的信息。使用本站即表示您同意本政策。
      </p>
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mt-6">
          信息收集
        </h2>
        <p className="text-gray-600 leading-relaxed">
          本站为静态内容站点，不要求登录。若您通过联系表单或邮件与我们沟通，我们仅会使用您提供的联系信息进行回复，不会用于其他用途。
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mt-6">
          Cookie 与第三方服务
        </h2>
        <p className="text-gray-600 leading-relaxed">
          本站可能使用 Google AdSense 等广告服务。这些服务会使用 Cookie 与类似技术以展示广告、衡量效果。您可通过浏览器设置管理或拒绝 Cookie。若您位于欧盟等地区，我们会在使用非必要 Cookie 前征得同意（如通过 Cookie 横幅）。
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mt-6">
          数据安全与保留
        </h2>
        <p className="text-gray-600 leading-relaxed">
          我们采取合理措施保护您提供的信息。未经您同意，我们不会向第三方出售您的个人信息。
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mt-6">
          政策更新
        </h2>
        <p className="text-gray-600 leading-relaxed">
          我们可能不定期更新本隐私政策，更新后的版本将发布于此页。继续使用本站即视为接受更新后的政策。
        </p>
      </section>
      <p className="text-sm text-gray-500 pt-4">
        如有疑问，请通过本站「联系」页面与我们沟通。
      </p>
    </div>
  );
}

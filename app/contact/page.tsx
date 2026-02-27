import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系",
  description: "联系 GEO Playbook：问题、建议或投稿。",
};

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        联系
      </h1>
      <p className="text-gray-600 leading-relaxed">
        如有问题、建议或投稿意向，欢迎通过以下方式与我们联系。
      </p>
      <p className="text-gray-600 leading-relaxed">
        本站暂无对外邮箱，后续将在此页更新联系渠道。您也可通过本站社交媒体（如有）留言。
      </p>
    </div>
  );
}

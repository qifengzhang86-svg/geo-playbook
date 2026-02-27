import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-2 sm:gap-4 mb-6 md:mb-0">
            <span className="text-xl font-bold text-gray-900">GEO Playbook</span>
            <span className="text-sm text-gray-500 border-l border-gray-300 pl-4 hidden sm:inline">
              聚焦生成式引擎优化
            </span>
          </div>
          <nav
            className="flex flex-wrap justify-center md:justify-end gap-6"
            aria-label="页脚导航"
          >
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              关于我们
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              隐私政策
            </Link>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Twitter (X)
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-100 pt-8 flex justify-center">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} GEO Playbook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

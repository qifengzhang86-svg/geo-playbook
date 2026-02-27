"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/guide", label: "实战指南" },
  { href: "/articles", label: "GEO 资讯" },
  { href: "https://generative-engines.com/GEO/", label: "理论基础", external: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="flex-shrink-0 flex items-center font-extrabold text-xl tracking-tight"
            aria-label="GEO Playbook 首页"
          >
            <span className="text-blue-600">GEO</span>
            <span className="text-indigo-600 ml-1.5">Playbook</span>
          </Link>

          {/* 桌面端导航 */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="主导航"
          >
            {navItems.map(({ href, label, external }) => (
              external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  {label}
                </Link>
              )
            ))}
          </nav>

          {/* 桌面端订阅按钮 */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm"
            >
              订阅更新
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="打开菜单"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* 移动端抽屉菜单 */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/20"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-full max-w-xs bg-white shadow-xl border-l border-gray-200 transform transition-transform duration-200 ease-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center h-16 px-4 border-b border-gray-100">
          <span className="font-extrabold text-lg">
            <span className="text-blue-600">GEO</span>
            <span className="text-indigo-600 ml-1.5">Playbook</span>
          </span>
          <button
            type="button"
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="关闭菜单"
            onClick={() => setMobileOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1" aria-label="主导航">
          {navItems.map(({ href, label, external }) => (
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-600 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            )
          ))}
          <Link
            href="/contact"
            className="mx-4 mt-4 py-3 rounded-full text-center text-sm font-medium text-white bg-gray-900 hover:bg-gray-800"
            onClick={() => setMobileOpen(false)}
          >
            订阅更新
          </Link>
        </nav>
      </div>
    </header>
  );
}

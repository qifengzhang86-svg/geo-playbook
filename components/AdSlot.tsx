interface AdSlotProps {
  id?: string;
  className?: string;
  label?: string;
}

/**
 * 广告位占位组件。日后可在此插入 AdSense 等脚本。
 * 通过 id 与 className 便于定位与样式定制。
 */
export default function AdSlot({
  id = "ad-slot",
  className = "",
  label = "广告",
}: AdSlotProps) {
  return (
    <div
      id={id}
      role="complementary"
      aria-label={label}
      className={`min-h-[90px] flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200 text-gray-500 text-sm ${className}`}
    >
      {label}
    </div>
  );
}

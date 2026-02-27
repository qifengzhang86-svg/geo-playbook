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
  // 正在申请 Google AdSense，临时隐藏所有广告位
  return null;
}

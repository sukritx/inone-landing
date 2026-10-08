import type { ReactNode } from "react";
import { MessageIcon } from "@/components/icons";
import { site } from "@/lib/site";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line focus-visible:ring-offset-2";

export function LineCta({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={site.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} bg-line px-7 py-3.5 text-base text-white shadow-[0_18px_36px_-18px_rgba(6,199,85,0.6)] hover:bg-line-hover sm:text-[17px] ${className}`}
    >
      <MessageIcon className="h-5 w-5" />
      {children ?? `แอด LINE ${site.lineId}`}
    </a>
  );
}

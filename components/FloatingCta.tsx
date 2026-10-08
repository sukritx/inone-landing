"use client";

import { useEffect, useState } from "react";
import { MessageIcon } from "@/components/icons";
import { site } from "@/lib/site";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-lg transition-all duration-300 lg:hidden ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={site.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-sm bg-line px-4 py-3 text-sm font-bold text-white shadow-[0_12px_24px_-12px_rgba(6,199,85,0.6)] transition-colors hover:bg-line-hover"
      >
        <MessageIcon className="h-4 w-4" />
        แอด LINE {site.lineId}
      </a>
    </div>
  );
}

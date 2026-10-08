import type { ReactNode } from "react";

export default function SectionIntro({
  title,
  description,
  tone = "light",
}: {
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={`border-t pt-7 md:pt-9 ${
        isDark ? "border-white/15" : "border-ink/15"
      }`}
    >
      <div className="grid items-start gap-5 md:grid-cols-12 md:gap-8">
        <h2
          className={`text-3xl leading-[1.14] font-black tracking-tight text-balance md:col-span-7 md:text-[2.6rem] ${
            isDark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`max-w-prose text-base leading-relaxed md:col-span-5 md:mt-2 ${
              isDark ? "text-white/60" : "text-ink/60"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

import { LineCta } from "@/components/CtaButtons";
import { site } from "@/lib/site";

const trustPoints = [
  "ปรึกษาฟรี ไม่มีค่าใช้จ่าย",
  "ไม่มีข้อผูกมัด",
  "ให้บริการแล้ว 170+ ธุรกิจ",
  "ซัพพอร์ตภาษาไทย / อังกฤษ",
  "ไม่ต้องมีพื้นฐานเทคนิค",
  "Google Partner ที่ได้รับการรับรอง",
];

const planSteps = [
  { label: "วิเคราะห์ธุรกิจและคู่แข่งในพื้นที่", state: "done" },
  { label: "ปรับ Google Business Profile ครบทุกช่อง", state: "done" },
  { label: "วางแผน SEO + โฆษณาครบทุกช่องทาง", state: "done" },
  { label: "กำหนดคีย์เวิร์ดและกลุ่มเป้าหมายท้องถิ่น", state: "active" },
  { label: "เริ่มงานทันทีหลังคุณอนุมัติแผน", state: "todo" },
] as const;

const heat = [
  0.08, 0.12, 0.3, 0.62, 0.9, 1, 0.1, 0.2, 0.45, 0.78, 0.95, 0.7, 0.16, 0.35,
  0.6, 0.92, 0.85, 0.5, 0.28, 0.55, 0.8, 0.98, 0.6, 0.34, 0.4, 0.72, 0.9, 0.66,
  0.3, 0.18, 0.2, 0.42, 0.58, 0.4, 0.16, 0.08,
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(13 12 11 / 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgb(13 12 11 / 0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="container relative mx-auto px-5 pt-10 pb-16 md:px-4 lg:pt-14 lg:pb-24">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h1 className="mb-6 text-[2.35rem] leading-[1.16] font-black tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.35rem]">
              รับทำ Google Maps ให้ลูกค้าแถวร้านหาคุณเจอง่ายขึ้น
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
              เว็บไซต์มืออาชีพ + SEO + Google Maps Local SEO + โฆษณาออนไลน์
              ช่วยให้ลูกค้าหาคุณเจอง่ายขึ้น จองง่ายขึ้น และกลับมาซื้อซ้ำ —
              ปรึกษาฟรี วิเคราะห์ฟรี วางแผนฟรี
            </p>
            <div className="mb-6">
              <LineCta className="w-full sm:w-auto">
                แอด LINE {site.lineId}
              </LineCta>
            </div>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-ink/55">
              แอดแล้วส่งลิงก์ร้าน — ทีมงานประเมินและวางแผนให้ฟรี
              ทีมตอบกลับทุกวัน 08:00–17:00
            </p>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 border-t border-ink/12 py-3 text-sm font-semibold text-ink/75"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-gradient-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm border border-ink/15 bg-white shadow-[0_28px_60px_-32px_rgba(13,12,11,0.45)]">
              <div className="flex items-center justify-between gap-3 border-b border-ink/10 px-5 py-3.5">
                <p className="text-sm font-bold text-ink">แผนการตลาด 30 วัน</p>
                <span className="border border-ink/15 px-2 py-0.5 text-[10px] font-bold tracking-[0.18em] text-ink/45 uppercase">
                  ตัวอย่าง
                </span>
              </div>
              <ul className="divide-y divide-ink/8">
                {planSteps.map((step, index) => (
                  <li key={step.label} className="flex items-center gap-4 px-5 py-3.5">
                    <span className="text-[11px] font-black tabular-nums text-ink/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-sm ${
                        step.state === "todo"
                          ? "text-ink/40"
                          : "font-medium text-ink/75"
                      }`}
                    >
                      {step.label}
                    </span>
                    {step.state === "done" && (
                      <span className="h-2 w-2 shrink-0 bg-gradient-brand" />
                    )}
                    {step.state === "active" && (
                      <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand" />
                    )}
                    {step.state === "todo" && (
                      <span className="h-2 w-2 shrink-0 border border-ink/25" />
                    )}
                  </li>
                ))}
              </ul>
              <div className="border-t border-ink/10 p-5">
                <div className="mb-3 flex items-baseline justify-between">
                  <p className="text-xs font-bold text-ink/60">
                    รายงานอันดับ Heatmap
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.18em] text-ink/35 uppercase">
                    ก่อน → หลัง
                  </p>
                </div>
                <div className="grid grid-cols-6 gap-1">
                  {heat.map((opacity, index) => (
                    <span
                      key={index}
                      className="heat-cell aspect-square rounded-[2px]"
                      style={{
                        backgroundColor: `rgb(255 84 1 / ${opacity})`,
                        animationDelay: `${index * 14}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-ink/15 pt-4 text-xs text-ink/50">
              <span>ตัวอย่างแผนงานและรายงานผลที่คุณจะได้รับฟรี</span>
              <span className="font-bold tracking-[0.14em] uppercase">
                ไม่มีข้อผูกมัด
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

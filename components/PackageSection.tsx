import { CheckIcon, XIcon, ZapIcon } from "@/components/icons";
import { LineCta } from "@/components/CtaButtons";
import SectionIntro from "@/components/SectionIntro";

const includes = [
  "ดูแล 30 วันเต็ม",
  "รวมเว็บไซต์ธุรกิจ 1 หน้า",
  "อันดับไม่ดีขึ้น ดูแลต่อให้ฟรีอีก 30 วัน",
  "โปรพิเศษสำหรับลูกค้าเก่าที่ดูแลต่อเนื่อง",
];

const steps = [
  "แอด LINE แล้วส่งลิงก์ร้าน",
  "รับผลประเมินฟรี",
  "ทีมลงมือดูแล 30 วัน",
  "ดูผลก่อน–หลัง",
];

export default function PackageSection() {
  return (
    <section id="package" className="bg-ink py-16 text-white md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            tone="dark"
            title="แพ็กเกจ Full Local SEO Advance"
            description="ให้ลูกค้าใกล้ร้านเจอคุณบน Google Maps — เริ่มต้นดูแลแบบครบวงจร 30 วัน"
          />
          <div className="mt-12 rounded-sm border border-white/12 bg-white/[0.04]">
            <div className="grid lg:grid-cols-2">
              <div className="p-7 md:p-10">
                <div className="mb-8 flex flex-wrap items-end gap-x-4 gap-y-2 border-b border-white/12 pb-7">
                  <p className="text-5xl font-black tracking-tight tabular-nums md:text-6xl">
                    ฿9,500
                  </p>
                  <p className="pb-2 text-sm text-white/50">
                    ต่อ 1 สาขา · ดูแล 30 วัน
                  </p>
                </div>
                <ul className="mb-7">
                  {includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3.5 border-b border-white/10 py-3.5 text-sm leading-relaxed text-white/75 md:text-base"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 -translate-y-px bg-gradient-brand" />
                      {item}
                    </li>
                  ))}
                  <li className="flex items-baseline gap-3.5 border-b border-white/10 py-3.5 text-sm leading-relaxed text-white/40 md:text-base">
                    <XIcon className="h-3.5 w-3.5 shrink-0 text-white/35" />
                    ไม่รวมงบโฆษณาที่จ่ายให้ Google โดยตรง
                  </li>
                </ul>
                <div className="mb-8 flex items-start gap-3 border border-brand-bright/35 bg-brand-bright/[0.07] p-4">
                  <ZapIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-bright" />
                  <p className="text-sm leading-relaxed text-white">
                    <span className="font-bold">สิทธิ์พิเศษ 10 ร้านแรก:</span>{" "}
                    ตั้งค่าโฆษณา Google Maps รอบร้านให้ฟรี (ไม่รวมงบโฆษณา)
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <LineCta className="w-full sm:max-w-xs">
                    จองสิทธิ์ 10 ร้านแรก
                  </LineCta>
                </div>
              </div>
              <div className="border-t border-white/12 p-7 md:p-10 lg:border-t-0 lg:border-l">
                <p className="mb-7 text-sm font-bold tracking-[0.16em] text-white/40 uppercase">
                  4 ขั้นตอน จากแชตแรกถึงรายงานผล
                </p>
                <ol>
                  {steps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-baseline gap-5 border-b border-white/10 py-4"
                    >
                      <span className="text-sm font-black text-brand-bright tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-7 flex items-baseline gap-3 text-sm leading-relaxed text-white/50">
                  <CheckIcon className="h-4 w-4 shrink-0 text-white/40" />
                  ต้องการดูแลต่อเนื่องหลังครบ 30 วัน? มีโปรพิเศษสำหรับลูกค้าเก่า —
                  สอบถามทีมงานได้เลย
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { ComponentType, ReactNode } from "react";
import { LineCta } from "@/components/CtaButtons";
import SectionIntro from "@/components/SectionIntro";
import {
  BotIcon,
  CartIcon,
  CheckIcon,
  GiftIcon,
  GlobeIcon,
  MapPinIcon,
  MegaphoneIcon,
  PaletteIcon,
  SearchIcon,
  ShareIcon,
  ShieldIcon,
} from "@/components/icons";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  items: string[];
  note?: ReactNode;
};

const localSeoItems = [
  "ปรับแต่ง Google Business Profile — เติมข้อมูลร้านให้ครบทุกช่อง",
  "วิเคราะห์คีย์เวิร์ดท้องถิ่น — หาคำที่คนแถวร้านพิมพ์ค้นจริง",
  "ตรวจร้านซ้ำ ร้านปลอม และข้อมูลผิดบนแผนที่",
  "เพิ่ม Citation ให้ธุรกิจ — ลงข้อมูลร้านบนเว็บไดเรกทอรีคุณภาพ",
  "อัปเดตรูปภาพ SEO 10 รูป — คัดรูปคุณภาพ ตั้งชื่อและเขียนคำอธิบาย",
  "โพสต์ Google Business Profile 8 โพสต์ — วางตารางและเขียนโพสต์",
  "วางแนวทางตอบรีวิวแบบมืออาชีพ",
  "วางจุดสัญญาณรอบร้าน 150 จุด — สร้างแผนที่ Google My Maps",
  "วิเคราะห์ POI จุดสำคัญรอบร้าน — หาสถานที่ที่คนในย่านรู้จัก",
  "ตั้งค่า Google Ads Radius Maps — ให้ร้านขึ้นบนแผนที่",
  "รายงานอันดับแบบ Heatmap — เทียบอันดับก่อน–หลัง",
  "ทดสอบ AI ของ Google (Gemini) — ถามแบบผู้บริโภคจริง",
  "แดชบอร์ดลูกค้า — อนุมัติงานก่อนลงจริง ถามความคืบหน้าใน LINE",
];

const services: Service[] = [
  {
    icon: GlobeIcon,
    title: "ออกแบบและพัฒนาเว็บไซต์",
    items: [
      "เว็บไซต์เฉพาะสำหรับธุรกิจของคุณ",
      "Mobile-first โหลดเร็ว รองรับทุกอุปกรณ์",
      "ฟอร์มติดต่อ / จอง / ขอใบเสนอราคา",
      "ระบบเว็บไซต์พร้อมฟีเจอร์ครบครัน",
      "อีเมลธุรกิจภายใต้ชื่อบริษัทคุณ",
      "อบรมการใช้งานเว็บไซต์ฟรี",
    ],
    note: (
      <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed font-semibold text-brand-deep">
        <GiftIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        แถมฟรี · เว็บไซต์ธุรกิจ 1 หน้า มูลค่า 5,900 บาท (สำหรับลูกค้า Local
        SEO)
      </p>
    ),
  },
  {
    icon: SearchIcon,
    title: "SEO และ AI Search",
    items: [
      "SEO สำหรับ Google",
      "Local SEO สำหรับเมืองของคุณ",
      "AI Search Optimization — ChatGPT, Gemini, Perplexity, Google AI",
      "Schema Markup",
      "Google Business Profile",
      "Keyword Research & Content Strategy",
    ],
  },
  {
    icon: MegaphoneIcon,
    title: "โฆษณาออนไลน์",
    items: [
      "Google Ads (Search, Display, YouTube)",
      "Google Ads Radius Maps",
      "Facebook Ads / Instagram Ads",
      "TikTok Ads",
      "LINE Ads",
      "โฆษณาบน Marketplace เช่น Shopee, Lazada",
      "บริหารและปรับแคมเปญเพื่อผลลัพธ์สูงสุด (ROI)",
    ],
  },
  {
    icon: PaletteIcon,
    title: "ออกแบบกราฟิกและคอนเทนต์",
    items: [
      "ออกแบบกราฟิกสำหรับโซเชียลมีเดีย",
      "กลยุทธ์คอนเทนต์",
      "ผลิตสื่อโฆษณา",
      "วิเคราะห์ Persona ของกลุ่มเป้าหมาย",
    ],
  },
  {
    icon: CartIcon,
    title: "ร้านค้าออนไลน์",
    items: [
      "สร้างร้านค้าออนไลน์",
      "เชื่อมต่อระบบชำระเงิน",
      "จัดการสินค้าและคำสั่งซื้อ",
    ],
  },
  {
    icon: ShareIcon,
    title: "โซเชียลมีเดีย",
    items: [
      "สร้าง Facebook Fan Page",
      "สร้าง YouTube Channel",
      "บริหารและดูแลโซเชียลมีเดีย",
    ],
  },
  {
    icon: BotIcon,
    title: "Automation Platform",
    items: [
      "ระบบอัตโนมัติสำหรับการตลาด",
      "ช่วยวิเคราะห์และปรับแคมเปญอัตโนมัติ",
    ],
  },
  {
    icon: ShieldIcon,
    title: "SSL, GDPR, Cookie Consent",
    items: [
      "มาตรฐานความปลอดภัยสำหรับธุรกิจในยุโรป",
      "Analytics และ Conversion Tracking",
    ],
  },
];

const caseNames = "SIGMA WELLNESS, SCN City Hotel, Bigmouthten Dental Clinic";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-paper py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            title="ทุกบริการการตลาดออนไลน์ ครบ จบ ในที่เดียว"
            description="ตั้งแต่เว็บไซต์ SEO Google Maps โฆษณา ไปจนถึงกราฟิก โซเชียลมีเดียและระบบอัตโนมัติ — ทีมเดียวดูแลทั้งหมด พร้อมรายงานผลชัดเจน"
          />

          <div className="mt-12 rounded-sm bg-ink p-7 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
              <div>
                <div className="mb-6 flex items-center gap-3.5 border-b border-white/12 pb-5">
                  <MapPinIcon className="h-6 w-6 shrink-0 text-brand-bright" />
                  <div>
                    <h3 className="text-xl font-black tracking-tight md:text-2xl">
                      Google Maps Local SEO
                    </h3>
                    <p className="mt-1 text-sm text-white/55">
                      บริการเรือธง — ให้ลูกค้าใกล้ร้านเจอคุณก่อนใครบนแผนที่
                    </p>
                  </div>
                </div>
                <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
                  {localSeoItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-bright" />
                      <span className="text-sm leading-relaxed text-white/75">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <div className="border border-white/15 p-5">
                  <p className="mb-2 text-xs font-bold tracking-[0.16em] text-white/40 uppercase">
                    ผลงานจริง
                  </p>
                  <p className="text-sm leading-relaxed font-semibold text-white">
                    {caseNames}
                  </p>
                </div>
                <div className="border border-brand-bright/35 bg-brand-bright/[0.07] p-5">
                  <p className="mb-2 text-xs font-bold tracking-[0.16em] text-brand-bright uppercase">
                    การันตี
                  </p>
                  <p className="text-sm leading-relaxed font-semibold text-white">
                    อันดับไม่ดีขึ้น ดูแลต่อให้ฟรีอีก 30 วัน
                  </p>
                </div>
                <LineCta className="w-full">รับประเมินร้านฟรี</LineCta>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-ink/15">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid gap-4 border-b border-ink/12 py-7 md:grid-cols-12 md:gap-8"
              >
                <div className="flex items-start gap-3 md:col-span-4">
                  <service.icon className="mt-1 h-5 w-5 shrink-0 text-brand-deep" />
                  <div>
                    <h3 className="text-lg leading-snug font-bold text-ink">
                      {service.title}
                    </h3>
                    {service.note}
                  </div>
                </div>
                <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2 md:col-span-8">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink/65"
                    >
                      <span className="mt-[9px] h-px w-4 shrink-0 bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

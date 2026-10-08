import Image from "next/image";
import { MessageIcon } from "@/components/icons";
import { site } from "@/lib/site";

const serviceLine = [
  "เว็บไซต์",
  "SEO",
  "AI Search",
  "Google Maps Local SEO",
  "โฆษณาออนไลน์",
  "กราฟิก",
  "ร้านค้าออนไลน์",
  "โซเชียลมีเดีย",
];

const footerLinks = [
  { label: "ติดต่อ", href: "#lead-form" },
  { label: "นโยบายความเป็นส่วนตัว", href: "#" },
  { label: "GDPR", href: "#" },
  { label: "ข้อกำหนด", href: "#" },
  { label: "โซเชียล", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14 text-white">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="inline-flex bg-paper p-4">
                <Image
                  src="/logo-black.png"
                  alt="InOne Digital"
                  width={528}
                  height={516}
                  className="h-16 w-auto"
                />
              </span>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
                {site.tagline} — ครบ จบ ในที่เดียว ปรึกษาฟรี วิเคราะห์ฟรี
                วางแผนฟรี
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="mb-4 text-xs font-bold tracking-[0.16em] text-white/40 uppercase">
                บริการของเรา
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                {serviceLine.join(" • ")}
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="mb-4 text-xs font-bold tracking-[0.16em] text-white/40 uppercase">
                ติดต่อ
              </p>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href={site.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-sm bg-line px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-line-hover"
                >
                  <MessageIcon className="h-4 w-4" />
                  แอด LINE {site.lineId}
                </a>
                <p className="text-white/45">ทีมตอบกลับ {site.hours}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <p className="text-xs text-white/40">
              Copyright © 2026 InOne Digital · All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { MessageIcon } from "@/components/icons";
import { site } from "@/lib/site";

const nav = [
  { href: "#services", label: "บริการ" },
  { href: "#process", label: "ขั้นตอน" },
  { href: "#package", label: "แพ็กเกจ" },
  { href: "#results", label: "ผลงาน" },
  { href: "#reviews", label: "รีวิว" },
  { href: "#faq", label: "คำถามที่พบบ่อย" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="h-[3px] bg-gradient-brand" />
      <div className="border-b border-ink/10 bg-paper/90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-5 md:px-4">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="relative block h-10 w-[34px] overflow-hidden">
              <Image
                src="/logo-black.png"
                alt=""
                width={528}
                height={516}
                priority
                className="h-[69.3px] w-[70.9px] max-w-none -translate-x-[18.3px]"
              />
            </span>
            <span className="text-lg font-black tracking-tight text-ink">
              InOne <span className="font-bold text-ink/45">Digital</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={site.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm bg-line px-4 py-2 text-sm font-bold text-white shadow-[0_12px_24px_-12px_rgba(6,199,85,0.6)] transition-colors hover:bg-line-hover"
            >
              <MessageIcon className="h-4 w-4" />
              แอด LINE
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

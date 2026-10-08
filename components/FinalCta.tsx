import Image from "next/image";
import { LineCta } from "@/components/CtaButtons";
import { MessageIcon } from "@/components/icons";
import { site } from "@/lib/site";

export default function FinalCta() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-24 hidden h-[480px] w-[404px] overflow-hidden opacity-[0.07] lg:block"
      >
        <Image
          src="/logo-black.png"
          alt=""
          width={528}
          height={516}
          className="h-[831px] w-[850.5px] max-w-none -translate-x-[219px]"
        />
      </div>
      <div className="container relative mx-auto px-5 md:px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl leading-[1.15] font-black tracking-tight text-balance md:text-5xl">
            ธุรกิจของคุณก็มีเว็บไซต์และแผนการตลาดแบบนี้ได้
          </h2>
          <p className="mt-6 text-xl font-bold text-brand-bright md:text-2xl">
            ปรึกษาฟรี วิเคราะห์ฟรี วางแผนฟรี
          </p>
          <p className="mt-2 text-white/60">
            ไม่มีค่าใช้จ่ายจนกว่าจะตกลงเริ่มงาน
          </p>
          <div className="mt-10">
            <LineCta className="w-full px-10 py-4 text-lg sm:w-auto">
              แอด LINE {site.lineId}
            </LineCta>
          </div>
          <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/15 pt-6 text-sm text-white/55">
            <MessageIcon className="h-4 w-4 text-line" />
            LINE {site.lineId}
            <span className="mx-2 text-white/25">·</span>
            ทีมตอบกลับ {site.hours}
          </p>
        </div>
      </div>
    </section>
  );
}

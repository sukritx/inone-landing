import { LineCta } from "@/components/CtaButtons";
import SectionIntro from "@/components/SectionIntro";

const cases = [
  {
    name: "SIGMA WELLNESS",
    industry: "ธุรกิจสุขภาพและเวลเนส",
    service: "Google Maps Local SEO",
  },
  {
    name: "SCN City Hotel",
    industry: "โรงแรมและที่พัก",
    service: "Google Maps Local SEO",
  },
  {
    name: "Bigmouthten Dental Clinic",
    industry: "คลินิกทันตกรรม",
    service: "Google Maps Local SEO",
  },
];

const industries = [
  "ร้านอาหาร",
  "คาเฟ่",
  "คลินิก",
  "คลินิกทันตกรรม",
  "โรงแรม",
  "สปา",
  "อู่ซ่อมรถ",
  "โชว์รูม",
  "ธุรกิจบริการในพื้นที่",
  "ร้านเสริมสวย",
  "ค้าปลีก",
  "B2B",
  "โรงเรียนสอนดนตรี",
  "บริษัททัวร์",
  "บริษัทก่อสร้าง",
];

export default function PortfolioSection() {
  return (
    <section id="results" className="bg-paper py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            title="ผลงานจริง หลากหลายอุตสาหกรรม"
            description="ตัวอย่างธุรกิจที่ไว้ใจให้เราดูแลการตลาดออนไลน์ และอุตสาหกรรมที่เรามีประสบการณ์ตรง"
          />
          <div className="mt-10 border-t border-ink/15">
            {cases.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-3 border-b border-ink/12 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="flex items-baseline gap-4">
                  <span className="h-2 w-2 shrink-0 -translate-y-px bg-gradient-brand" />
                  <div>
                    <p className="text-xl font-black tracking-tight text-ink md:text-2xl">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-ink/55">{item.industry}</p>
                  </div>
                </div>
                <span className="w-fit border border-ink/15 px-2.5 py-1 text-xs font-semibold text-ink/60">
                  {item.service}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-ink/15 pt-8">
            <p className="mb-5 text-sm font-bold tracking-[0.16em] text-ink/45 uppercase">
              ตัวอย่างอุตสาหกรรมที่เราดูแล
            </p>
            <div className="flex flex-wrap gap-2.5">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-sm border border-ink/15 bg-white px-3.5 py-1.5 text-sm text-ink/70"
                >
                  {industry}
                </span>
              ))}
              <span className="rounded-sm border border-ink/10 px-3.5 py-1.5 text-sm text-ink/40">
                ฯลฯ
              </span>
            </div>
          </div>
          <div className="mt-12">
            <LineCta>อยากเห็นเคสแบบธุรกิจคุณ? ทัก LINE มาคุยกัน</LineCta>
          </div>
        </div>
      </div>
    </section>
  );
}

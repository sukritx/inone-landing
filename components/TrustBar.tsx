import { site } from "@/lib/site";

const stats = [
  { value: site.claims.businesses, label: "ธุรกิจที่ขับเคลื่อนด้วยระบบของเรา" },
  { value: site.claims.retention, label: "ลูกค้าต่อสัญญากับเรา" },
  { value: site.claims.years, label: "ปีประสบการณ์การตลาดออนไลน์" },
  { value: site.claims.adSpend, label: "งบโฆษณาที่บริหาร" },
];

export default function TrustBar() {
  return (
    <section className="bg-ink py-16 text-white md:py-20">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-5xl">
          <p className="max-w-2xl text-xl leading-snug font-bold text-balance md:text-2xl">
            ได้รับความไว้วางใจจากธุรกิจทั่วยุโรปและไทย —{" "}
            <span className="text-brand-bright">ลูกค้าจริง ผลลัพธ์จริง</span>
          </p>
          <dl className="mt-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-8 border-t border-white/12 py-5"
              >
                <dt className="text-sm text-white/55 md:text-base">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-black tracking-tight tabular-nums md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-col gap-2 border-t border-white/12 pt-6 text-sm text-white/55 md:flex-row md:gap-x-10">
            <span>ปรึกษาฟรี วิเคราะห์ฟรี วางแผนฟรี — ดูแผนก่อนตัดสินใจ</span>
            <span>ทีมงานมืออาชีพดูแลตลอด {site.hours} ทุกวัน</span>
          </div>
        </div>
      </div>
    </section>
  );
}

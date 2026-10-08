import { LineCta } from "@/components/CtaButtons";
import SectionIntro from "@/components/SectionIntro";

const steps = [
  {
    title: "กรอกแบบฟอร์ม 1 นาที",
    body: "บอกข้อมูลธุรกิจและเป้าหมายของคุณผ่านแบบฟอร์มสั้น ๆ หรือแชต LINE",
  },
  {
    title: "รับผลประเมินและแผนฟรี",
    body: "ทีมงานวิเคราะห์ธุรกิจ คู่แข่ง และช่องทางที่เหมาะกับคุณ พร้อมแผนชัดเจน",
  },
  {
    title: "ตกลงแผนและเริ่มงาน",
    body: "ดูแผนก่อนตัดสินใจ ไม่มีค่าใช้จ่ายจนกว่าจะตกลงเริ่มงานด้วยกัน",
  },
  {
    title: "ทีมลงมือทำตามแผน",
    body: "ทีมงานมืออาชีพดูแลทุกช่องทาง ตั้งแต่เว็บไซต์ SEO แผนที่ ไปจนถึงโฆษณา",
  },
  {
    title: "รับรายงานผลก่อน–หลัง",
    body: "ติดตามความคืบหน้าผ่านแดชบอร์ดลูกค้า และรับรายงานผลก่อน–หลังชัดเจน",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-paper py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            title="5 ขั้นตอน จากแชตแรก สู่รายงานผลจริง"
            description="เริ่มง่าย ไม่ต้องมีความรู้เทคนิค ทีมงานดูแลให้ทุกขั้นตอน"
          />
          <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-ink/15 pt-5">
                <span className="text-sm font-black text-accent tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg leading-snug font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/60">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <LineCta>เริ่มขั้นตอนแรกเลย — ฟรี</LineCta>
          </div>
        </div>
      </div>
    </section>
  );
}

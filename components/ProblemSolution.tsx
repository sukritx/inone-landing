import { LineCta } from "@/components/CtaButtons";
import SectionIntro from "@/components/SectionIntro";

const problems = [
  "ธุรกิจของคุณหายาก ดูเก่า หรือทำให้ลูกค้าลังเล",
  "ลูกค้าที่อยู่ห่างร้านแค่ 2 กิโลเมตร ค้นหาแล้วเจอร้านคุณไหม?",
  "ยิงแอดแล้วแต่ไม่รู้ว่าคุ้มไหม",
  "มีร้านซ้ำหรือหมุดปลอมบนแผนที่แย่งลูกค้า",
  "เคยจ้างทำแล้ว แต่ไม่รู้ว่าเขาทำอะไรให้",
];

const solutions = [
  "เว็บไซต์มืออาชีพที่ทำให้ธุรกิจดูน่าเชื่อถือ",
  "SEO และ Google Maps Local SEO ให้ลูกค้าใกล้ร้านเจอคุณก่อนใคร",
  "โฆษณาที่วัดผลได้ พร้อมรายงานว่าคุ้มไหมทุกบาท",
  "ตรวจและจัดการร้านซ้ำ หมุดปลอม บนแผนที่ให้",
  "รายงานผลชัดเจนทุกขั้นตอน รู้เสมอว่าทีมทำอะไรให้",
];

export default function ProblemSolution() {
  return (
    <section id="why" className="bg-paper py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            title="ธุรกิจของคุณกำลังเจอปัญหาเหล่านี้อยู่ไหม?"
            description="เรารวบรวมปัญหาที่เจ้าของธุรกิจเจอบ่อยที่สุด จากการดูแลลูกค้ามากกว่า 170 ราย"
          />
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <ol className="border-t border-ink/15">
              {problems.map((problem, index) => (
                <li
                  key={problem}
                  className="flex items-baseline gap-5 border-b border-ink/12 py-5"
                >
                  <span className="text-sm font-black text-accent tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed text-ink/75">
                    {problem}
                  </span>
                </li>
              ))}
            </ol>
            <div className="rounded-sm bg-ink p-7 text-white md:p-9">
              <h3 className="mb-4 text-xl font-black tracking-tight md:text-2xl">
                InOne Digital แก้ให้ครบ จบในที่เดียว
              </h3>
              <p className="mb-7 leading-relaxed text-white/60">
                InOne Digital ให้บริการครบวงจรตั้งแต่เว็บไซต์ SEO Google Maps
                Local SEO โฆษณา ไปจนถึงกราฟิกและโซเชียลมีเดีย
                พร้อมรายงานผลชัดเจน และทีมดูแลใกล้ชิด
              </p>
              <ul className="mb-8">
                {solutions.map((solution) => (
                  <li
                    key={solution}
                    className="flex items-baseline gap-3.5 border-t border-white/12 py-3.5 text-sm leading-relaxed text-white/75 md:text-base"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 -translate-y-px bg-gradient-brand" />
                    {solution}
                  </li>
                ))}
              </ul>
              <LineCta className="w-full sm:w-auto">
                เริ่มจากผลประเมินฟรี
              </LineCta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

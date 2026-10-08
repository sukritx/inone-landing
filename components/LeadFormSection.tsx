import { LineCta } from "@/components/CtaButtons";
import SectionIntro from "@/components/SectionIntro";
import { site } from "@/lib/site";

export default function LeadFormSection() {
  return (
    <section id="lead-form" className="bg-paper py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            title="รับแผนการตลาดออนไลน์ฟรี"
            description="แอด LINE แล้วส่งลิงก์ร้าน ทีมงานประเมินและวางแผนให้ฟรี — ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด"
          />
          <div className="mt-10">
            <LineCta className="px-10 py-4 text-lg">
              แอด LINE {site.lineId} รับแผนฟรี
            </LineCta>
          </div>
        </div>
      </div>
    </section>
  );
}

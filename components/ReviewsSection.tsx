import { StarIcon } from "@/components/icons";
import SectionIntro from "@/components/SectionIntro";

const reviews = [
  {
    quote:
      "Local SEO และ Facebook Ads ทำงานคู่กัน ทำให้ลูกค้าจองคิวออนไลน์ง่ายขึ้น",
    name: "คุณฝ้าย",
    role: "คลินิกความงาม",
  },
  {
    quote: "การตลาดออนไลน์ครบวงจรทำให้เราได้ลูกค้าตรงกลุ่ม คุณภาพดี",
    name: "คุณนนท์",
    role: "เจ้าของบริษัทก่อสร้าง",
  },
  {
    quote:
      "ทีมงานช่วยทำทั้ง SEO และโฆษณา Google ทำให้บริษัทเราเจอลูกค้าต่างชาติบ่อยขึ้น",
    name: "คุณก้อง",
    role: "ผู้จัดการบริษัททัวร์",
  },
  {
    quote:
      "เว็บไซต์ใหม่ที่ทำพร้อมกับโฆษณาออนไลน์ ทำให้มีนักเรียนสมัครเรียนมากขึ้นทุกเดือน",
    name: "คุณมิ้นต์",
    role: "โรงเรียนสอนดนตรี",
  },
];

const stars = [0, 1, 2, 3, 4];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-paper py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-6xl">
          <SectionIntro
            title="ลูกค้าจริง ผลลัพธ์จริง"
            description="เสียงจากธุรกิจที่ให้เราดูแลการตลาดออนไลน์แบบครบวงจร"
          />
          <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="border-t border-ink/15 pt-6"
              >
                <div className="flex gap-1">
                  {stars.map((star) => (
                    <StarIcon key={star} className="h-3.5 w-3.5 text-brand" />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed text-ink/80">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-ink text-sm font-bold text-white">
                    {review.name.replace("คุณ", "").charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{review.name}</p>
                    <p className="text-xs text-ink/55">{review.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

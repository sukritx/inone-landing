import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LeadFormSection from "@/components/LeadFormSection";
import PackageSection from "@/components/PackageSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProblemSolution from "@/components/ProblemSolution";
import ProcessSection from "@/components/ProcessSection";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import SiteFooter from "@/components/SiteFooter";
import TrustBar from "@/components/TrustBar";
import { faqs } from "@/lib/faqs";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      name: "InOne Digital",
      description:
        "ให้บริการการตลาดออนไลน์ครบวงจรสำหรับทุกธุรกิจ ทั้งเว็บไซต์ SEO Google Maps Local SEO โฆษณาออนไลน์ กราฟิก ร้านค้าออนไลน์ และโซเชียลมีเดีย พร้อมปรึกษาฟรี วิเคราะห์ฟรี วางแผนฟรี",
      slogan: "การตลาดออนไลน์ครบวงจรสำหรับทุกธุรกิจ — ครบ จบ ในที่เดียว",
      telephone: "+66839755530",
      priceRange: "฿฿",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hat Yai",
        addressCountry: "TH",
      },
      areaServed: [
        { "@type": "Country", name: "Thailand" },
        { "@type": "Place", name: "Europe" },
      ],
      availableLanguage: ["th", "en"],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
      makesOffer: {
        "@type": "Offer",
        name: "แพ็กเกจ Full Local SEO Advance",
        price: "9500",
        priceCurrency: "THB",
        description:
          "ดูแล Google Maps Local SEO 30 วัน รวมเว็บไซต์ธุรกิจ 1 หน้า และการันตีอันดับไม่ดีขึ้นดูแลต่อให้ฟรีอีก 30 วัน",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <ProcessSection />
        <ServicesSection />
        <PackageSection />
        <PortfolioSection />
        <ReviewsSection />
        <LeadFormSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

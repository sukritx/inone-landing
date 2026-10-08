"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { LineCta } from "@/components/CtaButtons";
import SectionIntro from "@/components/SectionIntro";
import { faqs } from "@/lib/faqs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-4">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            title="มีคำถาม? เรามีคำตอบ"
            description="รวมคำถามที่ลูกค้าถามบ่อยที่สุดเรื่องการตลาดออนไลน์และบริการของเรา"
          />
          <div className="mt-10 border-t border-ink/15">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="border-b border-ink/12">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-base font-bold text-ink transition-colors hover:text-brand-deep md:text-lg"
                    >
                      {faq.question}
                      <ChevronDownIcon
                        className={`h-4.5 w-4.5 shrink-0 text-ink/35 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-brand-deep" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl text-sm leading-relaxed text-ink/65 md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink/60">
              ยังมีคำถามอื่นอีกไหม? ทักทีมงานได้เลย ตอบเร็วทุกวัน 08:00–17:00
            </p>
            <LineCta>แอด LINE ถามทีมงานเลย</LineCta>
          </div>
        </div>
      </div>
    </section>
  );
}

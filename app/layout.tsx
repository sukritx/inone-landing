import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import FloatingCta from "@/components/FloatingCta";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const title =
  "InOne Digital | การตลาดออนไลน์ครบวงจรสำหรับทุกธุรกิจ — เว็บไซต์ SEO Google Maps และโฆษณา";
const description =
  "InOne Digital ให้บริการการตลาดออนไลน์ครบวงจร เว็บไซต์ SEO Google Maps Local SEO โฆษณา Google และ Facebook ปรึกษาฟรี วิเคราะห์ฟรี วางแผนฟรี ไม่มีค่าใช้จ่ายจนกว่าจะตกลงเริ่มงาน";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "การตลาดออนไลน์",
    "รับทำเว็บไซต์",
    "SEO",
    "Local SEO",
    "Google Maps",
    "Google Ads",
    "Facebook Ads",
    "InOne Digital",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "th_TH",
    siteName: "InOne Digital",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-black.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
        <FloatingCta />
        <CookieConsent />
      </body>
    </html>
  );
}

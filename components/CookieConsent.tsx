"use client";

import { useSyncExternalStore } from "react";
import { ShieldIcon } from "@/components/icons";

const STORAGE_KEY = "inone-cookie-consent";
const CHANGE_EVENT = "inone-cookie-consent-change";

let memoryConsent: string | null = null;

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function getSnapshot(): string {
  if (memoryConsent) {
    return memoryConsent;
  }
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "unset";
  } catch {
    return "unset";
  }
}

function getServerSnapshot(): string {
  return "loading";
}

function setConsent(value: string) {
  memoryConsent = value;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    void 0;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (consent !== "unset") {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="การตั้งค่าคุกกี้"
      className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-xl rounded-sm border border-ink/15 bg-paper p-5 shadow-[0_28px_60px_-28px_rgba(13,12,11,0.55)] lg:right-6 lg:bottom-6 lg:left-auto lg:mx-0 lg:max-w-md"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-ink text-paper">
          <ShieldIcon className="h-5 w-5" />
        </span>
        <div>
          <p className="mb-1.5 font-bold text-ink">เราใช้คุกกี้</p>
          <p className="text-sm leading-relaxed text-ink/65">
            เราใช้คุกกี้เพื่อวิเคราะห์การใช้งานและปรับปรุงประสบการณ์ของคุณ
            สอดคล้องกับ GDPR — ดูรายละเอียดได้ที่{" "}
            <a href="#" className="font-semibold text-brand-deep hover:underline">
              นโยบายความเป็นส่วนตัว
            </a>
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
        <button
          type="button"
          onClick={() => setConsent("all")}
          className="flex-1 cursor-pointer rounded-sm bg-gradient-brand px-4 py-2.5 text-sm font-bold text-white transition-all hover:brightness-[0.97]"
        >
          ยอมรับทั้งหมด
        </button>
        <button
          type="button"
          onClick={() => setConsent("essential")}
          className="flex-1 cursor-pointer rounded-sm border border-ink/20 bg-transparent px-4 py-2.5 text-sm font-bold text-ink/75 transition-colors hover:border-ink/50 hover:text-ink"
        >
          เฉพาะที่จำเป็น
        </button>
      </div>
    </div>
  );
}

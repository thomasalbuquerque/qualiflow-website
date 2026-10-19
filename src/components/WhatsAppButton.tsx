import { site } from "@/config/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full bg-brand-green-dark text-white shadow-lg transition-transform hover:scale-105 hover:bg-brand-green md:size-16"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}

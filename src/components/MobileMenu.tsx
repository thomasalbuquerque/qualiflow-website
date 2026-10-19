"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { CtaButton } from "./CtaButton";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import { NavLinks } from "./NavLinks";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    // Trava o scroll da página enquanto o menu está aberto.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="inline-flex size-12 items-center justify-center rounded-md text-brand-navy hover:bg-brand-aqua/30"
      >
        {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
      </button>

      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto border-t border-slate-200 bg-white px-4 py-6"
      >
        <nav aria-label="Menu principal">
          <NavLinks variant="mobile" onNavigate={() => setOpen(false)} />
        </nav>
        <CtaButton
          href={site.whatsapp.href}
          icon={<WhatsAppIcon className="size-5" />}
          className="mt-6 w-full"
        >
          Fale conosco
        </CtaButton>
      </div>
    </div>
  );
}

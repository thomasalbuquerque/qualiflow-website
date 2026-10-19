import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { CtaButton } from "./CtaButton";
import { WhatsAppIcon } from "./icons";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    // Fundo branco sólido: a logo não tem transparência.
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="shrink-0 rounded-md">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={808}
            height={678}
            preload
            className="h-14 w-auto"
          />
        </Link>

        <nav aria-label="Menu principal" className="hidden lg:block">
          <NavLinks variant="desktop" />
        </nav>

        <div className="hidden lg:block">
          <CtaButton href={site.whatsapp.href} icon={<WhatsAppIcon className="size-5" />}>
            Fale conosco
          </CtaButton>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}

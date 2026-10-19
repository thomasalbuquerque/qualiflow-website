import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { tratamentoDeEsgoto as content } from "@/content/tratamento-de-esgoto";

export const metadata: Metadata = {
  title: { absolute: content.meta.title },
  description: content.meta.description,
  alternates: { canonical: "/tratamento-de-esgoto/" },
  openGraph: { title: content.meta.title, description: content.meta.description, url: "/tratamento-de-esgoto/" },
};

export default function TratamentoDeEsgotoPage() {
  return <ServicePage content={content} />;
}

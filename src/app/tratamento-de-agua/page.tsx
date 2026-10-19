import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { tratamentoDeAgua as content } from "@/content/tratamento-de-agua";

export const metadata: Metadata = {
  title: { absolute: content.meta.title },
  description: content.meta.description,
  alternates: { canonical: "/tratamento-de-agua/" },
  openGraph: { title: content.meta.title, description: content.meta.description, url: "/tratamento-de-agua/" },
};

export default function TratamentoDeAguaPage() {
  return <ServicePage content={content} />;
}

import type { RichText } from "@/content/types";

// Renderiza RichText sem Markdown nem dangerouslySetInnerHTML.
export function Rich({ text }: { text: RichText }) {
  if (typeof text === "string") return text;

  return text.map((segment, index) => {
    if (segment.highlight) {
      return (
        <strong key={index} className="font-bold text-brand-green-dark">
          {segment.text}
        </strong>
      );
    }
    if (segment.strong) {
      return (
        <strong key={index} className="font-bold">
          {segment.text}
        </strong>
      );
    }
    return <span key={index}>{segment.text}</span>;
  });
}

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyCitationProps {
  title: string;
  slug: string;
  author: string;
}

const CopyCitation = ({ title, slug, author }: CopyCitationProps) => {
  const [copied, setCopied] = useState(false);
  const url = `${window.location.origin}/news/${slug}`;
  const citation = `<a href="${url}" title="${title}" rel="noopener">${title}</a> — ${author}, NewsFlux`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2">
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : "Copy Citation"}
    </Button>
  );
};

export default CopyCitation;

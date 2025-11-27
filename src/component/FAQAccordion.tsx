"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="bg-white dark:bg-card-dark rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <span className="font-semibold text-slate-900 dark:text-white pr-4">
              {faq.question}
            </span>
            <span
              className={`material-icons-outlined text-primary transition-transform ${
                openId === faq.id ? "rotate-180" : ""
              }`}
            >
              expand_more
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === faq.id ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-6 pt-0 text-slate-600 dark:text-slate-300">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

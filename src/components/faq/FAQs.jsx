import React, { useState } from "react";

import { faqData } from "./data";
import FAQ from "./FAQ";

export default function FAQs() {
  console.log(faqData);

  const [faqs, setFaqs] = useState(faqData);

  return (
    <div>
      {faqs.map((faq) => (
        <FAQ key={faq.id} {...faq} />
      ))}
    </div>
  );
}

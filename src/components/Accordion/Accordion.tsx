import { useState } from "react";

import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import styles from "./Accordion.module.scss";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionList}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div
            className={styles.accordionQuestion}
            onClick={() => toggleAccordion(index)}>
            <h3>{item.question}</h3>

            <div
              className={styles.arrow}
              data-state={activeIndex === index ? "open" : "closed"}>
              <ArrowIcon
                color={activeIndex === index ? "#FA5959" : undefined}
              />
            </div>
          </div>

          <div
            className={styles.accordionAnswer}
            data-state={activeIndex === index ? "open" : "closed"}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

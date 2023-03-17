import { ReactElement, useState } from "react";
import AccordionItem from "./AccordionItem";

export interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

function Accordion({ items }: { items: Array<AccordionProps> }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <div className="w-full">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </div>
  );
}

export default Accordion;

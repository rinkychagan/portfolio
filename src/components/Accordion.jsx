import React, { useState } from "react";

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {skills.map((skills, index) => (
        <div
          key={index}
          className="border border-black border-2 shadow shadow-black shadow-4 rounded-lg mb-4 overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-lg font-semibold focus:outline-none"
          >
            <span>{skills.title}</span>
            <span
              className={`transform transition-transform  ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            >
              {openIndex === index ? "↑" : "↓"}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 border-t border-black text-gray-700">
              <div>
                <p className="font-bold">{skills.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const skills = [
  {
    title: "Technical Skills",
    text: "HTML + CSS, Javascript, Autocad +",
  },
  {
    title: "Soft Skills",
    text: "",
  },
];

export default Accordion;

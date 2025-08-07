import React, { useRef, useState } from "react";

interface FaqsCardProps {
  faqsList: { q: string; a: string };
  idx: number;
  isActive: boolean;
  onClick: (idx: number) => void;
}

const FaqsCard: React.FC<FaqsCardProps> = (props) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx, isActive, onClick } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = answerElRef.current.childNodes[0].offsetHeight;
      setAnswerH(`${answerElH + 20}px`);
    }
    onClick(idx);
  };

  return (
    <div
      className="space-y-1 overflow-hidden border-b border-emerald-600"
      key={idx}
    >
      <h4 
        className="cursor-pointer pb-4 flex items-center justify-between text-gray-700 font-medium"
        onClick={handleOpenAnswer}
      >
        {faqsList.q}
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-emerald-600 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-emerald-600 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300 overflow-y-auto max-h-64"
        style={isActive ? { height: answerH } : { height: "0px" }}
      >
        <div className="px-0 pb-6">
          <p className="text-gray-600">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
}; 

export default FaqsCard;
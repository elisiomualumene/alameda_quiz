"use client";

import React, { useState, useEffect } from "react";

export type QuestionsAnwsersProps = {
  question: string;
  options: string[];
  answer: string;
  onAnswer: (selectedOption: string) => void;
  showFeedback: boolean;
  selectedOption: string | null;
  index: number;
};

export const Card = ({
  question,
  options,
  answer,
  onAnswer,
  showFeedback,
  index,
  selectedOption: parentSelectedOption,
}: QuestionsAnwsersProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(parentSelectedOption);

  useEffect(() => {
    setSelectedOption(parentSelectedOption);
  }, [parentSelectedOption]);

  const handleOptionClick = (option: string) => {
    if (!selectedOption) {
      setSelectedOption(option);
      onAnswer(option);
    }
  };

  const getOptionStyle = (option: string) => {
    if (!selectedOption) return "hover:bg-slate-900 cursor-pointer";
    if (showFeedback) {
      if (option === answer) return "bg-blue-500";
      if (option === selectedOption && option !== answer) return "bg-red-500";
    }
    return "";
  };

  return (
    <main className="border border-slate-500 rounded-md my-4">
      <div className="flex items-center gap-4 bg-slate-800 p-2">
        <div className="bg-slate-700 rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
          <p className="font-bold text-xl">{index+1}</p>
        </div>
        <p className="text-xl font-bold">{question}</p>
      </div>
      <div className="p-2 bg-slate-700">
        <ul className="flex flex-col gap-4">
          {options?.map((option, index) => (
            <li
              key={index}
              className={`p-2 rounded transition ease-in-out delay-75 ${getOptionStyle(
                option
              )}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

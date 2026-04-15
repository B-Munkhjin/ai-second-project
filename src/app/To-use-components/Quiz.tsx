import { Sparkles, X } from "lucide-react";
import { useState } from "react";

export const Quiz = ({ questions }: QuizType) => {
  interface QuizType {
    questions: {
      id: number;
      question: string;
      options: string[];
      answer: string;
    }[];
  }

  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const handleAnswerClick = (selectedOption: string) => {
    if (quistion) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert("Quiz Finished!");
    }
  };
  if (!question) return null;

  return (
    <div className="flex flex-col gap-6 w-140">
      <div className="flex gap-2">
        <div>
          <div className="flex gap-2">
            <Sparkles className="size-8" />
            <h1 className="text-2xl font-semibold text-[#000000]">
              Quick test
            </h1>
          </div>
          <p className="text-[#71717A] text-base font-medium">
            Take a quick test about your knowledge from your content.
          </p>
        </div>
        <div>
          <button className="py-2 px-4 bg-[#FFFFFF] border border-[#E4E4E7] rounded-md">
            <X />
          </button>
        </div>
      </div>
      <div className="flex flex-col border border-[#E4E4E7] rounded-2xl bg-[#FFFFFF] p-10 shadow-sm max-w-4xl mx-auto mt-10">
        <div className="flex justify-between items-start mb-10">
          <h1 className="text-4xl font-semibold text-[#09090B]">{question}</h1>
          <div className="text-3xl font-medium text-[#09090B] whitespace-nowrap ml-8">
            <span className="text-4xl font-bold">{questionIndex + 1}</span>
            <span className="text-[#A1A1AA] mx-1">/</span>
            <span className="text-[#A1A1AA]">5</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option) => (
            <button
              onClick={() => handleAnswerClick(option)}
              className="w-full py-6 px-4 text-2xl font-medium text-[#09090B] border border-[#E4E4E7] rounded-xl hover:border-[#10B981] hover:bg-slate-50 transition-all duration-200 text-center"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

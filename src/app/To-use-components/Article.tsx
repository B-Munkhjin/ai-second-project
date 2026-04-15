"use client";

import { Textarea } from "@/components/ui/textarea";
import { BookOpen, FileText, Sparkles } from "lucide-react";

import { use, useState } from "react";

export default function quizGen() {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <div className=" flex flex-col bg-white border rounded-2xl p-7 gap-4 relative ">
      <div className="flex flex-col w-214 justify-between gap-4 md:w-157">
        <div className="flex gap-2">
          <Sparkles />
          <h1 className="text-xl font-semibold">Article Quiz Generator</h1>
        </div>
        <p className="text-[#71717A] text-sm w-214">
          Paste your article content below to generate a summary and quiz
          questions. Your articles will be saved in the sidebar for future
          reference.
        </p>
      </div>
      <div className=" w-214 flex flex-col gap-2">
        <div className="flex gap-2">
          <FileText className="size-5" />
          <h1 className="text-[#18181B] text-base w-214">Article Title</h1>
        </div>
        <Textarea
          value={title}
          className=" w-214 h-fit bg-[#FFFFFF] border border-[#E4E4E7] px-3 py-2 rounded-md "
          placeholder="Enter a title for your article..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="w-214 flex flex-col gap-2 ">
        <div className="flex gap-2">
          <FileText className="size-5" />
          <h1 className="text-[#18181B] text-base w-214">Article Content</h1>
        </div>
        <Textarea
          value={prompt}
          className="flex w-full h-30  bg-[#FFFFFF] border border-[#E4E4E7] px-5 py-4 rounded-md"
          placeholder="Enter a title for your article..."
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
        />
      </div>

      <div className="flex justify-end">
        <button className=" w-40 py-2 px-4 bg-[#18181B] rounded-md text-white text-sm">
          Generate Summary
        </button>
      </div>
    </div>
  );
}

/////summary component
const Summ = ({ prompt, limit = 250 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleBtn = () => setIsExpanded(!isExpanded);
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <BookOpen className="size-4" />
          <h1 className="text-[#737373] font-semibold text-base">
            Summarized content
          </h1>
        </div>
        <h2 className="text-[#000000] text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-[#000000]">{summ}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <FileText className="size-4" />
          <h1 className="text-[#737373] font-semibold text-base">
            Article content
          </h1>
        </div>
        <p className="text-sm text-[#000000] h-15">{prompt}</p>
        <p>
          {isExpanded ? prompt : `${prompt.slice(0, limit)}...`}
          <button
            onClick={toggleBtn}
            className="text-sm font-medium text-[#09090B] ml-100"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>
      <div className="flex justify-start">
        <button className=" w-31 py-2 px-4 bg-[#18181B] rounded-md text-white text-sm">
          Take a quiz
        </button>
      </div>
    </div>
  );
};

// export default Home();

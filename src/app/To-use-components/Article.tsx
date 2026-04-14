"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Sparkles } from "lucide-react";

import { useState } from "react";

export default function quizGen() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  //   const clear = () => {
  //     setPrompt("");
  //     setImageUrl("");
  //   };

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
          //   value={prompt}
          className=" w-214 h-fit bg-[#FFFFFF] border border-[#E4E4E7] px-3 py-2 rounded-md "
          placeholder="Enter a title for your article..."
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
        />
      </div>
      <div className="w-214 flex flex-col gap-2 ">
        <div className="flex gap-2">
          <FileText className="size-5" />
          <h1 className="text-[#18181B] text-base w-214">Article Content</h1>
        </div>
        <Textarea
          //   value={}
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

// export default Home();

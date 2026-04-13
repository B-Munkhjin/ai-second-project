"use client";

import { FileText, Sparkles } from "lucide-react";

import { useState } from "react";

export default function ImageCreator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const clear = () => {
    setPrompt("");
    setImageUrl("");
  };

  return (
    <div className="my-8 flex flex-col gap-4 bg-white border rounded-2xl p-7">
      <div className="flex flex-col w-145 justify-between gap-4">
        <div className="flex gap-2">
          <Sparkles />
          <h1 className="text-xl font-semibold">Article Quiz Generator</h1>
        </div>
        <p className="text-[#71717A] text-sm w-145">
          Paste your article content below to generate a summary and quiz
          questions. Your articles will be saved in the sidebar for future
          reference.
        </p>
      </div>
      <div className=" w-145 flex flex-col gap-2">
        <div className="flex gap-2">
          <FileText className="size-5" />
          <h1 className="text-[#18181B] text-base w-145">Article Title</h1>
        </div>
        <input
          //   value={prompt}
          className=" w-145 bg-[#FFFFFF] border border-[#E4E4E7] px-3 py-2 rounded-md overflow-x-hidden overflow-y-auto resize-none wrap-break-word whitespace-pre-wrap"
          placeholder="Enter a title for your article..."
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
        />
      </div>
      <div className="w-145 flex flex-col gap-2 ">
        <div className="flex gap-2">
          <FileText className="size-5" />
          <h1 className="text-[#18181B] text-base w-145">Article Content</h1>
        </div>
        <input
          //   value={}
          className=" w-145 h-70 justify-start bg-[#FFFFFF] border  border-[#E4E4E7] px-5 py-4 rounded-md overflow-x-hidden overflow-y-auto resize-none wrap-break-word whitespace-pre-wrap"
          placeholder="Enter a title for your article..."
          onChange={(event) => {
            setPrompt(event.target.value);
          }}
        />
      </div>

      <button className=" w-145 py-2 bg-[#18181B] rounded-md text-white ">
        Generate Summary
      </button>
    </div>
  );
}

// export default Home();

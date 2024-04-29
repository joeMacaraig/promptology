import React from "react";

export const PromptCard = ({ username, email, prompt, image }) => {
  return (
    <div className="border border-black bg-white rounded-lg p-4 w-full h-full flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="p-4 bg-black rounded-full"></div>
        <h1 className="font-medium">{username}</h1>
      </div>
      <h1 className="text-gray-500 font-light">{email}</h1>
      <p className="font-serif">" {prompt} "</p>
    </div>
  );
};
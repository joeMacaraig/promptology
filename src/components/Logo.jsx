"use client";

import { TbPrompt } from "react-icons/tb";

export const Logo = () => {
  return (
    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 shadow-xl hover:scale-110 duration-500 ease-in-out">
      <TbPrompt size={20} color="white" />
    </div>
  );
};

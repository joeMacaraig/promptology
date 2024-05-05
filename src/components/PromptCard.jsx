// Prompt Card that displays in the home page

"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

// icons
import { FiCopy, FiCheckSquare, FiDelete, FiEdit } from "react-icons/fi";

export const PromptCard = ({
  prompt,
  handleClick,
  handleEdit,
  handleDelete,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setCopied(false), 8000); //will return to false after a certain time
  };
  return (
    <div className="border border-black bg-white rounded-lg p-4 w-full h-full flex flex-col gap-2 shadow-lg">
      <div className="relative flex flex-col gap-4 pb-2">
        {/* profile details */}
        <div className="flex justify-start items-center gap-4 cursor-pointer">
          <Image
            src={prompt.creator.image}
            alt="profile_picture"
            width={45}
            height={45}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900">
              {prompt.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {prompt.creator.email}
            </p>
          </div>
        </div>
        {/* prompt and copy button */}
        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-justify">"{prompt.prompt}"</h1>
          <p className="w-[80%] text-sm">{prompt.tag}</p>
          <div className="absolute bottom-0 right-0 flex gap-4 items-center">
            {session?.user.id === prompt.creator._id &&
              pathname === "/profile" && (
                <div className="flex gap-4">
                  <button
                    onClick={handleEdit}
                    className="hover:-translate-y-1 duration-500"
                  >
                    <FiEdit size={20} />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="hover:-translate-y-1 duration-500"
                  >
                    <FiDelete size={20} />
                  </button>
                </div>
              )}
            <button
              className="hover:-translate-y-1 duration-500"
              onClick={handleCopy}
            >
              {copied ? (
                <FiCheckSquare size={20} color="#22c55e" />
              ) : (
                <FiCopy size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

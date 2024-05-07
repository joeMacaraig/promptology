// Profile Page ( user needs to be logged in to view this )

import Image from "next/image";
import { PromptCard } from "./PromptCard";

export const Profile = ({ data, handleEdit, handleDelete }) => {
  const creator= data[0]?.creator;
  return (
    <section className="w-full max-w-6xl mx-auto p-8 flex flex-col gap-4">
      <div className="flex items-center flex-col">
        <Image src={creator?.image} width={100} height={100} alt="profile-pic" className="rounded-xl"/>
        <h1 className="text-4xl sm:text-6xl font-bold create-gradient">
          <span className=" tracking-tight">{creator?.username}</span>
        </h1>
        <h2 className="text-zinc-400">{creator?.email}</h2>
      </div>
      <div className="flex flex-col mt-4 gap-6">
        <h1 className="text-2xl sm:text-3xl font-medium">Prompts</h1>
        <div className="grid grid-cols-1 gap-4">
          {data.map((prompt) => (
            <PromptCard
              key={prompt._id}
              prompt={prompt}
              handleEdit={() => handleEdit && handleEdit(prompt)}
              handleDelete={() => handleDelete && handleDelete(prompt)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

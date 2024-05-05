// Profile Page ( user needs to be logged in to view this )

import { PromptCard } from "./PromptCard";

export const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  console.log(data);
  return (
    <section className="w-full max-w-6xl mx-auto p-8 flex flex-col gap-4">
      <h1 className="text-4xl sm:text-5xl font-bold create-gradient">
        <span className=" tracking-tight">{name}'s Profile</span>
      </h1>
      <p className="sm:text-lg font-medium text-gray-500">
        {desc} {name}.
      </p>
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

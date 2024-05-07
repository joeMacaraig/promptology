import { PromptCard } from "./PromptCard";

export const PromptList = ({ data, handleClick, search }) => {
  const filteredData = data.filter(
    (prompt) =>
      prompt.prompt.toLowerCase().includes(search.toLowerCase()) ||
      prompt.tag.toLowerCase().includes(search.toLowerCase()) || 
      prompt.creator.username.toLowerCase().includes(search.toLowerCase()) || 
      prompt.creator.email.toLowerCase().includes(search.toLowerCase())
  );
  console.log(data)
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 w-full">
      {filteredData?.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

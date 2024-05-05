import { PromptCard } from "./PromptCard";

export const PromptList = ({ data, handleClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-8 w-full">
      {data?.map((prompt) => (
        <PromptCard key={prompt._id} prompt={prompt} handleClick={handleClick}/>
      ))}
    </div>
  );
};

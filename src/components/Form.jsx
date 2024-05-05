//
//   Form for Creating a Prompt
//
import Link from "next/link";

export const Form = ({ type, prompt, setPrompt, submit, handleSubmit }) => {
  return (
    <section className="w-full max-w-6xl mx-auto p-8 flex flex-col gap-4">
      <h1 className="text-5xl font-bold create-gradient">
        <span className=" tracking-tight">{type} Prompt</span>
      </h1>
      <p className="font-medium text-gray-500">
        {type} and share prompts with the world. The prompts are endless.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-semibold">Your Prompt</span>
            <textarea
              value={prompt.prompt}
              onChange={(e) => setPrompt({ ...prompt, prompt: e.target.value })}
              placeholder="Write a prompt here..."
              required
              className="rounded p-3 border shadow-sm text-sm w-full h-[200px]"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-semibold">
              Tag{" "}
              <span className="text-gray-500 font-normal">
                ( #AI, #Writing, #Creative... )
              </span>
            </span>
            <input
              value={prompt.tag}
              onChange={(e) => setPrompt({ ...prompt, tag: e.target.value })}
              placeholder="#yourTag"
              required
              className="rounded p-3 border shadow-sm w-full text-sm"
            />
          </label>
          <div className="flex justify-end gap-4 px-2 items-center">
            <Link href="/" className="underline">
              Cancel
            </Link>
            <button type="submit" disabled={submit} className="submit-btn">
              {submit ? `Submitting...` : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

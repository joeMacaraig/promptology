import Image from "next/image";
import { PromptFeed } from "../components/PromptFeed";
export default function Home() {
  return (
    <section className="max-w-6xl mx-auto flex-center flex-col gap-2 px-4 pb-4">
      <h1 className="flex-center title flex-col">
        Explore & Share
        <br></br>
        <span className="text-center title prompt-gradient">Promptology</span>
      </h1>
      <p className="text-center text-gray-500 text-lg sm:text-xl">
        Promptology is an open-source prompting tool for modern world to
        explore, create, and share prompts with others.
      </p>
      <div className="w-full">
        <PromptFeed />
      </div>
    </section>
  );
}

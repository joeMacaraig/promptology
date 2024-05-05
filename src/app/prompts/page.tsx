"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Form } from "../../components/Form";

const PromptPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submit, setSubmit] = useState(false);
  const [prompt, setPrompt] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();

    setSubmit(true);

    try {
      const response = await fetch("/api/prompt/create", {
        method: "POST",
        body: JSON.stringify({
          prompt: prompt.prompt,
          tag: prompt.tag,
          userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSubmit(false);
    }
  };
  return (
    <>
      {session?.user ? (
        <section className="flex-center">
          <Form
            type="Create"
            prompt={prompt}
            setPrompt={setPrompt}
            submit={submit}
            handleSubmit={createPrompt}
          />
        </section>
      ) : (
        <section className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-4xl font-bold">To Create a Prompt, Sign In.</h1>
          <p className="underline font-medium">Go to the home page.</p>
        </section>
      )}
    </>
  );
};

export default PromptPage;

"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Form } from "../../components/Form";

const UpdatePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  console.log(promptId);

  const [prompt, setPrompt] = useState({ prompt: "", tag: "" });
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPrompt({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmit(true);

    if (!promptId) return alert("Missing PromptId!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: prompt.prompt,
          tag: prompt.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmit(false);
    }
  };

  return (
    <>
      {session?.user ? (
        <section className="flex-center">
          <Form
            type="Edit/Update"
            prompt={prompt}
            setPrompt={setPrompt}
            submit={submit}
            handleSubmit={updatePrompt}
          />
        </section>
      ) : (
        <section className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-4xl font-bold">To Update Your Prompts, Sign In.</h1>
          <p className="underline font-medium">Go to the home page.</p>
        </section>
      )}
    </>
  );
};

export default UpdatePage;

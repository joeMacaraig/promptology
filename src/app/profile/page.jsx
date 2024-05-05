// Profile page

"use client";

import { useState, useEffect, Fragment } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// components
import { Profile } from "../../components/Profile";
import { ModalCard } from "../../components/ModalCard";

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [prompts, setPrompts] = useState([]);
  const [modal, setModal] = useState(false);

  const handleEdit = (prompt) => {
    router.push(`/update?id=${prompt._id}`);
  };
  const handleDelete = async (prompt) => {
    const confirmed = confirm("You are deleting a prompt, press OK to continue...")
    if (confirmed) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, { method: "DELETE" });
        const filterPrompt = prompts.filter((pr) => pr._id !== prompt._id);
        setPrompts(filterPrompt);
      } catch (err) {
        console.log(err);
      }
    }
  };
  //get prompts only specific ot the user
  useEffect(() => {
    const getPrompts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/prompts`);
      const data = await res.json();
      setPrompts(data);
    };
    if (session?.user.id) getPrompts();
  }, []);
  return (
    <>
      {session?.user ? (
        <section className="flex-center">
          <Profile
            name={session?.user?.name}
            desc="Welcome to your profile page"
            data={prompts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </section>
      ) : (
        <section className="flex items-center justify-center flex-col gap-2">
          <h1 className="text-4xl font-bold">
            To access the Profile page sign in.
          </h1>
          <p className="underlin font-medium">Go to the home page.</p>
        </section>
      )}
    </>
  );
};
export default ProfilePage;

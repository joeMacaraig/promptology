// Profile page

"use client";

import { useState, useEffect } from "react";

import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

// components
import { Profile } from "../../components/Profile";

const ProfilePage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const userID = searchParams.get("id");
  const [prompts, setPrompts] = useState([]);
  const creator = prompts[0]?.creator;

  console.log({creator})

  const handleEdit = (prompt) => {
    router.push(`/update?id=${prompt._id}`);
  };
  const handleDelete = async (prompt) => {
    const confirmed = confirm(
      "You are deleting a prompt, press OK to continue..."
    );
    if (confirmed) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        });
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
      const res = await fetch(`/api/users/${userID}/prompts`);
      const data = await res.json();
      setPrompts(data);
    };
    getPrompts();
  }, []);
  return (
    <>
      <section className="flex-center">
        <Profile
          data={prompts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </section>
    </>
  );
};
export default ProfilePage;

// Feed that shows prompts created by users

"use client";

import React, { useState, useEffect } from "react";

// components
import { PromptCard } from "../components/PromptCard";
import { PromptList } from "../components/PromptList";

export const PromptFeed = () => {
  //states
  const [search, setSearch] = useState("");
  const [prompts, setPrompts] = useState([]);

  // handle input search
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {};

  //get prompts
  useEffect(() => {
    const getPrompts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPrompts(data);
    };
    getPrompts();
  }, []);
console.log(prompts)
  return (
    <section className="px-4 mt-8">
      <form className="relative w-full ">
        <input
          type="text"
          placeholder="search for prompts, tags, profiles..."
          value={search}
          onChange={handleSearch}
          required
          className="w-full border pl-4 py-2 rounded shadow-lg"
        />
      </form>
      <PromptList data={prompts} handleClick={handleClick}/>
    </section>
  );
};

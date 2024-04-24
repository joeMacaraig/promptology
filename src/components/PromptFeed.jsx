import React from "react";
import {PromptCard} from '../components/PromptCard'
const dummy = [
  {
    username: "example123",
    email: "example123@example.com",
    prompt:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "image",
  },
  {
    username: "example123",
    email: "example123@example.com",
    prompt:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "image",
  },
  {
    username: "example123",
    email: "example123@example.com",
    prompt:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "image",
  },
  {
    username: "example123",
    email: "example123@example.com",
    prompt:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    image: "image",
  },
];

export const PromptFeed = () => {
  return <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4">
    {dummy.map((item) => (
      <PromptCard {...item}/>
    ))}
  </section>;
};

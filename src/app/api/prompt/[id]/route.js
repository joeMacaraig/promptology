// GET, PATCH, DELETE prompt

import { connectToDB } from "../../../../../utils/database";
import Prompt from "../../../../../models/prompt";

// GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    // if no prompt
    if (!prompt)
      return new Response(JSON.stringify("Prompts not found"), { status: 404 });

    //return prompt
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch user's prompt", {
      error: err,
      status: 500,
    });
  }
};

// PATCH
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();

    const existing = await Prompt.findById(params.id);

    if (!existing) return new Repsonse("Prompt not found", { status: 404 });

    existing.prompt = prompt;
    existing.tag = tag;

    await existing.save();

    return new Response(JSON.stringify(existing), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to update user's prompt", { status: 500 });
  }
};

// Delete
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Successfully Deleted Prompt", { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to delete user's prompt", {
      error: err,
      status: 500,
    });
  }
};

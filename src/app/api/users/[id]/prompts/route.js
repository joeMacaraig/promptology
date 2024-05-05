import { connectToDB } from "../../../../../../utils/database";
import Prompt from "../../../../../../models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts.reverse()), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch user's prompts", {
      error: err,
      status: 500,
    });
  }
};

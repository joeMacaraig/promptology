// Prompt Model
import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "tag is required."],
  },
});

const Prompt = models.Prompts || model("Prompts", PromptSchema);

export default Prompt;

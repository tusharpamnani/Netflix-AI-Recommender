import { pipeline, env } from "@xenova/transformers";

env.useBrowserCache = false;

const pipe = await pipeline("feature-extraction", "Supabase/gte-small"); // these are the models hosted on huggingface and are provided by the Supabase

export const generateEmbeddings = async (text) => {
  const output = await pipe(text, {
    pooling: "mean",
    normalize: true,
  });

  return Array.from(output.data);
};

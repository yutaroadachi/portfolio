import { createClient } from "microcms-js-sdk";
import "server-only";

const getApiKey = (): string => {
  if (process.env.MICROCMS_API_KEY === undefined) {
    throw new Error("MICROCMS_API_KEY is not set");
  }

  return process.env.MICROCMS_API_KEY;
};

export const client = createClient({
  serviceDomain: "adachi",
  apiKey: getApiKey(),
});

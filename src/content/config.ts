import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().regex(/^\d{4}\.\d{2}\.\d{2}$/),
  }),
});

export const collections = { blog };

import { defineCollection, z } from "astro:content";

const writeups = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});


const releases = defineCollection({
  type: "content",
  schema: z.object({}).passthrough(),
});

export const collections = {
  writeups,
  releases, // remove if not needed
};

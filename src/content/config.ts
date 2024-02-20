import { defineCollection, z } from "astro:content";

const talksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    slideLink: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = { talks: talksCollection };

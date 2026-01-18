import { z } from "zod";

export const reportSchema = z.object({
  Description: z.string().min(5),
  Priority: z.enum(["alta", "media", "baja"]),
  Localitation: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  img: z.array(
    z.object({
      uri: z.string().url().or(z.string().startsWith("file://"))
    })
  ).min(1).max(3),
});

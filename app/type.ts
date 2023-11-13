import {z} from 'zod';

export const zVersion = z.string().regex(/^\d+\.\d+\.\d+$/);
export const zSettiongs = z.object({
    version: zVersion,
    faq: z.string(),
    tos: z.string(),
});

export type Settings = z.infer<typeof zSettiongs>;

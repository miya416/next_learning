import { z } from 'zod';

export const zSql = z.object({
    title: z.string(),
    sql: z.string(),
    ast: z.string()
});
export type Sql = z.infer<typeof zSql>;

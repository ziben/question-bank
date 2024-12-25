import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SourceCountOutputTypeSelectSchema: z.ZodType<Prisma.SourceCountOutputTypeSelect> = z.object({
  questions: z.boolean().optional(),
}).strict();

export default SourceCountOutputTypeSelectSchema;

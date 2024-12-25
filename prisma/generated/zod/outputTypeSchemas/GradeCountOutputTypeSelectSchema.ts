import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const GradeCountOutputTypeSelectSchema: z.ZodType<Prisma.GradeCountOutputTypeSelect> = z.object({
  questions: z.boolean().optional(),
}).strict();

export default GradeCountOutputTypeSelectSchema;

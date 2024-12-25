import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const SubjectCountOutputTypeSelectSchema: z.ZodType<Prisma.SubjectCountOutputTypeSelect> = z.object({
  questions: z.boolean().optional(),
}).strict();

export default SubjectCountOutputTypeSelectSchema;

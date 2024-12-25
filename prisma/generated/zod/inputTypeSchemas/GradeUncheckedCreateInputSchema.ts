import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionUncheckedCreateNestedManyWithoutGradeInputSchema } from './QuestionUncheckedCreateNestedManyWithoutGradeInputSchema';

export const GradeUncheckedCreateInputSchema: z.ZodType<Prisma.GradeUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
  questions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutGradeInputSchema).optional()
}).strict();

export default GradeUncheckedCreateInputSchema;

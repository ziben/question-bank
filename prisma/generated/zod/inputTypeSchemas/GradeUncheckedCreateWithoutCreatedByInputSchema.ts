import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionUncheckedCreateNestedManyWithoutGradeInputSchema } from './QuestionUncheckedCreateNestedManyWithoutGradeInputSchema';

export const GradeUncheckedCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.GradeUncheckedCreateWithoutCreatedByInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  updaterId: z.number().int(),
  questions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutGradeInputSchema).optional()
}).strict();

export default GradeUncheckedCreateWithoutCreatedByInputSchema;

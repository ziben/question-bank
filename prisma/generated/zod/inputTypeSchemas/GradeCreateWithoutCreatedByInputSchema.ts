import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutGradeInputSchema } from './QuestionCreateNestedManyWithoutGradeInputSchema';
import { UserCreateNestedOneWithoutUpdatedGradesInputSchema } from './UserCreateNestedOneWithoutUpdatedGradesInputSchema';

export const GradeCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.GradeCreateWithoutCreatedByInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutGradeInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedGradesInputSchema)
}).strict();

export default GradeCreateWithoutCreatedByInputSchema;

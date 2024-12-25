import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCreatedGradesInputSchema } from './UserCreateNestedOneWithoutCreatedGradesInputSchema';
import { UserCreateNestedOneWithoutUpdatedGradesInputSchema } from './UserCreateNestedOneWithoutUpdatedGradesInputSchema';

export const GradeCreateWithoutQuestionsInputSchema: z.ZodType<Prisma.GradeCreateWithoutQuestionsInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedGradesInputSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedGradesInputSchema)
}).strict();

export default GradeCreateWithoutQuestionsInputSchema;

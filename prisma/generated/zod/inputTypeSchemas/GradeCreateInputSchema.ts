import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutGradeInputSchema } from './QuestionCreateNestedManyWithoutGradeInputSchema';
import { UserCreateNestedOneWithoutCreatedGradesInputSchema } from './UserCreateNestedOneWithoutCreatedGradesInputSchema';
import { UserCreateNestedOneWithoutUpdatedGradesInputSchema } from './UserCreateNestedOneWithoutUpdatedGradesInputSchema';

export const GradeCreateInputSchema: z.ZodType<Prisma.GradeCreateInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutGradeInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedGradesInputSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedGradesInputSchema)
}).strict();

export default GradeCreateInputSchema;

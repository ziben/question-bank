import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCreatedSubjectsInputSchema } from './UserCreateNestedOneWithoutCreatedSubjectsInputSchema';
import { UserCreateNestedOneWithoutUpdatedSubjectsInputSchema } from './UserCreateNestedOneWithoutUpdatedSubjectsInputSchema';

export const SubjectCreateWithoutQuestionsInputSchema: z.ZodType<Prisma.SubjectCreateWithoutQuestionsInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedSubjectsInputSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedSubjectsInputSchema)
}).strict();

export default SubjectCreateWithoutQuestionsInputSchema;

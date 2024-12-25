import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutSubjectInputSchema } from './QuestionCreateNestedManyWithoutSubjectInputSchema';
import { UserCreateNestedOneWithoutCreatedSubjectsInputSchema } from './UserCreateNestedOneWithoutCreatedSubjectsInputSchema';
import { UserCreateNestedOneWithoutUpdatedSubjectsInputSchema } from './UserCreateNestedOneWithoutUpdatedSubjectsInputSchema';

export const SubjectCreateInputSchema: z.ZodType<Prisma.SubjectCreateInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutSubjectInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedSubjectsInputSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedSubjectsInputSchema)
}).strict();

export default SubjectCreateInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutSubjectInputSchema } from './QuestionCreateNestedManyWithoutSubjectInputSchema';
import { UserCreateNestedOneWithoutUpdatedSubjectsInputSchema } from './UserCreateNestedOneWithoutUpdatedSubjectsInputSchema';

export const SubjectCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.SubjectCreateWithoutCreatedByInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutSubjectInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedSubjectsInputSchema)
}).strict();

export default SubjectCreateWithoutCreatedByInputSchema;

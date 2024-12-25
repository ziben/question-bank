import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutSubjectInputSchema } from './QuestionCreateNestedManyWithoutSubjectInputSchema';
import { UserCreateNestedOneWithoutCreatedSubjectsInputSchema } from './UserCreateNestedOneWithoutCreatedSubjectsInputSchema';

export const SubjectCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.SubjectCreateWithoutUpdatedByInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutSubjectInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedSubjectsInputSchema)
}).strict();

export default SubjectCreateWithoutUpdatedByInputSchema;

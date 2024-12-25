import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionUncheckedCreateNestedManyWithoutSubjectInputSchema } from './QuestionUncheckedCreateNestedManyWithoutSubjectInputSchema';

export const SubjectUncheckedCreateInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
  questions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutSubjectInputSchema).optional()
}).strict();

export default SubjectUncheckedCreateInputSchema;

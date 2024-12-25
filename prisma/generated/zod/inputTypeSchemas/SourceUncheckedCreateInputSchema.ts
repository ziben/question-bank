import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionUncheckedCreateNestedManyWithoutSourceInputSchema } from './QuestionUncheckedCreateNestedManyWithoutSourceInputSchema';

export const SourceUncheckedCreateInputSchema: z.ZodType<Prisma.SourceUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  creatorId: z.number().int(),
  updaterId: z.number().int(),
  questions: z.lazy(() => QuestionUncheckedCreateNestedManyWithoutSourceInputSchema).optional()
}).strict();

export default SourceUncheckedCreateInputSchema;

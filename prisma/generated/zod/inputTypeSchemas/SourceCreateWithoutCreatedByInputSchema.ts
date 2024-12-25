import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutSourceInputSchema } from './QuestionCreateNestedManyWithoutSourceInputSchema';
import { UserCreateNestedOneWithoutUpdatedSourcesInputSchema } from './UserCreateNestedOneWithoutUpdatedSourcesInputSchema';

export const SourceCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.SourceCreateWithoutCreatedByInput> = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutSourceInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedSourcesInputSchema)
}).strict();

export default SourceCreateWithoutCreatedByInputSchema;

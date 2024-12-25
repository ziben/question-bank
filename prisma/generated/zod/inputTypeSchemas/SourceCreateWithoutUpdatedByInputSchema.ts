import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutSourceInputSchema } from './QuestionCreateNestedManyWithoutSourceInputSchema';
import { UserCreateNestedOneWithoutCreatedSourcesInputSchema } from './UserCreateNestedOneWithoutCreatedSourcesInputSchema';

export const SourceCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.SourceCreateWithoutUpdatedByInput> = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutSourceInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedSourcesInputSchema)
}).strict();

export default SourceCreateWithoutUpdatedByInputSchema;

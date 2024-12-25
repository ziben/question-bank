import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedManyWithoutSourceInputSchema } from './QuestionCreateNestedManyWithoutSourceInputSchema';
import { UserCreateNestedOneWithoutCreatedSourcesInputSchema } from './UserCreateNestedOneWithoutCreatedSourcesInputSchema';
import { UserCreateNestedOneWithoutUpdatedSourcesInputSchema } from './UserCreateNestedOneWithoutUpdatedSourcesInputSchema';

export const SourceCreateInputSchema: z.ZodType<Prisma.SourceCreateInput> = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questions: z.lazy(() => QuestionCreateNestedManyWithoutSourceInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedSourcesInputSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedSourcesInputSchema)
}).strict();

export default SourceCreateInputSchema;

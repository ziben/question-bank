import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedOneWithoutTagsInputSchema } from './QuestionCreateNestedOneWithoutTagsInputSchema';
import { UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema } from './UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema';
import { UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema } from './UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema';

export const QuestionTagCreateWithoutTagInputSchema: z.ZodType<Prisma.QuestionTagCreateWithoutTagInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  question: z.lazy(() => QuestionCreateNestedOneWithoutTagsInputSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema).optional()
}).strict();

export default QuestionTagCreateWithoutTagInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedOneWithoutTagsInputSchema } from './QuestionCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutQuestionTagsInputSchema } from './TagCreateNestedOneWithoutQuestionTagsInputSchema';
import { UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema } from './UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema';

export const QuestionTagCreateWithoutCreatedByInputSchema: z.ZodType<Prisma.QuestionTagCreateWithoutCreatedByInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  question: z.lazy(() => QuestionCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutQuestionTagsInputSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema).optional()
}).strict();

export default QuestionTagCreateWithoutCreatedByInputSchema;

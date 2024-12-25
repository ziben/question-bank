import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedOneWithoutTagsInputSchema } from './QuestionCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutQuestionTagsInputSchema } from './TagCreateNestedOneWithoutQuestionTagsInputSchema';
import { UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema } from './UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema';

export const QuestionTagCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.QuestionTagCreateWithoutUpdatedByInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  question: z.lazy(() => QuestionCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutQuestionTagsInputSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema).optional()
}).strict();

export default QuestionTagCreateWithoutUpdatedByInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateNestedOneWithoutTagsInputSchema } from './QuestionCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutQuestionTagsInputSchema } from './TagCreateNestedOneWithoutQuestionTagsInputSchema';
import { UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema } from './UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema';
import { UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema } from './UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema';

export const QuestionTagCreateInputSchema: z.ZodType<Prisma.QuestionTagCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  question: z.lazy(() => QuestionCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutQuestionTagsInputSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema).optional()
}).strict();

export default QuestionTagCreateInputSchema;

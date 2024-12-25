import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateNestedOneWithoutQuestionTagsInputSchema } from './TagCreateNestedOneWithoutQuestionTagsInputSchema';
import { UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema } from './UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema';
import { UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema } from './UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema';

export const QuestionTagCreateWithoutQuestionInputSchema: z.ZodType<Prisma.QuestionTagCreateWithoutQuestionInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  tag: z.lazy(() => TagCreateNestedOneWithoutQuestionTagsInputSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedQuestionTagsInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedQuestionTagsInputSchema).optional()
}).strict();

export default QuestionTagCreateWithoutQuestionInputSchema;

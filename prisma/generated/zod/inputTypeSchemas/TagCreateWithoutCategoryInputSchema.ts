import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionTagCreateNestedManyWithoutTagInputSchema } from './QuestionTagCreateNestedManyWithoutTagInputSchema';
import { UserCreateNestedOneWithoutCreatedTagsInputSchema } from './UserCreateNestedOneWithoutCreatedTagsInputSchema';
import { UserCreateNestedOneWithoutUpdatedTagsInputSchema } from './UserCreateNestedOneWithoutUpdatedTagsInputSchema';

export const TagCreateWithoutCategoryInputSchema: z.ZodType<Prisma.TagCreateWithoutCategoryInput> = z.object({
  name: z.string(),
  code: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  questionTags: z.lazy(() => QuestionTagCreateNestedManyWithoutTagInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedTagsInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedTagsInputSchema).optional()
}).strict();

export default TagCreateWithoutCategoryInputSchema;

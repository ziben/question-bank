import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateNestedOneWithoutTagsInputSchema } from './TagCategoryCreateNestedOneWithoutTagsInputSchema';
import { QuestionTagCreateNestedManyWithoutTagInputSchema } from './QuestionTagCreateNestedManyWithoutTagInputSchema';
import { UserCreateNestedOneWithoutCreatedTagsInputSchema } from './UserCreateNestedOneWithoutCreatedTagsInputSchema';

export const TagCreateWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagCreateWithoutUpdatedByInput> = z.object({
  name: z.string(),
  code: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  category: z.lazy(() => TagCategoryCreateNestedOneWithoutTagsInputSchema),
  questionTags: z.lazy(() => QuestionTagCreateNestedManyWithoutTagInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedTagsInputSchema).optional()
}).strict();

export default TagCreateWithoutUpdatedByInputSchema;

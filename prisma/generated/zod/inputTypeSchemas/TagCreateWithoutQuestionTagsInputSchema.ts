import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCategoryCreateNestedOneWithoutTagsInputSchema } from './TagCategoryCreateNestedOneWithoutTagsInputSchema';
import { UserCreateNestedOneWithoutCreatedTagsInputSchema } from './UserCreateNestedOneWithoutCreatedTagsInputSchema';
import { UserCreateNestedOneWithoutUpdatedTagsInputSchema } from './UserCreateNestedOneWithoutUpdatedTagsInputSchema';

export const TagCreateWithoutQuestionTagsInputSchema: z.ZodType<Prisma.TagCreateWithoutQuestionTagsInput> = z.object({
  name: z.string(),
  code: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  category: z.lazy(() => TagCategoryCreateNestedOneWithoutTagsInputSchema),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedTagsInputSchema).optional(),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedTagsInputSchema).optional()
}).strict();

export default TagCreateWithoutQuestionTagsInputSchema;

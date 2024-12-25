import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { QuestionTagUpdateManyWithoutTagNestedInputSchema } from './QuestionTagUpdateManyWithoutTagNestedInputSchema';
import { UserUpdateOneWithoutCreatedTagsNestedInputSchema } from './UserUpdateOneWithoutCreatedTagsNestedInputSchema';
import { UserUpdateOneWithoutUpdatedTagsNestedInputSchema } from './UserUpdateOneWithoutUpdatedTagsNestedInputSchema';

export const TagUpdateWithoutCategoryInputSchema: z.ZodType<Prisma.TagUpdateWithoutCategoryInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sortOrder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  questionTags: z.lazy(() => QuestionTagUpdateManyWithoutTagNestedInputSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatedTagsNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdatedTagsNestedInputSchema).optional()
}).strict();

export default TagUpdateWithoutCategoryInputSchema;

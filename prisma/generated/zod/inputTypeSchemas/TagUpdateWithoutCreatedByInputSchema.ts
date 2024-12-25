import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { TagCategoryUpdateOneRequiredWithoutTagsNestedInputSchema } from './TagCategoryUpdateOneRequiredWithoutTagsNestedInputSchema';
import { QuestionTagUpdateManyWithoutTagNestedInputSchema } from './QuestionTagUpdateManyWithoutTagNestedInputSchema';
import { UserUpdateOneWithoutUpdatedTagsNestedInputSchema } from './UserUpdateOneWithoutUpdatedTagsNestedInputSchema';

export const TagUpdateWithoutCreatedByInputSchema: z.ZodType<Prisma.TagUpdateWithoutCreatedByInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sortOrder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => TagCategoryUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  questionTags: z.lazy(() => QuestionTagUpdateManyWithoutTagNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdatedTagsNestedInputSchema).optional()
}).strict();

export default TagUpdateWithoutCreatedByInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateManyWithoutCategoryNestedInputSchema } from './TagUpdateManyWithoutCategoryNestedInputSchema';
import { UserUpdateOneWithoutCreatedTagCategoriesNestedInputSchema } from './UserUpdateOneWithoutCreatedTagCategoriesNestedInputSchema';

export const TagCategoryUpdateWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagCategoryUpdateWithoutUpdatedByInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  code: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  allowMultiple: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sortOrder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutCategoryNestedInputSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatedTagCategoriesNestedInputSchema).optional()
}).strict();

export default TagCategoryUpdateWithoutUpdatedByInputSchema;

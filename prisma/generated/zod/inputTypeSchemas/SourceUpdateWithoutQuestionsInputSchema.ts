import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutCreatedSourcesNestedInputSchema } from './UserUpdateOneRequiredWithoutCreatedSourcesNestedInputSchema';
import { UserUpdateOneRequiredWithoutUpdatedSourcesNestedInputSchema } from './UserUpdateOneRequiredWithoutUpdatedSourcesNestedInputSchema';

export const SourceUpdateWithoutQuestionsInputSchema: z.ZodType<Prisma.SourceUpdateWithoutQuestionsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedSourcesNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutUpdatedSourcesNestedInputSchema).optional()
}).strict();

export default SourceUpdateWithoutQuestionsInputSchema;

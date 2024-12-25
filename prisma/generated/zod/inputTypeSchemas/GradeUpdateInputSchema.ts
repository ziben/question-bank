import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { QuestionUpdateManyWithoutGradeNestedInputSchema } from './QuestionUpdateManyWithoutGradeNestedInputSchema';
import { UserUpdateOneRequiredWithoutCreatedGradesNestedInputSchema } from './UserUpdateOneRequiredWithoutCreatedGradesNestedInputSchema';
import { UserUpdateOneRequiredWithoutUpdatedGradesNestedInputSchema } from './UserUpdateOneRequiredWithoutUpdatedGradesNestedInputSchema';

export const GradeUpdateInputSchema: z.ZodType<Prisma.GradeUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.lazy(() => QuestionUpdateManyWithoutGradeNestedInputSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedGradesNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutUpdatedGradesNestedInputSchema).optional()
}).strict();

export default GradeUpdateInputSchema;

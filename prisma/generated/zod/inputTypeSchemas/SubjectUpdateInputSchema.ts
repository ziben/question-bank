import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { QuestionUpdateManyWithoutSubjectNestedInputSchema } from './QuestionUpdateManyWithoutSubjectNestedInputSchema';
import { UserUpdateOneRequiredWithoutCreatedSubjectsNestedInputSchema } from './UserUpdateOneRequiredWithoutCreatedSubjectsNestedInputSchema';
import { UserUpdateOneRequiredWithoutUpdatedSubjectsNestedInputSchema } from './UserUpdateOneRequiredWithoutUpdatedSubjectsNestedInputSchema';

export const SubjectUpdateInputSchema: z.ZodType<Prisma.SubjectUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.lazy(() => QuestionUpdateManyWithoutSubjectNestedInputSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedSubjectsNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutUpdatedSubjectsNestedInputSchema).optional()
}).strict();

export default SubjectUpdateInputSchema;

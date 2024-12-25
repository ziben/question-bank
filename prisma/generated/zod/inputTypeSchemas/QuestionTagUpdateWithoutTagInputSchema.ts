import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { QuestionUpdateOneRequiredWithoutTagsNestedInputSchema } from './QuestionUpdateOneRequiredWithoutTagsNestedInputSchema';
import { UserUpdateOneWithoutCreatedQuestionTagsNestedInputSchema } from './UserUpdateOneWithoutCreatedQuestionTagsNestedInputSchema';
import { UserUpdateOneWithoutUpdatedQuestionTagsNestedInputSchema } from './UserUpdateOneWithoutUpdatedQuestionTagsNestedInputSchema';

export const QuestionTagUpdateWithoutTagInputSchema: z.ZodType<Prisma.QuestionTagUpdateWithoutTagInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  question: z.lazy(() => QuestionUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatedQuestionTagsNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdatedQuestionTagsNestedInputSchema).optional()
}).strict();

export default QuestionTagUpdateWithoutTagInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { QuestionUpdateOneRequiredWithoutTagsNestedInputSchema } from './QuestionUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutQuestionTagsNestedInputSchema } from './TagUpdateOneRequiredWithoutQuestionTagsNestedInputSchema';
import { UserUpdateOneWithoutCreatedQuestionTagsNestedInputSchema } from './UserUpdateOneWithoutCreatedQuestionTagsNestedInputSchema';
import { UserUpdateOneWithoutUpdatedQuestionTagsNestedInputSchema } from './UserUpdateOneWithoutUpdatedQuestionTagsNestedInputSchema';

export const QuestionTagUpdateInputSchema: z.ZodType<Prisma.QuestionTagUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  question: z.lazy(() => QuestionUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutQuestionTagsNestedInputSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneWithoutCreatedQuestionTagsNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneWithoutUpdatedQuestionTagsNestedInputSchema).optional()
}).strict();

export default QuestionTagUpdateInputSchema;

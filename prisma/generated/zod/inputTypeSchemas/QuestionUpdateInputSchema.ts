import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { CategoryUpdateOneRequiredWithoutQuestionsNestedInputSchema } from './CategoryUpdateOneRequiredWithoutQuestionsNestedInputSchema';
import { SubjectUpdateOneRequiredWithoutQuestionsNestedInputSchema } from './SubjectUpdateOneRequiredWithoutQuestionsNestedInputSchema';
import { GradeUpdateOneRequiredWithoutQuestionsNestedInputSchema } from './GradeUpdateOneRequiredWithoutQuestionsNestedInputSchema';
import { SourceUpdateOneWithoutQuestionsNestedInputSchema } from './SourceUpdateOneWithoutQuestionsNestedInputSchema';
import { QuestionTagUpdateManyWithoutQuestionNestedInputSchema } from './QuestionTagUpdateManyWithoutQuestionNestedInputSchema';
import { UserUpdateOneRequiredWithoutCreatedQuestionsNestedInputSchema } from './UserUpdateOneRequiredWithoutCreatedQuestionsNestedInputSchema';
import { UserUpdateOneRequiredWithoutUpdatedQuestionsNestedInputSchema } from './UserUpdateOneRequiredWithoutUpdatedQuestionsNestedInputSchema';

export const QuestionUpdateInputSchema: z.ZodType<Prisma.QuestionUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answer: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  analysis: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  difficulty: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isDeleted: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.lazy(() => CategoryUpdateOneRequiredWithoutQuestionsNestedInputSchema).optional(),
  subject: z.lazy(() => SubjectUpdateOneRequiredWithoutQuestionsNestedInputSchema).optional(),
  grade: z.lazy(() => GradeUpdateOneRequiredWithoutQuestionsNestedInputSchema).optional(),
  source: z.lazy(() => SourceUpdateOneWithoutQuestionsNestedInputSchema).optional(),
  tags: z.lazy(() => QuestionTagUpdateManyWithoutQuestionNestedInputSchema).optional(),
  createdBy: z.lazy(() => UserUpdateOneRequiredWithoutCreatedQuestionsNestedInputSchema).optional(),
  updatedBy: z.lazy(() => UserUpdateOneRequiredWithoutUpdatedQuestionsNestedInputSchema).optional()
}).strict();

export default QuestionUpdateInputSchema;

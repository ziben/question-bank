import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CategoryCreateNestedOneWithoutQuestionsInputSchema } from './CategoryCreateNestedOneWithoutQuestionsInputSchema';
import { GradeCreateNestedOneWithoutQuestionsInputSchema } from './GradeCreateNestedOneWithoutQuestionsInputSchema';
import { SourceCreateNestedOneWithoutQuestionsInputSchema } from './SourceCreateNestedOneWithoutQuestionsInputSchema';
import { QuestionTagCreateNestedManyWithoutQuestionInputSchema } from './QuestionTagCreateNestedManyWithoutQuestionInputSchema';
import { UserCreateNestedOneWithoutCreatedQuestionsInputSchema } from './UserCreateNestedOneWithoutCreatedQuestionsInputSchema';
import { UserCreateNestedOneWithoutUpdatedQuestionsInputSchema } from './UserCreateNestedOneWithoutUpdatedQuestionsInputSchema';

export const QuestionCreateWithoutSubjectInputSchema: z.ZodType<Prisma.QuestionCreateWithoutSubjectInput> = z.object({
  title: z.string(),
  content: z.string(),
  answer: z.string().optional().nullable(),
  analysis: z.string().optional().nullable(),
  difficulty: z.number().int().optional(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isDeleted: z.boolean().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutQuestionsInputSchema),
  grade: z.lazy(() => GradeCreateNestedOneWithoutQuestionsInputSchema),
  source: z.lazy(() => SourceCreateNestedOneWithoutQuestionsInputSchema).optional(),
  tags: z.lazy(() => QuestionTagCreateNestedManyWithoutQuestionInputSchema).optional(),
  createdBy: z.lazy(() => UserCreateNestedOneWithoutCreatedQuestionsInputSchema),
  updatedBy: z.lazy(() => UserCreateNestedOneWithoutUpdatedQuestionsInputSchema)
}).strict();

export default QuestionCreateWithoutSubjectInputSchema;

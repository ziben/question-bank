import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CategoryOrderByWithRelationInputSchema } from './CategoryOrderByWithRelationInputSchema';
import { SubjectOrderByWithRelationInputSchema } from './SubjectOrderByWithRelationInputSchema';
import { GradeOrderByWithRelationInputSchema } from './GradeOrderByWithRelationInputSchema';
import { SourceOrderByWithRelationInputSchema } from './SourceOrderByWithRelationInputSchema';
import { QuestionTagOrderByRelationAggregateInputSchema } from './QuestionTagOrderByRelationAggregateInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const QuestionOrderByWithRelationInputSchema: z.ZodType<Prisma.QuestionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  answer: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  analysis: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  difficulty: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  categoryId: z.lazy(() => SortOrderSchema).optional(),
  subjectId: z.lazy(() => SortOrderSchema).optional(),
  gradeId: z.lazy(() => SortOrderSchema).optional(),
  sourceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isDeleted: z.lazy(() => SortOrderSchema).optional(),
  creatorId: z.lazy(() => SortOrderSchema).optional(),
  updaterId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputSchema).optional(),
  subject: z.lazy(() => SubjectOrderByWithRelationInputSchema).optional(),
  grade: z.lazy(() => GradeOrderByWithRelationInputSchema).optional(),
  source: z.lazy(() => SourceOrderByWithRelationInputSchema).optional(),
  tags: z.lazy(() => QuestionTagOrderByRelationAggregateInputSchema).optional(),
  createdBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  updatedBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export default QuestionOrderByWithRelationInputSchema;

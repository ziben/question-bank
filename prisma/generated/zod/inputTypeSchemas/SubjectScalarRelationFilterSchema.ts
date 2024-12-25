import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereInputSchema } from './SubjectWhereInputSchema';

export const SubjectScalarRelationFilterSchema: z.ZodType<Prisma.SubjectScalarRelationFilter> = z.object({
  is: z.lazy(() => SubjectWhereInputSchema).optional(),
  isNot: z.lazy(() => SubjectWhereInputSchema).optional()
}).strict();

export default SubjectScalarRelationFilterSchema;

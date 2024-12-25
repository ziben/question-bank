import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereInputSchema } from './GradeWhereInputSchema';

export const GradeListRelationFilterSchema: z.ZodType<Prisma.GradeListRelationFilter> = z.object({
  every: z.lazy(() => GradeWhereInputSchema).optional(),
  some: z.lazy(() => GradeWhereInputSchema).optional(),
  none: z.lazy(() => GradeWhereInputSchema).optional()
}).strict();

export default GradeListRelationFilterSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereInputSchema } from './SourceWhereInputSchema';

export const SourceListRelationFilterSchema: z.ZodType<Prisma.SourceListRelationFilter> = z.object({
  every: z.lazy(() => SourceWhereInputSchema).optional(),
  some: z.lazy(() => SourceWhereInputSchema).optional(),
  none: z.lazy(() => SourceWhereInputSchema).optional()
}).strict();

export default SourceListRelationFilterSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SystemLogWhereInputSchema } from './SystemLogWhereInputSchema';

export const SystemLogListRelationFilterSchema: z.ZodType<Prisma.SystemLogListRelationFilter> = z.object({
  every: z.lazy(() => SystemLogWhereInputSchema).optional(),
  some: z.lazy(() => SystemLogWhereInputSchema).optional(),
  none: z.lazy(() => SystemLogWhereInputSchema).optional()
}).strict();

export default SystemLogListRelationFilterSchema;

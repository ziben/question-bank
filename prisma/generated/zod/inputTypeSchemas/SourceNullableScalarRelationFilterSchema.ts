import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceWhereInputSchema } from './SourceWhereInputSchema';

export const SourceNullableScalarRelationFilterSchema: z.ZodType<Prisma.SourceNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SourceWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SourceWhereInputSchema).optional().nullable()
}).strict();

export default SourceNullableScalarRelationFilterSchema;

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemLogSelectSchema } from '../inputTypeSchemas/SystemLogSelectSchema';
import { SystemLogIncludeSchema } from '../inputTypeSchemas/SystemLogIncludeSchema';

export const SystemLogArgsSchema: z.ZodType<Prisma.SystemLogDefaultArgs> = z.object({
  select: z.lazy(() => SystemLogSelectSchema).optional(),
  include: z.lazy(() => SystemLogIncludeSchema).optional(),
}).strict();

export default SystemLogArgsSchema;

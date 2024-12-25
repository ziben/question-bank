import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceSelectSchema } from '../inputTypeSchemas/SourceSelectSchema';
import { SourceIncludeSchema } from '../inputTypeSchemas/SourceIncludeSchema';

export const SourceArgsSchema: z.ZodType<Prisma.SourceDefaultArgs> = z.object({
  select: z.lazy(() => SourceSelectSchema).optional(),
  include: z.lazy(() => SourceIncludeSchema).optional(),
}).strict();

export default SourceArgsSchema;

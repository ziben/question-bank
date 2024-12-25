import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SourceCountOutputTypeSelectSchema } from './SourceCountOutputTypeSelectSchema';

export const SourceCountOutputTypeArgsSchema: z.ZodType<Prisma.SourceCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SourceCountOutputTypeSelectSchema).nullish(),
}).strict();

export default SourceCountOutputTypeSelectSchema;

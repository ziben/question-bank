import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceScalarWhereInputSchema } from './SourceScalarWhereInputSchema';
import { SourceUpdateManyMutationInputSchema } from './SourceUpdateManyMutationInputSchema';
import { SourceUncheckedUpdateManyWithoutCreatedByInputSchema } from './SourceUncheckedUpdateManyWithoutCreatedByInputSchema';

export const SourceUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.SourceUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => SourceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SourceUpdateManyMutationInputSchema),z.lazy(() => SourceUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default SourceUpdateManyWithWhereWithoutCreatedByInputSchema;

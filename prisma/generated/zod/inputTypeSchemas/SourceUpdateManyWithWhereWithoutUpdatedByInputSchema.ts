import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceScalarWhereInputSchema } from './SourceScalarWhereInputSchema';
import { SourceUpdateManyMutationInputSchema } from './SourceUpdateManyMutationInputSchema';
import { SourceUncheckedUpdateManyWithoutUpdatedByInputSchema } from './SourceUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const SourceUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.SourceUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => SourceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SourceUpdateManyMutationInputSchema),z.lazy(() => SourceUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default SourceUpdateManyWithWhereWithoutUpdatedByInputSchema;

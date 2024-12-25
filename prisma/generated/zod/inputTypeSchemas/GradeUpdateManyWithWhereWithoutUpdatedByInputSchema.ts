import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeScalarWhereInputSchema } from './GradeScalarWhereInputSchema';
import { GradeUpdateManyMutationInputSchema } from './GradeUpdateManyMutationInputSchema';
import { GradeUncheckedUpdateManyWithoutUpdatedByInputSchema } from './GradeUncheckedUpdateManyWithoutUpdatedByInputSchema';

export const GradeUpdateManyWithWhereWithoutUpdatedByInputSchema: z.ZodType<Prisma.GradeUpdateManyWithWhereWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => GradeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GradeUpdateManyMutationInputSchema),z.lazy(() => GradeUncheckedUpdateManyWithoutUpdatedByInputSchema) ]),
}).strict();

export default GradeUpdateManyWithWhereWithoutUpdatedByInputSchema;

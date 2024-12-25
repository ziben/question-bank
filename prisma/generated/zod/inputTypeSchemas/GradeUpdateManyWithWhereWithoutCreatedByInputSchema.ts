import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeScalarWhereInputSchema } from './GradeScalarWhereInputSchema';
import { GradeUpdateManyMutationInputSchema } from './GradeUpdateManyMutationInputSchema';
import { GradeUncheckedUpdateManyWithoutCreatedByInputSchema } from './GradeUncheckedUpdateManyWithoutCreatedByInputSchema';

export const GradeUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.GradeUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => GradeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => GradeUpdateManyMutationInputSchema),z.lazy(() => GradeUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default GradeUpdateManyWithWhereWithoutCreatedByInputSchema;

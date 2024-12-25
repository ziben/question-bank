import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeCreateWithoutUpdatedByInputSchema } from './GradeCreateWithoutUpdatedByInputSchema';
import { GradeUncheckedCreateWithoutUpdatedByInputSchema } from './GradeUncheckedCreateWithoutUpdatedByInputSchema';

export const GradeCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.GradeCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GradeCreateWithoutUpdatedByInputSchema),z.lazy(() => GradeUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default GradeCreateOrConnectWithoutUpdatedByInputSchema;

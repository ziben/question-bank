import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeCreateWithoutCreatedByInputSchema } from './GradeCreateWithoutCreatedByInputSchema';
import { GradeUncheckedCreateWithoutCreatedByInputSchema } from './GradeUncheckedCreateWithoutCreatedByInputSchema';

export const GradeCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.GradeCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => GradeCreateWithoutCreatedByInputSchema),z.lazy(() => GradeUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default GradeCreateOrConnectWithoutCreatedByInputSchema;

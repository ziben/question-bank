import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateWithoutUpdatedByInputSchema } from './GradeUpdateWithoutUpdatedByInputSchema';
import { GradeUncheckedUpdateWithoutUpdatedByInputSchema } from './GradeUncheckedUpdateWithoutUpdatedByInputSchema';
import { GradeCreateWithoutUpdatedByInputSchema } from './GradeCreateWithoutUpdatedByInputSchema';
import { GradeUncheckedCreateWithoutUpdatedByInputSchema } from './GradeUncheckedCreateWithoutUpdatedByInputSchema';

export const GradeUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.GradeUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GradeUpdateWithoutUpdatedByInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => GradeCreateWithoutUpdatedByInputSchema),z.lazy(() => GradeUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default GradeUpsertWithWhereUniqueWithoutUpdatedByInputSchema;

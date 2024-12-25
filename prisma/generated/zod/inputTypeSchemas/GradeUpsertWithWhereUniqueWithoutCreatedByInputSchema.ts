import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateWithoutCreatedByInputSchema } from './GradeUpdateWithoutCreatedByInputSchema';
import { GradeUncheckedUpdateWithoutCreatedByInputSchema } from './GradeUncheckedUpdateWithoutCreatedByInputSchema';
import { GradeCreateWithoutCreatedByInputSchema } from './GradeCreateWithoutCreatedByInputSchema';
import { GradeUncheckedCreateWithoutCreatedByInputSchema } from './GradeUncheckedCreateWithoutCreatedByInputSchema';

export const GradeUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.GradeUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => GradeUpdateWithoutCreatedByInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => GradeCreateWithoutCreatedByInputSchema),z.lazy(() => GradeUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default GradeUpsertWithWhereUniqueWithoutCreatedByInputSchema;

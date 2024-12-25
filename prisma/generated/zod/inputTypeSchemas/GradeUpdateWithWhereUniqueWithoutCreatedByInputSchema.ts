import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateWithoutCreatedByInputSchema } from './GradeUpdateWithoutCreatedByInputSchema';
import { GradeUncheckedUpdateWithoutCreatedByInputSchema } from './GradeUncheckedUpdateWithoutCreatedByInputSchema';

export const GradeUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.GradeUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GradeUpdateWithoutCreatedByInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default GradeUpdateWithWhereUniqueWithoutCreatedByInputSchema;

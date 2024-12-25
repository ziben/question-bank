import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateWithoutUpdatedByInputSchema } from './GradeUpdateWithoutUpdatedByInputSchema';
import { GradeUncheckedUpdateWithoutUpdatedByInputSchema } from './GradeUncheckedUpdateWithoutUpdatedByInputSchema';

export const GradeUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.GradeUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => GradeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => GradeUpdateWithoutUpdatedByInputSchema),z.lazy(() => GradeUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default GradeUpdateWithWhereUniqueWithoutUpdatedByInputSchema;

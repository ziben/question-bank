import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutUpdatedByInputSchema } from './SubjectUpdateWithoutUpdatedByInputSchema';
import { SubjectUncheckedUpdateWithoutUpdatedByInputSchema } from './SubjectUncheckedUpdateWithoutUpdatedByInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutUpdatedByInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutUpdatedByInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutUpdatedByInputSchema;

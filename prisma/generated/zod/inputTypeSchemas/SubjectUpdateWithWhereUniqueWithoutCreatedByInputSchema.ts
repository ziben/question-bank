import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutCreatedByInputSchema } from './SubjectUpdateWithoutCreatedByInputSchema';
import { SubjectUncheckedUpdateWithoutCreatedByInputSchema } from './SubjectUncheckedUpdateWithoutCreatedByInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutCreatedByInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutCreatedByInputSchema;

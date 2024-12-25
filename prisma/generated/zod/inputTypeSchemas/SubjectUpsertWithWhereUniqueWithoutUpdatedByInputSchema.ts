import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutUpdatedByInputSchema } from './SubjectUpdateWithoutUpdatedByInputSchema';
import { SubjectUncheckedUpdateWithoutUpdatedByInputSchema } from './SubjectUncheckedUpdateWithoutUpdatedByInputSchema';
import { SubjectCreateWithoutUpdatedByInputSchema } from './SubjectCreateWithoutUpdatedByInputSchema';
import { SubjectUncheckedCreateWithoutUpdatedByInputSchema } from './SubjectUncheckedCreateWithoutUpdatedByInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutUpdatedByInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutUpdatedByInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutUpdatedByInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutUpdatedByInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutUpdatedByInputSchema;

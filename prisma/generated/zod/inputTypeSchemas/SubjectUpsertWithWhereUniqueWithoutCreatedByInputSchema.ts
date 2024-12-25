import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutCreatedByInputSchema } from './SubjectUpdateWithoutCreatedByInputSchema';
import { SubjectUncheckedUpdateWithoutCreatedByInputSchema } from './SubjectUncheckedUpdateWithoutCreatedByInputSchema';
import { SubjectCreateWithoutCreatedByInputSchema } from './SubjectCreateWithoutCreatedByInputSchema';
import { SubjectUncheckedCreateWithoutCreatedByInputSchema } from './SubjectUncheckedCreateWithoutCreatedByInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutCreatedByInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutCreatedByInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutCreatedByInputSchema;

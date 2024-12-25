import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutCreatedByInputSchema } from './SubjectCreateWithoutCreatedByInputSchema';
import { SubjectUncheckedCreateWithoutCreatedByInputSchema } from './SubjectUncheckedCreateWithoutCreatedByInputSchema';

export const SubjectCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutCreatedByInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutCreatedByInputSchema;

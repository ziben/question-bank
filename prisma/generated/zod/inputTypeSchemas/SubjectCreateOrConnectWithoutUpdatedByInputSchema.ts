import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutUpdatedByInputSchema } from './SubjectCreateWithoutUpdatedByInputSchema';
import { SubjectUncheckedCreateWithoutUpdatedByInputSchema } from './SubjectUncheckedCreateWithoutUpdatedByInputSchema';

export const SubjectCreateOrConnectWithoutUpdatedByInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutUpdatedByInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutUpdatedByInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutUpdatedByInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutUpdatedByInputSchema;

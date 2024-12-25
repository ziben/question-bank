import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutUpdatedByInputSchema } from './SubjectCreateWithoutUpdatedByInputSchema';
import { SubjectUncheckedCreateWithoutUpdatedByInputSchema } from './SubjectUncheckedCreateWithoutUpdatedByInputSchema';
import { SubjectCreateOrConnectWithoutUpdatedByInputSchema } from './SubjectCreateOrConnectWithoutUpdatedByInputSchema';
import { SubjectCreateManyUpdatedByInputEnvelopeSchema } from './SubjectCreateManyUpdatedByInputEnvelopeSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectUncheckedCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutUpdatedByInputSchema),z.lazy(() => SubjectCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubjectCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectUncheckedCreateNestedManyWithoutUpdatedByInputSchema;

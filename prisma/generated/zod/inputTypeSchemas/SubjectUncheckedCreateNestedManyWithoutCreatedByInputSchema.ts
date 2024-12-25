import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutCreatedByInputSchema } from './SubjectCreateWithoutCreatedByInputSchema';
import { SubjectUncheckedCreateWithoutCreatedByInputSchema } from './SubjectUncheckedCreateWithoutCreatedByInputSchema';
import { SubjectCreateOrConnectWithoutCreatedByInputSchema } from './SubjectCreateOrConnectWithoutCreatedByInputSchema';
import { SubjectCreateManyCreatedByInputEnvelopeSchema } from './SubjectCreateManyCreatedByInputEnvelopeSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutCreatedByInputSchema),z.lazy(() => SubjectCreateWithoutCreatedByInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubjectCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectUncheckedCreateNestedManyWithoutCreatedByInputSchema;

import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateWithoutUpdatedByInputSchema } from './GradeCreateWithoutUpdatedByInputSchema';
import { GradeUncheckedCreateWithoutUpdatedByInputSchema } from './GradeUncheckedCreateWithoutUpdatedByInputSchema';
import { GradeCreateOrConnectWithoutUpdatedByInputSchema } from './GradeCreateOrConnectWithoutUpdatedByInputSchema';
import { GradeCreateManyUpdatedByInputEnvelopeSchema } from './GradeCreateManyUpdatedByInputEnvelopeSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';

export const GradeCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.GradeCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutUpdatedByInputSchema),z.lazy(() => GradeCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => GradeUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => GradeUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GradeCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => GradeCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GradeCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default GradeCreateNestedManyWithoutUpdatedByInputSchema;

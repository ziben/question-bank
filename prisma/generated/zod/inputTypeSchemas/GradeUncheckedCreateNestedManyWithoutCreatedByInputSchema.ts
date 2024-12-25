import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateWithoutCreatedByInputSchema } from './GradeCreateWithoutCreatedByInputSchema';
import { GradeUncheckedCreateWithoutCreatedByInputSchema } from './GradeUncheckedCreateWithoutCreatedByInputSchema';
import { GradeCreateOrConnectWithoutCreatedByInputSchema } from './GradeCreateOrConnectWithoutCreatedByInputSchema';
import { GradeCreateManyCreatedByInputEnvelopeSchema } from './GradeCreateManyCreatedByInputEnvelopeSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';

export const GradeUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.GradeUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutCreatedByInputSchema),z.lazy(() => GradeCreateWithoutCreatedByInputSchema).array(),z.lazy(() => GradeUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => GradeUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GradeCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => GradeCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GradeCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default GradeUncheckedCreateNestedManyWithoutCreatedByInputSchema;

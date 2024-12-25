import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateWithoutCreatedByInputSchema } from './GradeCreateWithoutCreatedByInputSchema';
import { GradeUncheckedCreateWithoutCreatedByInputSchema } from './GradeUncheckedCreateWithoutCreatedByInputSchema';
import { GradeCreateOrConnectWithoutCreatedByInputSchema } from './GradeCreateOrConnectWithoutCreatedByInputSchema';
import { GradeUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './GradeUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { GradeCreateManyCreatedByInputEnvelopeSchema } from './GradeCreateManyCreatedByInputEnvelopeSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './GradeUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { GradeUpdateManyWithWhereWithoutCreatedByInputSchema } from './GradeUpdateManyWithWhereWithoutCreatedByInputSchema';
import { GradeScalarWhereInputSchema } from './GradeScalarWhereInputSchema';

export const GradeUncheckedUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.GradeUncheckedUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutCreatedByInputSchema),z.lazy(() => GradeCreateWithoutCreatedByInputSchema).array(),z.lazy(() => GradeUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => GradeUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GradeCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => GradeCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GradeUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => GradeUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GradeCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GradeUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => GradeUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GradeUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => GradeUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GradeScalarWhereInputSchema),z.lazy(() => GradeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default GradeUncheckedUpdateManyWithoutCreatedByNestedInputSchema;

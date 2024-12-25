import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { GradeCreateWithoutUpdatedByInputSchema } from './GradeCreateWithoutUpdatedByInputSchema';
import { GradeUncheckedCreateWithoutUpdatedByInputSchema } from './GradeUncheckedCreateWithoutUpdatedByInputSchema';
import { GradeCreateOrConnectWithoutUpdatedByInputSchema } from './GradeCreateOrConnectWithoutUpdatedByInputSchema';
import { GradeUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './GradeUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { GradeCreateManyUpdatedByInputEnvelopeSchema } from './GradeCreateManyUpdatedByInputEnvelopeSchema';
import { GradeWhereUniqueInputSchema } from './GradeWhereUniqueInputSchema';
import { GradeUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './GradeUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { GradeUpdateManyWithWhereWithoutUpdatedByInputSchema } from './GradeUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { GradeScalarWhereInputSchema } from './GradeScalarWhereInputSchema';

export const GradeUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.GradeUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => GradeCreateWithoutUpdatedByInputSchema),z.lazy(() => GradeCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => GradeUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => GradeUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => GradeCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => GradeCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => GradeUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => GradeUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => GradeCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => GradeWhereUniqueInputSchema),z.lazy(() => GradeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => GradeUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => GradeUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => GradeUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => GradeUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => GradeScalarWhereInputSchema),z.lazy(() => GradeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default GradeUpdateManyWithoutUpdatedByNestedInputSchema;

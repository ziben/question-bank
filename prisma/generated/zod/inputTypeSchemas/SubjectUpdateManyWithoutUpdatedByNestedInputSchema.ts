import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutUpdatedByInputSchema } from './SubjectCreateWithoutUpdatedByInputSchema';
import { SubjectUncheckedCreateWithoutUpdatedByInputSchema } from './SubjectUncheckedCreateWithoutUpdatedByInputSchema';
import { SubjectCreateOrConnectWithoutUpdatedByInputSchema } from './SubjectCreateOrConnectWithoutUpdatedByInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutUpdatedByInputSchema } from './SubjectUpsertWithWhereUniqueWithoutUpdatedByInputSchema';
import { SubjectCreateManyUpdatedByInputEnvelopeSchema } from './SubjectCreateManyUpdatedByInputEnvelopeSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutUpdatedByInputSchema } from './SubjectUpdateWithWhereUniqueWithoutUpdatedByInputSchema';
import { SubjectUpdateManyWithWhereWithoutUpdatedByInputSchema } from './SubjectUpdateManyWithWhereWithoutUpdatedByInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUpdateManyWithoutUpdatedByNestedInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithoutUpdatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutUpdatedByInputSchema),z.lazy(() => SubjectCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubjectCreateManyUpdatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutUpdatedByInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutUpdatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutUpdatedByInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutUpdatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUpdateManyWithoutUpdatedByNestedInputSchema;

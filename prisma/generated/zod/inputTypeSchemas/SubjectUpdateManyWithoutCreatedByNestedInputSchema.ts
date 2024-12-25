import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutCreatedByInputSchema } from './SubjectCreateWithoutCreatedByInputSchema';
import { SubjectUncheckedCreateWithoutCreatedByInputSchema } from './SubjectUncheckedCreateWithoutCreatedByInputSchema';
import { SubjectCreateOrConnectWithoutCreatedByInputSchema } from './SubjectCreateOrConnectWithoutCreatedByInputSchema';
import { SubjectUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './SubjectUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { SubjectCreateManyCreatedByInputEnvelopeSchema } from './SubjectCreateManyCreatedByInputEnvelopeSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './SubjectUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { SubjectUpdateManyWithWhereWithoutCreatedByInputSchema } from './SubjectUpdateManyWithWhereWithoutCreatedByInputSchema';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';

export const SubjectUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutCreatedByInputSchema),z.lazy(() => SubjectCreateWithoutCreatedByInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SubjectUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => SubjectUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SubjectCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => SubjectUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SubjectUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => SubjectUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SubjectScalarWhereInputSchema),z.lazy(() => SubjectScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default SubjectUpdateManyWithoutCreatedByNestedInputSchema;

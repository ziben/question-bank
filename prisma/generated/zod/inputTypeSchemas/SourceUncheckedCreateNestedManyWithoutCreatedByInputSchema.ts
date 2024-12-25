import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceCreateWithoutCreatedByInputSchema } from './SourceCreateWithoutCreatedByInputSchema';
import { SourceUncheckedCreateWithoutCreatedByInputSchema } from './SourceUncheckedCreateWithoutCreatedByInputSchema';
import { SourceCreateOrConnectWithoutCreatedByInputSchema } from './SourceCreateOrConnectWithoutCreatedByInputSchema';
import { SourceCreateManyCreatedByInputEnvelopeSchema } from './SourceCreateManyCreatedByInputEnvelopeSchema';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';

export const SourceUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.SourceUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => SourceCreateWithoutCreatedByInputSchema),z.lazy(() => SourceCreateWithoutCreatedByInputSchema).array(),z.lazy(() => SourceUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => SourceUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SourceCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => SourceCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SourceCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SourceUncheckedCreateNestedManyWithoutCreatedByInputSchema;

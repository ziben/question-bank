import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SourceCreateWithoutUpdatedByInputSchema } from './SourceCreateWithoutUpdatedByInputSchema';
import { SourceUncheckedCreateWithoutUpdatedByInputSchema } from './SourceUncheckedCreateWithoutUpdatedByInputSchema';
import { SourceCreateOrConnectWithoutUpdatedByInputSchema } from './SourceCreateOrConnectWithoutUpdatedByInputSchema';
import { SourceCreateManyUpdatedByInputEnvelopeSchema } from './SourceCreateManyUpdatedByInputEnvelopeSchema';
import { SourceWhereUniqueInputSchema } from './SourceWhereUniqueInputSchema';

export const SourceCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.SourceCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => SourceCreateWithoutUpdatedByInputSchema),z.lazy(() => SourceCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => SourceUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => SourceUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SourceCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => SourceCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SourceCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SourceWhereUniqueInputSchema),z.lazy(() => SourceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SourceCreateNestedManyWithoutUpdatedByInputSchema;

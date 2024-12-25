import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutUpdatedByInputSchema } from './TagCreateWithoutUpdatedByInputSchema';
import { TagUncheckedCreateWithoutUpdatedByInputSchema } from './TagUncheckedCreateWithoutUpdatedByInputSchema';
import { TagCreateOrConnectWithoutUpdatedByInputSchema } from './TagCreateOrConnectWithoutUpdatedByInputSchema';
import { TagCreateManyUpdatedByInputEnvelopeSchema } from './TagCreateManyUpdatedByInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagUncheckedCreateNestedManyWithoutUpdatedByInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutUpdatedByInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutUpdatedByInputSchema),z.lazy(() => TagCreateWithoutUpdatedByInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutUpdatedByInputSchema),z.lazy(() => TagUncheckedCreateWithoutUpdatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutUpdatedByInputSchema),z.lazy(() => TagCreateOrConnectWithoutUpdatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyUpdatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagUncheckedCreateNestedManyWithoutUpdatedByInputSchema;

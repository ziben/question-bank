import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutCreatedByInputSchema } from './TagCreateWithoutCreatedByInputSchema';
import { TagUncheckedCreateWithoutCreatedByInputSchema } from './TagUncheckedCreateWithoutCreatedByInputSchema';
import { TagCreateOrConnectWithoutCreatedByInputSchema } from './TagCreateOrConnectWithoutCreatedByInputSchema';
import { TagCreateManyCreatedByInputEnvelopeSchema } from './TagCreateManyCreatedByInputEnvelopeSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutCreatedByInputSchema),z.lazy(() => TagCreateWithoutCreatedByInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => TagUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => TagCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TagCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutCreatedByInputSchema;

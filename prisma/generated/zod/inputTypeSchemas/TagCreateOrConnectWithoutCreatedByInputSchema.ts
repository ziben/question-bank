import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutCreatedByInputSchema } from './TagCreateWithoutCreatedByInputSchema';
import { TagUncheckedCreateWithoutCreatedByInputSchema } from './TagUncheckedCreateWithoutCreatedByInputSchema';

export const TagCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutCreatedByInputSchema),z.lazy(() => TagUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutCreatedByInputSchema;

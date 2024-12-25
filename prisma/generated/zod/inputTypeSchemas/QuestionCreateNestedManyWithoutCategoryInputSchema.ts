import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutCategoryInputSchema } from './QuestionCreateWithoutCategoryInputSchema';
import { QuestionUncheckedCreateWithoutCategoryInputSchema } from './QuestionUncheckedCreateWithoutCategoryInputSchema';
import { QuestionCreateOrConnectWithoutCategoryInputSchema } from './QuestionCreateOrConnectWithoutCategoryInputSchema';
import { QuestionCreateManyCategoryInputEnvelopeSchema } from './QuestionCreateManyCategoryInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';

export const QuestionCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.QuestionCreateNestedManyWithoutCategoryInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutCategoryInputSchema),z.lazy(() => QuestionCreateWithoutCategoryInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionCreateNestedManyWithoutCategoryInputSchema;

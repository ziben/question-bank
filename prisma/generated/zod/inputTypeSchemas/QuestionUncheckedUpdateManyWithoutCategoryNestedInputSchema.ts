import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutCategoryInputSchema } from './QuestionCreateWithoutCategoryInputSchema';
import { QuestionUncheckedCreateWithoutCategoryInputSchema } from './QuestionUncheckedCreateWithoutCategoryInputSchema';
import { QuestionCreateOrConnectWithoutCategoryInputSchema } from './QuestionCreateOrConnectWithoutCategoryInputSchema';
import { QuestionUpsertWithWhereUniqueWithoutCategoryInputSchema } from './QuestionUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { QuestionCreateManyCategoryInputEnvelopeSchema } from './QuestionCreateManyCategoryInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateWithWhereUniqueWithoutCategoryInputSchema } from './QuestionUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { QuestionUpdateManyWithWhereWithoutCategoryInputSchema } from './QuestionUpdateManyWithWhereWithoutCategoryInputSchema';
import { QuestionScalarWhereInputSchema } from './QuestionScalarWhereInputSchema';

export const QuestionUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.QuestionUncheckedUpdateManyWithoutCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutCategoryInputSchema),z.lazy(() => QuestionCreateWithoutCategoryInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutCategoryInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutCategoryInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => QuestionUpsertWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => QuestionUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateWithWhereUniqueWithoutCategoryInputSchema),z.lazy(() => QuestionUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => QuestionUpdateManyWithWhereWithoutCategoryInputSchema),z.lazy(() => QuestionUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => QuestionScalarWhereInputSchema),z.lazy(() => QuestionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default QuestionUncheckedUpdateManyWithoutCategoryNestedInputSchema;

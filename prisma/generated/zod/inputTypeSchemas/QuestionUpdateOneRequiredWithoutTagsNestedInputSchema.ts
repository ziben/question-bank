import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutTagsInputSchema } from './QuestionCreateWithoutTagsInputSchema';
import { QuestionUncheckedCreateWithoutTagsInputSchema } from './QuestionUncheckedCreateWithoutTagsInputSchema';
import { QuestionCreateOrConnectWithoutTagsInputSchema } from './QuestionCreateOrConnectWithoutTagsInputSchema';
import { QuestionUpsertWithoutTagsInputSchema } from './QuestionUpsertWithoutTagsInputSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';
import { QuestionUpdateToOneWithWhereWithoutTagsInputSchema } from './QuestionUpdateToOneWithWhereWithoutTagsInputSchema';
import { QuestionUpdateWithoutTagsInputSchema } from './QuestionUpdateWithoutTagsInputSchema';
import { QuestionUncheckedUpdateWithoutTagsInputSchema } from './QuestionUncheckedUpdateWithoutTagsInputSchema';

export const QuestionUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.QuestionUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutTagsInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => QuestionCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => QuestionUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => QuestionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => QuestionUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => QuestionUpdateWithoutTagsInputSchema),z.lazy(() => QuestionUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default QuestionUpdateOneRequiredWithoutTagsNestedInputSchema;

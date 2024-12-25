import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QuestionCreateWithoutSourceInputSchema } from './QuestionCreateWithoutSourceInputSchema';
import { QuestionUncheckedCreateWithoutSourceInputSchema } from './QuestionUncheckedCreateWithoutSourceInputSchema';
import { QuestionCreateOrConnectWithoutSourceInputSchema } from './QuestionCreateOrConnectWithoutSourceInputSchema';
import { QuestionCreateManySourceInputEnvelopeSchema } from './QuestionCreateManySourceInputEnvelopeSchema';
import { QuestionWhereUniqueInputSchema } from './QuestionWhereUniqueInputSchema';

export const QuestionUncheckedCreateNestedManyWithoutSourceInputSchema: z.ZodType<Prisma.QuestionUncheckedCreateNestedManyWithoutSourceInput> = z.object({
  create: z.union([ z.lazy(() => QuestionCreateWithoutSourceInputSchema),z.lazy(() => QuestionCreateWithoutSourceInputSchema).array(),z.lazy(() => QuestionUncheckedCreateWithoutSourceInputSchema),z.lazy(() => QuestionUncheckedCreateWithoutSourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QuestionCreateOrConnectWithoutSourceInputSchema),z.lazy(() => QuestionCreateOrConnectWithoutSourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => QuestionCreateManySourceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => QuestionWhereUniqueInputSchema),z.lazy(() => QuestionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QuestionUncheckedCreateNestedManyWithoutSourceInputSchema;

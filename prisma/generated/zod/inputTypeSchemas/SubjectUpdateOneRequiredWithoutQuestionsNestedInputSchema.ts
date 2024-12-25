import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutQuestionsInputSchema } from './SubjectCreateWithoutQuestionsInputSchema';
import { SubjectUncheckedCreateWithoutQuestionsInputSchema } from './SubjectUncheckedCreateWithoutQuestionsInputSchema';
import { SubjectCreateOrConnectWithoutQuestionsInputSchema } from './SubjectCreateOrConnectWithoutQuestionsInputSchema';
import { SubjectUpsertWithoutQuestionsInputSchema } from './SubjectUpsertWithoutQuestionsInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateToOneWithWhereWithoutQuestionsInputSchema } from './SubjectUpdateToOneWithWhereWithoutQuestionsInputSchema';
import { SubjectUpdateWithoutQuestionsInputSchema } from './SubjectUpdateWithoutQuestionsInputSchema';
import { SubjectUncheckedUpdateWithoutQuestionsInputSchema } from './SubjectUncheckedUpdateWithoutQuestionsInputSchema';

export const SubjectUpdateOneRequiredWithoutQuestionsNestedInputSchema: z.ZodType<Prisma.SubjectUpdateOneRequiredWithoutQuestionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutQuestionsInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutQuestionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SubjectCreateOrConnectWithoutQuestionsInputSchema).optional(),
  upsert: z.lazy(() => SubjectUpsertWithoutQuestionsInputSchema).optional(),
  connect: z.lazy(() => SubjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SubjectUpdateToOneWithWhereWithoutQuestionsInputSchema),z.lazy(() => SubjectUpdateWithoutQuestionsInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutQuestionsInputSchema) ]).optional(),
}).strict();

export default SubjectUpdateOneRequiredWithoutQuestionsNestedInputSchema;

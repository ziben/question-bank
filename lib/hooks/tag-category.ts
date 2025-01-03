/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, TagCategory } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateTagCategory(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(TagCategory | undefined), DefaultError, Prisma.TagCategoryCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(TagCategory | undefined), DefaultError, Prisma.TagCategoryCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCategoryCreateArgs, DefaultError, TagCategory, true>('TagCategory', 'POST', `${endpoint}/tagCategory/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCategoryCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCategoryCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyTagCategory(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagCategoryCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagCategoryCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCategoryCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('TagCategory', 'POST', `${endpoint}/tagCategory/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCategoryCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCategoryCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyTagCategory<TArgs extends Prisma.TagCategoryFindManyArgs, TQueryFnData = Array<Prisma.TagCategoryGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagCategoryFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagCategoryFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TagCategory', `${endpoint}/tagCategory/findMany`, args, options, fetch);
}

export function useInfiniteFindManyTagCategory<TArgs extends Prisma.TagCategoryFindManyArgs, TQueryFnData = Array<Prisma.TagCategoryGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagCategoryFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagCategoryFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('TagCategory', `${endpoint}/tagCategory/findMany`, args, options, fetch);
}

export function useFindUniqueTagCategory<TArgs extends Prisma.TagCategoryFindUniqueArgs, TQueryFnData = Prisma.TagCategoryGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagCategoryFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagCategoryFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TagCategory', `${endpoint}/tagCategory/findUnique`, args, options, fetch);
}

export function useFindFirstTagCategory<TArgs extends Prisma.TagCategoryFindFirstArgs, TQueryFnData = Prisma.TagCategoryGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagCategoryFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagCategoryFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TagCategory', `${endpoint}/tagCategory/findFirst`, args, options, fetch);
}

export function useUpdateTagCategory(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(TagCategory | undefined), DefaultError, Prisma.TagCategoryUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(TagCategory | undefined), DefaultError, Prisma.TagCategoryUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCategoryUpdateArgs, DefaultError, TagCategory, true>('TagCategory', 'PUT', `${endpoint}/tagCategory/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCategoryUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCategoryUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyTagCategory(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagCategoryUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagCategoryUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCategoryUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('TagCategory', 'PUT', `${endpoint}/tagCategory/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCategoryUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCategoryUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertTagCategory(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(TagCategory | undefined), DefaultError, Prisma.TagCategoryUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(TagCategory | undefined), DefaultError, Prisma.TagCategoryUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCategoryUpsertArgs, DefaultError, TagCategory, true>('TagCategory', 'POST', `${endpoint}/tagCategory/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCategoryUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCategoryUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteTagCategory(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(TagCategory | undefined), DefaultError, Prisma.TagCategoryDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(TagCategory | undefined), DefaultError, Prisma.TagCategoryDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCategoryDeleteArgs, DefaultError, TagCategory, true>('TagCategory', 'DELETE', `${endpoint}/tagCategory/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCategoryDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCategoryDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, TagCategory, Prisma.TagCategoryGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyTagCategory(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagCategoryDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagCategoryDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCategoryDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('TagCategory', 'DELETE', `${endpoint}/tagCategory/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCategoryDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCategoryDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagCategoryDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateTagCategory<TArgs extends Prisma.TagCategoryAggregateArgs, TQueryFnData = Prisma.GetTagCategoryAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagCategoryAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagCategoryAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TagCategory', `${endpoint}/tagCategory/aggregate`, args, options, fetch);
}

export function useGroupByTagCategory<TArgs extends Prisma.TagCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.TagCategoryGroupByArgs['orderBy'] } : { orderBy?: Prisma.TagCategoryGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.TagCategoryGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.TagCategoryGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.TagCategoryGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.TagCategoryGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.TagCategoryGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.TagCategoryGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TagCategory', `${endpoint}/tagCategory/groupBy`, args, options, fetch);
}

export function useCountTagCategory<TArgs extends Prisma.TagCategoryCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.TagCategoryCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagCategoryCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagCategoryCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('TagCategory', `${endpoint}/tagCategory/count`, args, options, fetch);
}

export function useCheckTagCategory<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; isDeleted?: boolean; creatorId?: string; updaterId?: string; name?: string; code?: string; description?: string; allowMultiple?: boolean; sortOrder?: number }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('TagCategory', `${endpoint}/tagCategory/check`, args, options, fetch);
}

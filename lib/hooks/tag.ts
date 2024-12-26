/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma, Tag } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateTag(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Tag | undefined), DefaultError, Prisma.TagCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(Tag | undefined), DefaultError, Prisma.TagCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCreateArgs, DefaultError, Tag, true>('Tag', 'POST', `${endpoint}/tag/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyTag(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Tag', 'POST', `${endpoint}/tag/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyTag<TArgs extends Prisma.TagFindManyArgs, TQueryFnData = Array<Prisma.TagGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Tag', `${endpoint}/tag/findMany`, args, options, fetch);
}

export function useInfiniteFindManyTag<TArgs extends Prisma.TagFindManyArgs, TQueryFnData = Array<Prisma.TagGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Tag', `${endpoint}/tag/findMany`, args, options, fetch);
}

export function useFindUniqueTag<TArgs extends Prisma.TagFindUniqueArgs, TQueryFnData = Prisma.TagGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Tag', `${endpoint}/tag/findUnique`, args, options, fetch);
}

export function useFindFirstTag<TArgs extends Prisma.TagFindFirstArgs, TQueryFnData = Prisma.TagGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Tag', `${endpoint}/tag/findFirst`, args, options, fetch);
}

export function useUpdateTag(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Tag | undefined), DefaultError, Prisma.TagUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(Tag | undefined), DefaultError, Prisma.TagUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagUpdateArgs, DefaultError, Tag, true>('Tag', 'PUT', `${endpoint}/tag/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyTag(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Tag', 'PUT', `${endpoint}/tag/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertTag(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Tag | undefined), DefaultError, Prisma.TagUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(Tag | undefined), DefaultError, Prisma.TagUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagUpsertArgs, DefaultError, Tag, true>('Tag', 'POST', `${endpoint}/tag/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteTag(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Tag | undefined), DefaultError, Prisma.TagDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(Tag | undefined), DefaultError, Prisma.TagDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagDeleteArgs, DefaultError, Tag, true>('Tag', 'DELETE', `${endpoint}/tag/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.TagDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Tag, Prisma.TagGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyTag(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.TagDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.TagDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Tag', 'DELETE', `${endpoint}/tag/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.TagDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TagDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.TagDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateTag<TArgs extends Prisma.TagAggregateArgs, TQueryFnData = Prisma.GetTagAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Tag', `${endpoint}/tag/aggregate`, args, options, fetch);
}

export function useGroupByTag<TArgs extends Prisma.TagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.TagGroupByArgs['orderBy'] } : { orderBy?: Prisma.TagGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.TagGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.TagGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.TagGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.TagGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.TagGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.TagGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Tag', `${endpoint}/tag/groupBy`, args, options, fetch);
}

export function useCountTag<TArgs extends Prisma.TagCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.TagCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.TagCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.TagCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Tag', `${endpoint}/tag/count`, args, options, fetch);
}

export function useCheckTag<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; isDeleted?: boolean; creatorId?: string; updaterId?: string; name?: string; code?: string; description?: string; sortOrder?: number; categoryId?: string }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Tag', `${endpoint}/tag/check`, args, options, fetch);
}

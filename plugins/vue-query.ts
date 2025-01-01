import { VueQueryPlugin, QueryClient, dehydrate, hydrate, type VueQueryPluginOptions, type DehydratedState } from '@tanstack/vue-query';

export default defineNuxtPlugin((nuxt) => {
    const vueQueryState = useState<DehydratedState | null>('vue-query');

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                // Add your query client options here
            },
        },
    });
    const options: VueQueryPluginOptions = { queryClient };

    nuxt.vueApp.use(VueQueryPlugin, options);

    if (import.meta.server) {
        nuxt.hooks.hook('app:rendered', () => {
            vueQueryState.value = dehydrate(queryClient);
        });
    }

    if (import.meta.client) {
        nuxt.hooks.hook('app:created', () => {
            hydrate(queryClient, vueQueryState.value);
        });
    }
});
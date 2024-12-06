export const useSeo = (options: { title: string; description: string; image?: string }) => {
  useSeoMeta({
    title: options.title,
    ogTitle: options.title,
    description: options.description,
    ogDescription: options.description,
    ogImage: options.image,
  })
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开发工具
  devtools: { enabled: true },

  // 模块配置
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'shadcn-nuxt',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  // Google Fonts 配置
  googleFonts: {
    families: {
      'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    download: true,
  },
  // CSS 配置
  css: ['~/assets/css/main.css'],

  // PostCSS 配置
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // TypeScript 配置
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },

  // 应用配置
  app: {
    head: {
      title: '题库管理系统',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '现代化的题库管理系统' }
      ]
    }
  },

  // 兼容性日期
  compatibilityDate: '2024-11-24',

  // 运行时配置
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },

  // 构建优化
  build: {
    transpile: ['vue-toastification']
  },

  // Nitro 配置
  nitro: {
    compressPublicAssets: true
  }
})
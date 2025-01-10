// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 开发环境配置
  devtools: { enabled: true },

  // 端口配置
  devServer: {
    port: 3003
  },

  // 应用配置
  app: {
    head: {
      title: "题库管理系统",
      titleTemplate: "%s - 题库管理系统",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "现代化的题库管理系统" },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#ffffff" },
      ],
      htmlAttrs: {
        lang: "zh-CN",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  // 模块配置
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "shadcn-nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@vueuse/nuxt",
    "nuxt-lodash",
    "@formkit/auto-animate/nuxt",
    "@vee-validate/nuxt",
    "dayjs-nuxt",
  ],

  // 插件配置
  plugins: ["~/plugins/api.ts"],

  // Shadcn UI 配置
  shadcn: {
    prefix: "",
    componentDir: "./components/shadcn",
  },

  // Google Fonts 配置
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "IBM+Plex+Sans+SC": [300, 400, 500, 600, 700],
    },
    display: "swap",
    download: true,
    preload: true,
    preconnect: true,
    useStylesheet: false,
    fontsDir: "fonts",
    fontsPath: "fonts",
  },

  // 颜色模式配置
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },

  // CSS 配置
  css: ["~/assets/css/main.css"],

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
    // typeCheck: process.env.NODE_ENV === "development",
  },

  // 运行时配置
  runtimeConfig: {
    // 私有配置（仅服务端可用）
    apiSecret: process.env.API_SECRET,
    // 公共配置（客户端可用）
    public: {
      apiBase: "/api",
      deploymentUrl: process.env.DEPLOYMENT_URL,
      appVersion: process.env.npm_package_version,
    },
  },

  // 构建优化
  build: {
    transpile: ["vue-toastification"],
  },

  // Nitro 配置
  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // API 路由规则
      "/api/**": {
        cors: true,
        headers: {
          "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Headers": "*",
        },
      },
      // 静态资源缓存规则
      "/assets/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
    },
    // 开发环境存储配置
    devStorage: {
      db: {
        driver: "fs",
        base: "./data/db",
      },
    },
  },

  // 性能优化
  experimental: {
    payloadExtraction: true,
    viewTransition: true,
    componentIslands: true,
  },

  // Vite 配置
  vite: {
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue"],
            pinia: ["pinia"],
          },
        },
      },
    },
    css: {
      devSourcemap: true,
    },
    optimizeDeps: {
      include: ["vue", "pinia", "@vueuse/core"],
    },
  },

  // 应用兼容性日期
  compatibilityDate: "2024-11-24",
});

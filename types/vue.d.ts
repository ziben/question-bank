import type { Component } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    BaseButton: typeof import('../components/BaseButton.vue').default
  }
}

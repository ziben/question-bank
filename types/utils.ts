// 深度部分类型
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// 递归只读类型
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

// 排除空值类型
export type NonNullable<T> = T extends null | undefined ? never : T

// 函数类型工具
export type AsyncFunction<T = any> = (...args: any[]) => Promise<T>
export type SyncFunction<T = any> = (...args: any[]) => T

// 通用错误类型
export type ErrorType = {
  code: string | number
  message: string
  stack?: string
}

// 提取 Promise 返回类型
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

// 提取函数返回类型
export type ReturnTypeAsync<T extends (...args: any) => any> = UnwrapPromise<ReturnType<T>>

// 类型守卫工具
export type TypeGuard<T> = (value: unknown) => value is T

// 可选链工具类型
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// 排除类型工具
export type Except<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

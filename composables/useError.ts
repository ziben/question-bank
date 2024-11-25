import { useToast } from './useToast'

export function useError() {
  const toast = useToast()

  const handleError = (error: any) => {
    console.error('Error:', error)

    if (error.response) {
      // HTTP 错误
      const status = error.response.status
      const message = error.response.data?.message || '请求失败'

      switch (status) {
        case 400:
          toast.warning(message)
          break
        case 401:
          toast.error('请先登录')
          break
        case 403:
          toast.error('没有权限执行此操作')
          break
        case 404:
          toast.warning('请求的资源不存在')
          break
        case 422:
          toast.warning('提交的数据无效')
          break
        case 500:
          toast.error('服务器内部错误')
          break
        default:
          toast.error(`请求失败: ${message}`)
      }
    } else if (error.request) {
      // 网络错误
      toast.error('网络连接失败，请检查网络设置')
    } else {
      // 其他错误
      toast.error(error.message || '发生未知错误')
    }
  }

  return {
    handleError
  }
}

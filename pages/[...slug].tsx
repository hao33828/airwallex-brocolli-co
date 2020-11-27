import { useEffect } from 'react'
import { useRouter } from 'next/router'

const rootPath = '/'

/**
 * 用作catch所有非根节点的路由，强制显示唯一的首页
 */

export default function NotFoundRedirect() {
  const router = useRouter()

  useEffect(() => {
    if (router.asPath !== rootPath) {
      router.replace(rootPath)
    }
  }, [])

  return null
}

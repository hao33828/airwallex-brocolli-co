import Head from 'next/head'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { wrapper } from '../store/store'
import { initGA, logPageView } from '../utils/analytics'

import 'antd/dist/antd.css'
import '../styles/global.css'

const routeChangeComplete = 'routeChangeComplete'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  const { events, asPath } = router

  useEffect(() => {
    initGA()
    // 首次渲染的时候routeChangeComplete不触发，主动PV埋点
    if (asPath === '/') {
      logPageView()
    }
  }, [])

  useEffect(() => {
    // 路由变化调用PV埋点
    events.on(routeChangeComplete, logPageView)
    return () => {
      events.off(routeChangeComplete, logPageView)
    }
  }, [events])

  return (
    <>
      <Head>
        <title>Broccoli &amp; CO.</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(App)

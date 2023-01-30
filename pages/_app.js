import '@/styles/globals.scss'
import { Pacifico } from "@next/font/google"
import Layout from '../components/layout'

const pacifico = Pacifico({ subsets: ['latin'], weight: "400" })

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className={pacifico.className}> <Component {...pageProps} /> </div>
    </Layout>
  )
}
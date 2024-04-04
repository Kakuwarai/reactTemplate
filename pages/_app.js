import "@/styles/globals.css";

// export default function MyApp({ Component, pageProps }) {
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page)

//   return getLayout(<Component {...pageProps} />)
// }

import Layout from './layout'
import { useRouter } from 'next/router';



export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isRootRoute = router.pathname === '/';

  return (
    <div>
      {isRootRoute ?
        <Component {...pageProps} /> :
        <Layout> <Component {...pageProps} />  </Layout>}
    </div>
  )
}
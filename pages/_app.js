import '../styles/globals.css'
import { useRouter } from 'next/router';
import Layout from '../component/layout'


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === '/login' ? false : true;


  // const { data, loading, createData, deleteData } = userCollection('product')
  
  
  return (
    <Layout>
      {/* {showHeader && <Layout />} */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

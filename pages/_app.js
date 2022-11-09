import { AuthProvider } from "../providers/AuthProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // const { data, loading, createData, deleteData } = userCollection('product')
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

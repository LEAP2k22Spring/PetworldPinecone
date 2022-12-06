import "../styles/globals.css";
import "../styles/inbox.css";
import { useRouter } from "next/router";
import { AuthProvider } from "../providers/AuthProvider";
import Layout from "../component/layout";
import { GetUsersDataProvider } from "../context/UsersDataContext";
import { GetPostsDataProvider } from "../context/PostsDataContext";
import { ChatContextProvider } from "../context/ChatContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === "/login" ? false : true;
  // const { data, loading, createData, deleteData } = userCollection('product')

  return (
    <GetUsersDataProvider>
      <GetPostsDataProvider>
        <AuthProvider>
          <ChatContextProvider>
            <Layout>
              {/* {showHeader && <Layout />} */}
              <Component {...pageProps} />
            </Layout>
          </ChatContextProvider>
        </AuthProvider>
      </GetPostsDataProvider>
    </GetUsersDataProvider>
  );
}

export default MyApp;

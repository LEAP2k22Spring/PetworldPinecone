import { useState } from "react";
import UserPost from "../../component/profile/UserPost";
import { useDocument } from "../../firebase/useFirebase";
import LoadingSpinner from "../../component/Spinner";
import { useAuth } from "../../providers";

const UserPosts = (props) => {
  const { slug } = props;
  //localhost:3000/profile/posts/4cp9r5THWQN3IwpFL9lb  - slug irne.
  const postId = slug[1]; // 4cp9r5THWQN3IwpFL9lb id-gaa awna.
  const { data: postData } = useDocument({ path: "Posts", docId: postId });
  const { loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {loading && <LoadingSpinner open={loading} />}
      <UserPost postData={postData} postId={postId} />
    </div>
  );
};

//======================Server Side Rendering (SSR)==========================
export const getServerSideProps = async (context) => {
  const { params } = context;

  //params.slug ni "localhost:3000/profile/posts/4cp9r5THWQN3IwpFL9lb" ene url-aas zadlaad ["posts", "4cp9r5THWQN3IwpFL9lb"] gesen array butsaana.
  const slug = params.slug;

  return {
    props: {
      slug: slug,
    },
  };
};

export default UserPosts;

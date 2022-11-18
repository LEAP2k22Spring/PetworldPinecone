import { useEffect, useState } from 'react';
import UserPost from '../../component/profile/UserPost';
import { useFirebase } from '../../firebase/useFirebase';
import LoadingSpinner from '../../component/Spinner';

const UserPosts = (props) => {
  const { slug } = props; //localhost:3000/profile/posts/4cp9r5THWQN3IwpFL9lb  - slug irne.
  const postId = slug[1]; // 4cp9r5THWQN3IwpFL9lb id-gaa awna.
  const { getSingleData } = useFirebase('Posts');
  const [isLoading, setIsLoading] = useState(false);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const result = await getSingleData(postId);
        setPostData(result);
        setIsLoading(false);
      } catch (error) {}
    })();
  }, []);
  // console.log(postData);
  return (
    <div>
      <LoadingSpinner open={isLoading} />
      <UserPost postData={postData} />
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
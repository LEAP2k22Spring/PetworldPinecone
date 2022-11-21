import { createContext, useState, useContext } from 'react';
const GetPostsDataContext = createContext();
export const GetPostsDataProvider = (props) => {
  const { children } = props;
  const [postsData, setPostsData] = useState([]);
  const [postOwner, setPostOwner] = useState({
    avatar: '',
    name: '',
    id: '',
  });

  return (
    <GetPostsDataContext.Provider
      value={{ postsData, setPostsData, postOwner, setPostOwner }}
    >
      {children}
    </GetPostsDataContext.Provider>
  );
};
export const useGetPostsDataContext = () => useContext(GetPostsDataContext);

import { createContext, useState, useContext } from "react";
const GetPostsDataContext = createContext()
export const GetPostsDataProvider = (props)=>{
    const {children} = props;
    const [postsData, setPostsData] = useState([])

    return(
        <GetPostsDataContext.Provider value={{postsData, setPostsData}}>
            {children}
        </GetPostsDataContext.Provider>
    )
}
export const useGetPostsDataContext =()=>useContext(GetPostsDataContext)
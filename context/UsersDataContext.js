import { createContext, useState, useContext } from "react";
const GetUsersDataContext = createContext()
export const AddFoodOpenModalProvider = (props)=>{
    const {children} = props;
    const [getUsersData, setGetUsersData] = useState([])

    return(
        <GetUsersDataContext.Provider value={{getUsersData, setGetUsersData}}>
            {children}
        </GetUsersDataContext.Provider>
    )
}
export const useGetUsersDataContext =()=>useContext(GetUsersDataContext)
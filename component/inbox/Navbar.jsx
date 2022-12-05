import React, { useContext } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../../firebase/useFirebase'
import { useAuth } from "../../providers/AuthProvider";

const Navbar = () => {
  const { userData } = useAuth()
  return (
    <div className='navbar'>
      <span className="logo">Chat</span>
      <div className="user">
        <img src={userData?.avatar} alt="gg" />
        <span>{userData?.firstName}</span>
      </div>
    </div>
  )
}

export default Navbar
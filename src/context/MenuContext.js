import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MenuContext = createContext()

export function MenuContextProvider({ children }) {
  const navigate = useNavigate()
  //const { userName, setUserName } = useContext(UserContext)
  const [openMenuUser, setOpenMenuUser] = useState(false)
  const [openNav, setOpenNav] = useState(false)

  function handleHome() {
    setOpenNav(false)
    // navigate('/home')
  }

  function handleLogout() {
    setOpenMenuUser(false)
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <MenuContext.Provider
      value={{
        handleHome,
        handleLogout
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

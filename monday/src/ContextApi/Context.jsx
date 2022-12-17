import React from 'react'
import { useState } from 'react';

export const LoginContext=React.createContext()

const initial={
    isAuth:false

}

export default function ContextProvide({children}) {

    const [auth, setauth] = useState(initial);

    const login=()=>{
        setauth(true)
    }

    const logout=()=>{
        setauth(false)
    }


  return (
    <LoginContext.Provider  value={{auth,login,logout}}>
        {children}
    </LoginContext.Provider>
    
  )
}

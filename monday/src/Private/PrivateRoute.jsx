import React from 'react'
import { LoginContext } from '../ContextApi/Context'
import { Navigate} from "react-router-dom";
import { useContext } from 'react';

export default function PrivateRoute({children}) {
    // const navigate=useNavigate()

    const {auth}= useContext(LoginContext)
    if( auth===false){
        console.log(auth)
        return <Navigate to="/login"/>
        
    }
    return children
    

}

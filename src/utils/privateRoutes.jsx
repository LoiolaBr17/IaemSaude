import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import {Context} from '../context/UserContext' 

export const PrivateRoutes = ({children}) => {
    const { authenticated } = useContext(Context)
    return authenticated ? children : <Navigate to="/"/>
}
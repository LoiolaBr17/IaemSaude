import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `${JSON.parse(token)}`
            setAuthenticated(true)
        }

    }, [])


    const login = async () => {
        
    }

    const authUser = (data) => {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        navigate('/manager')
    }

   

    return {  authenticated, login }
}

export default useAuth
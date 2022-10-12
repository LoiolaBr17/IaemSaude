import api from '../utils/api'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFlashMessage from './useFlashMessage'


export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false)
    const { setFlashMessage } = useFlashMessage()
    let navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `${JSON.parse(token)}`
            setAuthenticated(true)
        }

    }, [])


    const login = async (user) => {
        let msgText = 'Login realizado com sucesso'
        let msgtype = 'success'

        try {

            const data = await api.post('users/login', user)
            .then((response) => {
                return response.data
            })

            console.log(data.token)
            // await authUser(data.token)

        }catch(error){
            msgText = 'Erro ao efetuar o login'
            msgtype = 'error'
        }

        setFlashMessage(msgText,msgtype)
    }

    const authUser = async (data) => {
        setAuthenticated(true)
        localStorage.setItem('token', JSON.stringify(data.token))
        navigate('/manager')
    }

    const logout = () => {
        const msgText = 'Logaut realizado com sucesso'
        const msgType = 'success'

        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        navigate('/')

        setFlashMessage(msgText,msgType)
    }

   

    return {  authenticated, logout, login }
}


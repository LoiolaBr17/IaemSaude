import { createContext } from 'react'

import useAuth from '../hooks/useAuth'

const Context = createContext()

const UserProvider = ({children}) => {
    const { authenticated, logout, login } = useAuth()

    return (
        <Context.Provider value={{authenticated, logout, login}}>
            {children}
        </Context.Provider>
    )
}

export { Context, UserProvider }
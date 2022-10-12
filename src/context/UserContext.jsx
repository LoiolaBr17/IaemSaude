import { createContext } from 'react'

import useAuth from '../hooks/useAuth'

const Context = createContext()

const UserProvider = ({children}) => {
    const { login } = useAuth

    return (
        <Context.Provider value={{login}}>
            {children}
        </Context.Provider>
    )
}

export { Context, UserProvider }
import { createContext } from 'react'

import useAuth from '../hooks/useAuth'

const Context = createContext()

const UserProvider = ({children}) => {
    const { authenticated, login } = useAuth

    return (
        <Context.Provider value={{authenticated, login}}>
            {children}
        </Context.Provider>
    )
}

export { Context, UserProvider }
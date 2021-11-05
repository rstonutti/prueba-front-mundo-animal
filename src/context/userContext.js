import React, { useState } from 'react'

const Context = React.createContext({})

export const UserContextProvider = ({ children }) => {

    //cambiar por localStorage para que la sesion permanezca cuando el navegador se cierre.

    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('x-token')
    )

    return (
        <Context.Provider value={{ jwt, setJWT }}>
            {children}
        </Context.Provider>
    )
}

export default Context
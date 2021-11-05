import React, { useCallback, useContext } from 'react'
import Context from '../context/userContext'
import { fetchSinToken } from '../helpers/fetch'

const useUser = () => {

    const { jwt, setJWT } = useContext(Context)

    const login = useCallback(async(formValues) => {

        const resp = await fetchSinToken('auth/login', formValues, 'POST')

        const body = await resp.json()

        const { token } = body
        
        window.sessionStorage.setItem('x-token', token)

        setJWT(token)

        console.log(token)

    }, [setJWT])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        logueado: Boolean(jwt),
        login,
        logout
    }
}

export default useUser

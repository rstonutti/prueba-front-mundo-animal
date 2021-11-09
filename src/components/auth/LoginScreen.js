import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { fetchSinToken } from '../../helpers/fetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import Swal from 'sweetalert2'
import useUser from '../../hooks/useUser'

export const LoginScreen = () => {

    const { logueado, login } = useUser()

    const history = useHistory()

    const [formLoginValues, handleInputChange] = useForm({
        nombre: 'rstonutti',
        contrasenia: 'qwerty12345'
    })

    const { nombre, contrasenia } = formLoginValues

    useEffect(() => {
        if (logueado) history.replace('/')
    }, [logueado, history])

    const handleLogin = async (e) => {
        e.preventDefault()

        login(formLoginValues)

        /* 
        console.log( formLoginValues ) 

        console.log(body)

        if(body.ok){
            localStorage.setItem('x-token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime() )
        } else {
            Swal.fire('Error', body.msg, 'error')
        } */

    }

    return (
        <>
            <h3 className="mb-3 fw-bold text-center">LoginScreen</h3>

            <form onSubmit={handleLogin} className="text-center">
                <input
                    className="form-control w-auto m-2"
                    type="text"
                    placeholder="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputChange}
                />
                <input
                    className="form-control w-auto m-2"
                    type="password"
                    placeholder="contraseña"
                    name="contrasenia"
                    value={contrasenia}
                    onChange={handleInputChange}
                />

                <button
                    className="btn btn-primary m-2"
                    type="submit"
                >
                    Ingresar
                </button>
                <button
                    className="btn btn-info m-2"
                    type="submit"
                >
                    <FontAwesomeIcon icon={faGoogle} /> Google
                </button>
                <div className="mt-1">
                    <Link
                        className="text-decoration-none"
                        to="/auth/register"
                    >
                        Regístrate aquí
                    </Link>
                </div>
            </form>
        </>
    )
}

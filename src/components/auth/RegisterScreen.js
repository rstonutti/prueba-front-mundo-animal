//import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { fetchSinToken } from '../../helpers/fetch'
import Swal from 'sweetalert2'

export const RegisterScreen = () => {

    const history = useHistory()
    
    const [ formRegisterValues, handleInputChange ] = useForm({
        nombre_usuario: '',
        email: '',
        password: ''
    })

    const { nombre_usuario, email, password } = formRegisterValues

    const handleSubmit = async(e) => {
        e.preventDefault()

        const resp = await fetchSinToken('registro', formRegisterValues, 'POST')
        
        const body = await resp.json()

        if(body.ok){
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())

            history.push('/auth/login')
        } else {
            Swal('Error', body.msg, 'error')
        }
        
    }

    return (
        <div>
            <h3 className="mb-3 fw-bold text-center">RegisterScreen</h3>

            <form onSubmit={ handleSubmit } className="text-center">
                <input
                    className="form-control w-auto m-2"
                    type="text"
                    placeholder="nombre_usuario"
                    name="nombre_usuario"
                    value={nombre_usuario}
                    onChange={handleInputChange}
                />
                <input
                    className="form-control w-auto m-2"
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="form-control w-auto m-2"
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    className="btn btn-primary m-2"
                    type="submit"
                >
                    Registrarse
                </button>
                <div className="mt-1">
                    <Link
                        className="text-decoration-none"
                        to="/auth/login"
                    >
                        ¿Ya tienes una cuenta?
                    </Link>
                </div>
            </form>
        </div>
    )
}

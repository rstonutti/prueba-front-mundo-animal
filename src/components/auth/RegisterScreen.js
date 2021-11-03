import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {
    
    const [ formValues, handleInputChange ] = useForm({
        usuario: '',
        correo: '',
        password: ''
    })

    const { usuario, correo, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log( formValues )
    }

    return (
        <div>
            <h3 className="mb-3 fw-bold text-center">RegisterScreen</h3>

            <form onSubmit={ handleSubmit } className="text-center">
                <input
                    className="form-control w-auto m-2"
                    type="text"
                    placeholder="usuario"
                    name="usuario"
                    value={usuario}
                    onChange={handleInputChange}
                />
                <input
                    className="form-control w-auto m-2"
                    type="email"
                    placeholder="correo"
                    name="correo"
                    value={correo}
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

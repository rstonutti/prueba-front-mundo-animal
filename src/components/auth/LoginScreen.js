import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="mb-3 fw-bold text-center">LoginScreen</h3>

            <form className="text-center">
                <input
                    class="form-control w-auto m-2"
                    type="text"
                    placeholder="usuario"
                    name="usuario"
                />
                <input
                    class="form-control w-auto m-2"
                    type="password"
                    placeholder="password"
                    name="password"
                />

                <button
                    className="btn btn-primary m-2"
                    type="submit"
                >
                    Ingresar
                </button>
                <button 
                    class="btn btn-info m-2"
                    type="submit" 
                >
                    <FontAwesomeIcon icon={faGoogle} /> Google
                </button>
                <div className="mt-1">
                    <Link 
                        class="text-decoration-none"
                        to="/auth/register"
                    >
                        Regístrate aquí 
                    </Link>
                </div>
            </form>
        </>
    )
}

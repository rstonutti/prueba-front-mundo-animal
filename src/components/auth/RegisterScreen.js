import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="mb-3 fw-bold text-center">RegisterScreen</h3>

            <form className="text-center">
                <input
                    class="form-control w-auto m-2"
                    type="text"
                    placeholder="usuario"
                    name="usuario"
                />
                <input
                    class="form-control w-auto m-2"
                    type="email"
                    placeholder="correo"
                    name="correo"
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
                    Registrarse
                </button>
                <div className="mt-1">
                    <Link
                        class="text-decoration-none"
                        to="/auth/login"
                    >
                        ¿Ya tienes una cuenta?
                    </Link>
                </div>
            </form>
        </div>
    )
}

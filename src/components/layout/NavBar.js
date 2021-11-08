import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import useUser from '../../hooks/useUser';

import logo from '../../img/Logo.svg'

export const NavBar = () => {

    const { logueado, logout } = useUser()

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="mx-2" src={logo} alt="Mundo Animal" width="35px" />
                        <span>mundo animal</span>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
                            <li className="nav-item">
                                <Link className="nav-link mx-3 active" aria-current="page" to="/adopciones">Adopción</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3" to="/busquedas">Buscados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 disabled" to="/#">Contacto</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
                            <li className="nav-item">
                                {
                                    logueado ?
                                        <Link className="nav-link" to="/" onClick={logout}>Cerrar Sesión</Link>
                                        : <Link className="nav-link" to="/auth/login">Iniciar Sesión</Link>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    logueado ? null : //Colocar user name!!!
                                        <Link className="nav-link" to="/auth/register">Registrarse</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

import React from 'react'

import logo from '../../img/Logo.svg'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">
                        <img className="mx-2" src={ logo } alt="Mundo Animal" width="35px"/>
                        <span>mundo animal</span>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
                            <li className="nav-item">
                                <a className="nav-link mx-3 active" aria-current="page" href="/#">Adopción</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3" href="/#">Buscados</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 disabled" href="/#">Contacto</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto bd-highlight">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Iniciar Sesión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Registrarse</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import Card from '../layout/Card'

export const AdopcionScreen = () => {

    const [publicacion, setPublicacion] = useState([])

    const getPublicacion = async() => {
        const url = 'http://localhost:5000/adopcion/listar?desde=0&limite=5'
        const token = localStorage.getItem('x-token');
        
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'x-token': token
            }
        });

        const data = await resp.json()

        setPublicacion(data)
        
        console.log(publicacion)

    }

    return (
        <div>
            <div className="row">

            {
                publicacion.length>0 ? publicacion.map(
                <div className="mb-4 col-xl-2 col-4 col-sm-4 col-md-4">
                    <div className="card">
                        <a className="card-body" href='/#'>
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/#" className="btn btn-primary">Go somewhere</a>
                        </a>
                    </div>
                </div>) : <p>No se han cargado los datos</p>
            }

            </div>
        </div>
    )
}
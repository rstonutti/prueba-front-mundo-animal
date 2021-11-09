import React, { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import Card from '../layout/Card'
import axios from 'axios';

const baseURI = 'http://localhost:5000/'

const token = window.localStorage.getItem('x-token') || '';

const getPublication = async () => {
    try {
        const response = await axios(`${baseURI}adopcion/listar`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })

        return response
    } catch (e) {
        console.log(e)
    }
}

export const AdopcionScreen = () => {

    const [cargando, SetCargando] = useState(true)

    const [publicacion, setPublicacion] = useState([])

    useEffect(() => {
        const cargarPublicacion = async () => {
            const response = await getPublication()
            console.log(response)
            if (response.status === 200) {
                setPublicacion(response.data.publicaciones)
            }
            SetCargando(false)
        }

        cargarPublicacion()

    }, [])

    console.log(publicacion)

    if (cargando) {
        return <div>Cargando papus...  </div>
    }

    if (!publicacion.length) {
        return <div>No papí, ya adoptaron todo...  </div>
    }

    return (
        <div>


            <div className="row">





                {
                    publicacion.map(({tipo, mascota: {nombre, especie}, _id}) => {
                        return (

                            <div key={_id} className="col-sm-3">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <h5 className="card-title">{nombre}</h5>
                                        <p className="card-text">{especie}</p>
                                        <a href="/#" className="btn btn-primary">{tipo}</a>
                                    </div>
                                </div>
                            </div>


                        )
                    })

                }
            </div>

        </div>
    )
}
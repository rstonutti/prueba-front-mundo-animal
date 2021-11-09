import { useState, useEffect } from 'react'
import { getPublication } from '../helpers/getPublication';


export const useFetch = ( tipo ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getPublication( tipo )
            .then( data => {
                
                setState({
                    data,
                    loading: false
                });
            })

    }, [tipo])




    return state; // { data:[], loading: true };


}



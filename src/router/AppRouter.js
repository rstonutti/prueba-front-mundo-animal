import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { HomeScreen } from "../components/App/HomeScreen";
import { fetchConToken } from "../helpers/fetch";
import Swal from "sweetalert2";
import { NavBar } from "../components/layout/NavBar";



export const AppRouter = () => {

    /* useEffect(() => {
        reValidarToken()
    }, []) */

    /* const reValidarToken = async() => {

        const resp = await fetchConToken('renew')

        const body = await resp.json()

        if(body.ok){
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
        } else {
            Swal('Error', body.msg, 'error')
        } 
            
    }*/

    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Route
                        exact
                        path="/"
                        component={HomeScreen}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

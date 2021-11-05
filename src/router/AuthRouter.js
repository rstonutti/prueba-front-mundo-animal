import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <>
            <div className="m-0 bg-secondary d-flex justify-content-center align-items-center vh-100">
                <div className="p-4 bg-white shadow p-3 mb-5 bg-body rounded-3 w-auto">
                    <Switch>
                        <Route
                            exact
                            path="/auth/login"
                            component={LoginScreen}
                        />
                        <Route
                            exact
                            path="/auth/register"
                            component={RegisterScreen}
                        />
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </>
    )
}

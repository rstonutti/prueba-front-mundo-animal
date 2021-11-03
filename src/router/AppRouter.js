import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { HomeScreen } from "../components/App/HomeScreen";



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />
                    <Route
                        exact
                        path="/"
                        component={ HomeScreen }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

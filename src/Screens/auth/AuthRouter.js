import React from 'react';
import {
    Switch,
    Route,
    Redirect, useHistory
} from "react-router-dom";
import LoginScreen from "./login/LoginScreen";
import RegisterScreen from "./register/RegisterScreen";
import logo from "../../assets/img/logo.png";
import {Button} from "primereact/button";

const AuthRouter = () => {

    let history = useHistory();

    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <div className="auth__header">
                    <img src={logo} alt=""/>
                </div>

                <Switch>
                    <Route
                        exact
                        path="/auth/login"
                        component={LoginScreen}>
                    </Route>

                    <Route
                        exact
                        path="/auth/register"
                        component={RegisterScreen}>
                    </Route>

                    <Redirect to="/auth/login"/>

                </Switch>


                <div className="auth__footer">
                    {
                        history.location.pathname === '/auth/login' &&
                        <Button
                            label="Recuperar contraseña"
                            className="button-a"
                            onClick={() => {
                                history.push("/auth/recovery")
                            }}
                        />
                    }

                    {
                        (history.location.pathname === '/auth/recovery' ||
                            history.location.pathname === '/auth/register') &&
                        <Button
                            label="Ingresar"
                            className="button-a"
                            onClick={() => {
                                history.push("/auth/login")
                            }}
                        />
                    }

                </div>

            </div>
        </div>

    );
};

export default AuthRouter;

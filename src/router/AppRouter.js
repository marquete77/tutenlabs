import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import AuthRouter from "../Screens/auth/AuthRouter";
import {useDispatch, useSelector} from "react-redux";
import PublicRoute from "./PublicRoute";
import PrivateRouter from "./PrivateRouter";
import OfficeRouter from "../Screens/office/OfficeRouter";
import {login} from "../actions/auth";
import {initialStateUser} from "../reducers/authReducer";

let initialUserStorage = initialStateUser;

const AppRouter = () => {

    const dispatch = useDispatch();
    const {isLogin} = useSelector( state => state.auth);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (isLogin) {
            setIsLoggedIn(isLogin);
            localStorage.setItem('isLoggedIn', isLogin);
        } else if (localStorage.length > 1) {
            setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')));
            for (let i = 0; i < localStorage.length; i++) {
                let clave = localStorage.key(i);
                initialUserStorage[clave] = JSON.parse(localStorage.getItem(clave))
            }
            delete initialUserStorage.user;
            dispatch(login(initialUserStorage));
        } else {
            setIsLoggedIn(false);
            localStorage.clear();
        }

    }, [dispatch, isLogin, setIsLoggedIn, isLoggedIn]);

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRouter
                        path="/"
                        component={OfficeRouter}
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </Router>
    );
};

export default AppRouter;

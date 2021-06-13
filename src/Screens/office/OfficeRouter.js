import React, {useEffect, useState} from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import PrivateRouter from "../../router/PrivateRouter";

import DashboardScreen from "./dashboard/DashboardScreen";
import Sidebar from "../ui/sidebar/Sidebar";
import Topbar from "../ui/topbar/Topbar";
// import Breadcrumb from "../ui/breadcrumb/Breadcrumb";

import {login} from "../../actions/auth";
import {initialStateUser} from "../../reducers/authReducer";
import ServicesDefinitionRouter from "./operation/servicesDefinition/ServicesDefinitionRouter";

let initialUserStorage = initialStateUser;

const OfficeRouter = () => {
    const dispatch = useDispatch();
    const {isLogin} = useSelector(state => state.auth);
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

    useEffect(() => {


    }, [setIsLoggedIn])


    return (
        <div className="office__main">

            <Sidebar/>
            <div className="office__container">
                <Topbar />
                <div className="layout__content">
                    <Switch>

                        <Route
                            exact
                            path="/dashboard"
                            component={DashboardScreen}>
                        </Route>

                        <PrivateRouter
                            path="/services-definition"
                            component={ServicesDefinitionRouter}
                            isAuthenticated={isLogin}
                        />


                        <Redirect to="/dashboard"/>

                    </Switch>
                </div>
            </div>
        </div>

    );
};

export default OfficeRouter;

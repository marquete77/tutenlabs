import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ListScreen from "./list/ListScreen";

const ServicesDefinitionRouter = () => {

    return (
        <div className="view-main">
            <Switch>

                <Route
                    exact
                    path="/services-definition"
                    component={ListScreen}>
                </Route>


                <Redirect to="/services-definition"/>

            </Switch>
        </div>
    );
};

export default ServicesDefinitionRouter;

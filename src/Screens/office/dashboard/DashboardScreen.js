import React from 'react';
import {useHistory} from "react-router-dom";
import {Button} from "primereact/button";

const DashboardScreen = () => {

    let history = useHistory();

    return (
        <>
            <h1>Dashboard Screen</h1>
            <Button label="Servicios"
                    onClick={() => {
                        history.push("/services-definition")
                    }}
            />
        </>
    );
};

export default DashboardScreen;

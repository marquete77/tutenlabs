import React from 'react';
import {Button} from "primereact/button";
import {useHistory} from "react-router-dom";

const RegisterScreen = () => {

    let history = useHistory();

    return (
        <>
            <h1>Register Screen</h1>

            <Button label="Login"
                    onClick={() => {
                        history.push("/auth/login")
                    }}
            />
        </>
    );
};

export default RegisterScreen;

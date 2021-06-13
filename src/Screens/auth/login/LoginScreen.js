import React from 'react';
import {useForm} from "../../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";

import {startLoginUserOrEmail} from "../../../actions/auth";

import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";

const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector( state => state.ui);

    const [formValues, handleInputChange] = useForm({
        usernameOrEmail: '',
        password: ''
    });

    const {usernameOrEmail, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginUserOrEmail(usernameOrEmail, password))
    }

    return (

            <form className="auth__form">

                <h3>Ingrese sus datos</h3>

                <div className="p-inputgroup">
                    <span className="p-float-label">
                        <InputText
                            id="username"
                            name="usernameOrEmail"
                            value={usernameOrEmail}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="username">Usuario o correo electronico</label>
                    </span>
                </div>

                <div className="p-inputgroup">
                    <span className="p-float-label">
                        <InputText
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="password">Contraseña</label>
                    </span>
                </div>

                <Button
                    className="button-large"
                    type="submit"
                    onClick={handleLogin}
                    label="Ingresar"
                    disabled={
                        loading ||
                        usernameOrEmail.trim().length === 0 ||
                        password.trim().length === 0
                    }
                />

            </form>

    );
};

export default LoginScreen;

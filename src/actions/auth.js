import {types} from "../types/types";
import Swal from "sweetalert2";
import {finishLoading, startLoading} from "./ui";
import {AuthServices} from "../api/auth.services";

export const startLoginUserOrEmail = (emailOrUsername, password) => {
    Swal.fire({
        icon: 'info',
        text: 'Por favor espere...',
        allowOutsideClick: false,
    })
    Swal.showLoading();
    return async (dispatch) => {
        dispatch(startLoading());
        await AuthServices.login(emailOrUsername, password, null).then((resp) => {
            const {data} = resp;
            if (data) {
                const user = {
                    profile: data,
                    userRole: data.userRole,
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    token: data.sessionTokenBck
                }
                for (let userKey in user) {
                    localStorage.setItem(userKey, JSON.stringify(user[userKey]))
                }
                dispatch(login(user))
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Unauthorized',
                    text: 'Dear user, your username and password do not match our records, please try again.!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(finishLoading());
                    }
                })
            }
        });

    }
}

export const login = (user) => {
    Swal.close();
    return {
        type: types.login,
        payload: user
    }
}

export const logout = () => {
    localStorage.clear();
    return {
        type: types.logout
    }
}



import {types} from "../types/types";

export const initialStateUser = {
    user: {
        profile: {},
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        token:''
    },
    isLogin: false
};

export const AuthReducer = (state = initialStateUser, action) => {

    switch (action.type) {

        case types.login:
            return {
                user: {
                    ...action.payload
                },
                isLogin: true
            }

        case types.logout:
            return {
                user: {},
                isLogin: false
            }

        default:
            return state
    }


}

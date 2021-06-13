import {types} from "../types/types";

export const initialStateUser = {
    user: {
        userId: null,
        profile: {},
        role: '',
        permissions: [],
        businessUnit: {},
        businessUnitDefault: {},
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        tenantTheme: {}
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

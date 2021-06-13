import { typesUi } from '../types/typesUi';

const initialState = {
    loading: false,
    msgError: null,
    sectionName: '',
}


export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case typesUi.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }

        case typesUi.uiRemoveError:
            return {
                ...state,
                msgError: null
            }

        case typesUi.uiStartLoading:
            return {
                ...state,
                loading: true
            }

        case typesUi.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        case typesUi.uiSetSectionName:
            return {
                ...state,
                sectionName: action.payload
            }

        default:
            return state;
    }

}

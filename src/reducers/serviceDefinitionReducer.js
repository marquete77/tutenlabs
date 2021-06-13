import {typesServiceDefinition} from "../types/typesServiceDefinition";


const initialState = {
    id: null
};

export const ServiceDefinitionReducer = (state = initialState, action) => {

    switch (action.type) {

        case typesServiceDefinition.listServiceDefinition:
            return state;

        case typesServiceDefinition.editServiceDefinition:
            return {
                ...state,
                id: action.payload
            };

        default:
            return state
    }


}

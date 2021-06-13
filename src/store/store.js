import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {AuthReducer} from "../reducers/authReducer";
import thunk from "redux-thunk";
import {uiReducer} from "../reducers/uiReducer";
import {ServiceDefinitionReducer} from "../reducers/serviceDefinitionReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth:                   AuthReducer,
    ui:                     uiReducer,
    servicesDefinition:     ServiceDefinitionReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

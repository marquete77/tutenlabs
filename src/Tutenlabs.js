import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store/store";
import AppRouter from "./router/AppRouter";

// theme
import './assets/styles/customTheme.scss';

// Primefaces
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primeflex/src/_variables.scss';
import 'primeflex/src/_elevation.scss';


// FontAwesome
import './assets/fontawesome/fontawesome';

const Tutenlabs = () => {
    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    );
};

export default Tutenlabs;

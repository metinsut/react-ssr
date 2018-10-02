import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => {
    return (
        <Fragment>
            <header>HEADER</header>
            {renderRoutes(route.routes)}
            <footer>FOOTER</footer>
        </Fragment>
    )
};

export default {
    component: App
};
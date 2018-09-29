import React, { Fragment } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router';
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from 'serialize-javascript';
import Routes from "../client/Routes";


export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Fragment>{renderRoutes(Routes)}</Fragment>
            </StaticRouter>
        </Provider>
    );

    return `
    <html>
    <head>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    </head>
    <body>
        <div id="root">${content}</div>
        <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
    </body>
    </html>
    `;
};
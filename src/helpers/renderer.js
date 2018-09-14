import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router';
import Routes from "../client/Routes";


export default (req) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            <Routes />
        </StaticRouter>
    );

    return `
    <html>
    <head>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
    </body>
    </html>
    `;
};
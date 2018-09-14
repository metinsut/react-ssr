import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from "./components/Home";

// class Router extends Component {
//     render() {
//         return (
//             <div>
//                 <Route exact path="/" component={Home} />
//                 <Route path="/hi" component={() => "Hi"} />
//             </div>
//         )
//     }
// }

// export default Router;

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/hi" component={() => "Hi"} />
        </div>
    )
}
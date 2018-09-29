import React,{Fragment} from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Fragment>
            <div>Home Page</div>
            <Link to="/users">Users</Link>
        </Fragment>
    );
}

export default {
    component: Home
};
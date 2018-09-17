import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="test">
            <div>Home Page</div>
            <button onClick={() => console.log("Hi there'")}>press me!</button>
            <br />
            <input type="text" placeholder="abc" onChange={e => console.log(e.target.value)} />
            <br />
            <Link to="/users">Users</Link>
        </div>
    );
}

export default {
    component: Home
};
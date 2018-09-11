import React from "react";

const Home = () => {
    return (
        <div className="test">
            <div>Home Page</div>
            <button onClick={() => console.log("Hi there'")}>press me!</button>
            <br />
            <input type="text" placeholder="abc" onChange={e => console.log(e.target.value)} />
        </div>
    );
}

export default Home;
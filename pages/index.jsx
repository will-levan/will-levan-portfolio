import React from "react";
import "../styles/home.scss";

const Home = () => {

    const clickTest = () => {
        console.log("click test");
    }

    return (
        <div id="home">
            <h1>Home</h1>
            <button onClick={clickTest}>TEST</button>
        </div>
    )
}

export default Home;
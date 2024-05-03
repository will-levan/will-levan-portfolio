import React from "react";

const Home = () => {

    const clickTest = () => {
        console.log("click test");
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={clickTest}>TEST</button>
        </div>
    )
}

export default Home;
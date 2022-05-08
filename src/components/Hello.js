import React from "react";

const Hello = () => {
    // return <h1> Hello Sahinur </h1>

    return React.createElement(
        "div",
        null,
        React.createElement("h1", null, "Hello Sahinur")
    )
}
export default Hello;
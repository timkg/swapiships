import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import createApi from "./api";

const target = document.createElement("div");
document.body.appendChild(target);

const api = createApi();

ReactDOM.render(
    <App api={api} />,
    target
);

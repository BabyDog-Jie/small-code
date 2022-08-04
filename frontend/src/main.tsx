import React from "react";
import ReactDOM from "react-dom";
import App from "@/views/app";
import {HashRouter} from "react-router-dom";
import Interceptor from "@/interceptor";
import "antd/dist/antd.css";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Interceptor>
                <App/>
            </Interceptor>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

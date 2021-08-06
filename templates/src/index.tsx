import * as React from 'react';
import * as ReactDom from "react-dom";
import "../templates/src/assets/css/main.scss";
import '../node_modules/antd/dist/antd.less'
import App from "./App";


ReactDom.render(<App />, document.getElementById("container"))
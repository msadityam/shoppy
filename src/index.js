import React from "react"
import  ReactDOM  from "react-dom"

import App from'./App.js'
import "./index.css"
import {AppProvider} from './contexts/ContextProvider'
ReactDOM.render(
<AppProvider>
    <App/>
 </AppProvider>
,document.getElementById("root"))
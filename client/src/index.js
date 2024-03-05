import React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered', reg))
        .catch(err => console.log('Service Worker registration failed', err));
    });
  }

ReactDOM.render(<App />, document.getElementById("root"))

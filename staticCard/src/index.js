// import react and reactDOM libraries
import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
//  get a reference to the div with ID root
const el = document.getElementById('root')

// tell react to take control of that element
const root = ReactDOM.createRoot(el);

//  create a component

// show the component on the screen
root.render(<App />);
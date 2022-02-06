import React from 'react';
import ReactDOM from 'react-dom'; // ReactDOM is used in case of web apps - React Document Object Model
import './app/layout/styles.css'
import App from './app/layout/App';

const rootEl = document.getElementById('root'); //Creating a var for the root element

function render(){ // A function that replaces the root element using App 
  ReactDOM.render(<App />, rootEl)
}

if (module.hot){ // if there is a hot module available then inject the changes
  module.hot.accept('./app/layout/App.jsx',function(){
    setTimeout(render);
  })
}

render();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import STORE from './STORE';

ReactDOM.render(
    <BrowserRouter>
        <App store={STORE} />
    </BrowserRouter>, document.getElementById('root'));
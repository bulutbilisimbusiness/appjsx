import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'alertifyjs/build/css/alertify.min.css'
import App from '../src/components/root/App';
import { Provider } from 'react-redux';
import configureStore from './redux/reducers/configureStore';
import {BrowserRouter} from  "react-router-dom"
const store=configureStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //sarmalama
  <BrowserRouter>
  <Provider store={store}> 
    <App />
  </Provider></BrowserRouter>
);


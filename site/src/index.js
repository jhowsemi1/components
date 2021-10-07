import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DetalheProduto from './components/detalhesproduto'
import Carrinho from './components/carrinho'
import App from './components/home'
//import Contador from "./components/comunicacaoComps/contador";
import './index.css';
//import App from './App';

//import reportWebVitals from './reportWebVitals';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter> 
     <Switch>
        <Route path="/components/contador" exact={true} component={Contador} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/Carrinho" component={Carrinho} />
      
     </Switch>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);


 
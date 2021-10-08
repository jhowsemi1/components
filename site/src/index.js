import Routes  from "./routes";
import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import DetalheProduto from './components/detalhesproduto'
//import Carrinho from './components/carrinho'

//import App from './components/home'
//import Contador from "./components/carrinho/contador";
//import './index.css';
//import App from './App';

//import reportWebVitals from './reportWebVitals';
export default function Pa(){  
   return (
     <BrowserRouter> 
      <Switch>
        <Routes/> 
    
      </Switch>
     </BrowserRouter>
   )


}
/* ReactDOM.render(
  <StrictMode>
    <BrowserRouter> 
     <Switch>
       <Routes path="/" exact={true} component={App} />
        <Routes path="/detalhe" component={DetalheProduto} />
        <Routes path="/components/contador" component={Contador} />
        <Routes path="/carrinho" component={Carrinho} />  
      
     </Switch>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root') */
  //rootElement
//);



 
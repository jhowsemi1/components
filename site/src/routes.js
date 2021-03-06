import { StrictMode } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route  } from "react-router-dom";


import DetalheProduto from './components/detalhesproduto'
import Carrinho from './components/carrinho/'
import Carrinhoitem from "./components/carrinho/carrinhoitem/"
import Home from './components/home/'
import Contador from "./components/carrinho/contador";
import './index.css';
//import App from './App';


export default function Pag(){  
    return (
      <BrowserRouter> 
       <Switch>
       <Route path="/" exact={true} component={Home} />
         <Route path="/detalhe" component={DetalheProduto} /> 
         <Route path="/components/carrinhoitem" component={Carrinhoitem}/>
         <Route path="/components/contador" component={Contador} />
         <Route path="/carrinho" component={Carrinho} />   
       </Switch>
      </BrowserRouter>
    )
 }
import {Link} from "react-router-dom";
import {Container} from "./styled"
import { useEffect, useState } from "react";

import Cookie from "js-cookie"
import CarrinhoItem from "./carrinhoitem/styled";
import Produto from "../produto";


export default function Carrinho() {
    const[produto, setProduto] = useState([])

    useEffect(carregarCarrinho, []); // Chama a funcção 'carregarCarrinho' assim que a página abre 

    function carregarCarrinho() {  
    let carrinho = Cookie.get("carrinho"); // Lê o Array de Produtos do Carrinho do Cookie.
    carrinho = carrinho !== undefined   // Se o Cookie estiver vazio, volta um Array vazio []
                        ? JSON.parse(carrinho) // Se o Cookie não estiver vazio, converte o Cookie em Array pelo JSON.parse()
                        : [];

            setProduto(carrinho); // Atualiza a variável de Estado com o Conteúdo do Cookie
    }

  function removerProduto(id) {
      let carrinho = produto.filter(item => item.id !== id); // Buscar todos os Itens do Carrinho DIFERENTES do produto que está sendo removido 

      Cookie.set("carrinho", JSON.stringify(carrinho))  // Atualiza o Cookie
      setProduto([...carrinho]);  // Atualiza a variável de estado
  }


    function alterarProduto(id, qtd) {
         let produtoAlterado = produto.filter(item => item.id === id) [0];
         produtoAlterado.qtd = qtd;

         Cookie.set("carrinho", JSON.stringify(produto));
    }

    return (
        <Container>
            <h1> Carrinho </h1>
            <Link to="/"> Voltar </Link> 

            <div className="itens"> 
              {produto.map(item =>
                  <CarrinhoItem key={item.id}
                  info={item}
                   onUpdate={alterarProduto}
                   onRemove={removerProduto} />
              )}
            
            </div>
        </Container>
    )



}
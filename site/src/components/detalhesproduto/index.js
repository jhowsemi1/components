import Cookie from "js-cookie";
import { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { Container } from "./styled";

export default function DetalheProduto(props) {
    const [produto, setProduto] = useState(props.location.state);
    const navigation = useHistory();

    function comprar() {
        let carrinho = Cookie.get("carrinho"); // Lê o Array de Produtos do Carrinho do Cookie.
        carrinho = carrinho !== undefined // Se o Cookie estiver vazio, volta um Array vazio []
                             ? JSON.parse(carrinho) // Se o Cookie não estiver vazio, converte o Cookie em Array pelo JSON.parse()
                             : [];
   
                                                                         // Verifica se o produto em questão já está no carrinho pelo Id e pela função some()
      if(carrinho.some(item => item.id === produto.id) === false)   // Se o produto não existir, adiciona o produto no carrinho copiando todos os campos do produto
         carrinho.push({...produto, qtd: 1});  // e adicionando o campo novo qtd com valor 1

      Cookie.set("carrinho", JSON.stringify(carrinho));
      navigation.push("./carrinho");

    }

    return(
        <Container> 
            <div> 
                    <Link to="/"> Voltar </Link>
                    <h1> Detalhes do produto </h1>
                    <br/> <br/>

                <div> <img src={produto.imagem} alt="" /> </div>
                <div> <h1> {produto.titulo} </h1> </div>
                <div> <h3> {produto.preco} </h3> </div>

            </div>

            <div> 
                <h2> Descicao </h2>
                <div> {produto.descricao} </div>
          

            <h2> Especificacoes </h2>
            <div> {produto.especificacoes} </div>

            <div> <button onClick={comprar}> Comprar </button> </div>
            </div>
    
        </Container>
    )
}
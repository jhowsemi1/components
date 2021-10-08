import Cookie from "js-cookie"
import { useState } from "react"
import {Container, RemoverIcon} from "./styled" 
import Contador from "../contador/index"



export default function CarrinhoItem(props) {
    const [produto, setProduto] = useState(props.info)
     // Carrega a Variável de Estado com o parâmetro recebido da tela Carrinho
}

function alterarQtd(qtd) {
    setProduto({...produto, qtd});  // Atualiza a variável de Estado
    props.onUpdate(produto.id, qtd) // Chama componente PAI para atualizar Cookie
}

 function remover() {
     props.onRemove(produto.id);
 }

 return (
     <Container> 
       <div> 
           <img className="capa" src={produto.imagem} alt="" />
           <Contador onChange={alterarQtd} value={produto.qtd} />
       </div>

       <div className="titulo">
           {produto.titulo}
       </div>
        
        <div className="preco">
            <span> Preco unitario </span> <br/>
            {produto.preco}
        </div>

        <div className="qtd">
            <span> Qtd </span> <br/> 
            {produto.qtd}
        </div>

        <div className="remover"> <RemoverIcon onclick={remover} /> </div>

     </Container>
 )



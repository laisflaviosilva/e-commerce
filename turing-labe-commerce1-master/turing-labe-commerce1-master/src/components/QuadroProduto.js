import React from 'react'
import styled from 'styled-components'

const Quadro = styled.div`
    width: 300px;
    height: 320px;
    border: 1px black solid;
    padding: 5px;
    text-align: center;
`

const ProdutoNome = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
`

const Botao = styled.button`
    width: 199px;
    height: 25px;
    background-color: black;
    color: white;
    border: none;
`

const QuadroProduto = (props) => {
   
    return (
            <Quadro>
                <img src={props.fotoProduto} alt=""></img>
                <ProdutoNome>{props.nomeProduto}</ProdutoNome>
                <p>{props.precoProduto}</p>
                <Botao onClick={props.botaoProduto}>Adicionar ao carrinho</Botao>
            </Quadro> 
    )
}

export default QuadroProduto
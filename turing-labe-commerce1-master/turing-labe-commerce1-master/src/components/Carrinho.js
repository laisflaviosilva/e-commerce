import React from 'react'
import styled from 'styled-components'

const JanelaCarrinho = styled.div`
    width: 600px;
    border: 1px solid black;
    padding: 10px;
`

const LinhaProduto = styled.li`
    list-style: none;
    margin: 20px 0 0 -40px;
    border-bottom: 1px black dotted;
`

const Teste = styled.p`
    margin-top: 0px;
`

const Carrinho = (props) => {
    
        return (
            <JanelaCarrinho>
                <h1>Carrinho</h1>
                    <div>
                        <ul>
                            <LinhaProduto>{props.exibirCarrinho}</LinhaProduto>
                        </ul>
                    </div>
                <Teste>Total: R$</Teste>
            </JanelaCarrinho>
        )
    }

export default Carrinho
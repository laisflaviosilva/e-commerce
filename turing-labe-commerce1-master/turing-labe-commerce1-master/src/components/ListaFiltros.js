import React from 'react'
import styled from 'styled-components'

const FiltrosLista = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    padding: 10px;
    height: 900px;
    width: 150px
`
const Inputs = styled.input`
    margin-bottom: 15px;
`

class ListaFiltros extends React.Component {
    render() {
        return (
            <FiltrosLista>
                <h1>Filtros</h1>
                <label>Valor mínimo:</label>
                <Inputs></Inputs>
                <label>Valor máximo:</label>
                <Inputs></Inputs>
                <label>Buscar produto</label>
                <Inputs></Inputs>
            </FiltrosLista>
        )}
}

export default ListaFiltros
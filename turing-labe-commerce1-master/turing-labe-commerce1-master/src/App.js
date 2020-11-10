import React from 'react'
import styled from 'styled-components'
import QuadroProduto from './components/QuadroProduto'
import ListaFiltros from './components/ListaFiltros'
import Carrinho from './components/Carrinho'

const PaginaToda = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`
const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const BotaoCarrinho = styled.div`
  height: 80px;
  width: 80px;
  bottom: 10px;
  right: 10px;
  position: absolute;
  border-radius: 93px;
background: #FFFFFF;
box-shadow:  -6px -6px 12px #DEDEDE,
             6px 6px 12px #FFFFFF;
`
const ImagemCarrinho = styled.img`
  height: 55px;
  width: 55px;
  padding: 15px 0 0 11px;
`







class App extends React.Component {
  state = {
    compras: [],
    mostraCarrinho: false,
    quantidadeProdutosA: 1,
    quantidadeProdutosB: 1,
    quantidadeProdutosC: 1,
    quantidadeProdutosD: 1,
    quantidadeProdutosE: 1,
    quantidadeProdutosF: 1,
    quantidadeProdutosG: 1,
    quantidadeProdutosH: 1
  }


  escondeCarrinho = () => {
    this.setState({mostraCarrinho: !this.state.mostraCarrinho})
  }

  adicionaCarrinhoA = () => {
      this.setState({quantidadeProdutosA: this.state.quantidadeProdutosA + 1})
      const novoProduto = {
        nome: "Item A",
        quantidade: this.state.quantidadeProdutosA,
        
      }
      if (this.state.quantidadeProdutosA <= 1){
          const novoNaLista = [...this.state.compras, novoProduto]
          this.setState({compras: novoNaLista})
        } 
      else{
          const alteraQtd = this.state.compras.map((bananinha) => {
              const alterado = {
                ...bananinha,
                quantidade: this.state.quantidadeProdutosA 
              }
              return alterado
            }  
          )
          this.setState({compras: alteraQtd})
        }
        console.log(this.state.compras)
        console.log('cliquesA', this.state.quantidadeProdutosA)
  }

  adicionaCarrinhoB = () => {
    this.setState({quantidadeProdutosB: this.state.quantidadeProdutosB + 1})
    const novoProduto = {
      nome: "Item B",
      quantidade: this.state.quantidadeProdutosB,
      
    }
    if (this.state.quantidadeProdutosB <= 1){
        const novoNaLista = [...this.state.compras, novoProduto]
        this.setState({compras: novoNaLista})
      } 
      else{
        const alteraQtd = this.state.compras.map((bananinha) => {
          const alterado = {
            ...bananinha,
            quantidade: this.state.quantidadeProdutosB,
          }
          return alterado
        })
        this.setState({compras: alteraQtd})
    }
    console.log(this.state.compras)
    console.log('cliquesB', this.state.quantidadeProdutosB)
  }

  adicionaCarrinhoC = () => {
    this.setState({quantidadeProdutosC: this.state.quantidadeProdutosC + 1})
    const novoProduto = {
      nome: "Item C",
      quantidade: this.state.quantidadeProdutosC,
      
    }
    if (this.state.quantidadeProdutosC === 1){
        const novoNaLista = [...this.state.compras, novoProduto]
        this.setState({compras: novoNaLista})
      } 
    else {
        const alteraQtd = this.state.compras.map((bananinha) => {
          const alterado = {
            ...bananinha,
            quantidade: this.state.quantidadeProdutosC,
          }
          return alterado
        })
        this.setState({compras: alteraQtd})
    }
    console.log(this.state.compras)
    console.log('cliquesC', this.state.quantidadeProdutosC)
  }

  adicionaCarrinhoD = () => {
    this.setState({quantidadeProdutosD: this.state.quantidadeProdutosD + 1})
    const novoProduto = {
      nome: "Item D",
      quantidade: this.state.quantidadeProdutosD,
      
    }
    if (this.state.quantidadeProdutosD === 1){
        const novoNaLista = [...this.state.compras, novoProduto]
        this.setState({compras: novoNaLista})
      } 
    else {
        const alteraQtd = this.state.compras.map((bananinha) => {
          const alterado = {
            ...bananinha,
            quantidade: this.state.quantidadeProdutosD,
          }
          return alterado
        })
        this.setState({compras: alteraQtd})
    }
    console.log(this.state.compras)
    console.log('cliquesD', this.state.quantidadeProdutosD)
  }

  adicionaCarrinhoE = () => {
    this.setState({quantidadeProdutosE: this.state.quantidadeProdutosE + 1})
    const novoProduto = {
      nome: "Item E",
      quantidade: this.state.quantidadeProdutosE,
      
    }
    if (this.state.quantidadeProdutosE === 1){
        const novoNaLista = [...this.state.compras, novoProduto]
        this.setState({compras: novoNaLista})
      } 
    else {
        const alteraQtd = this.state.compras.map((bananinha) => {
          const alterado = {
            ...bananinha,
            quantidade: this.state.quantidadeProdutosE,
          }
          return alterado
        })
        this.setState({compras: alteraQtd})
    }
    console.log(this.state.compras)
    console.log('cliquesE', this.state.quantidadeProdutosE)
  }

  adicionaCarrinhoF = () => {
    this.setState({quantidadeProdutosF: this.state.quantidadeProdutosF + 1})
    const novoProduto = {
      nome: "Item F",
      quantidade: this.state.quantidadeProdutosF,
      
    }
    if (this.state.quantidadeProdutosF === 1){
        const novoNaLista = [...this.state.compras, novoProduto]
        this.setState({compras: novoNaLista})
      } 
    else {
        const alteraQtd = this.state.compras.map((bananinha) => {
          const alterado = {
            ...bananinha,
            quantidade: this.state.quantidadeProdutosF 
          }
          return alterado
        })
        this.setState({compras: alteraQtd})
    }
    console.log(this.state.compras)
    console.log('cliquesF', this.state.quantidadeProdutosF)
  }

  adicionaCarrinhoG = () => {
    this.setState({quantidadeProdutosG: this.state.quantidadeProdutosG + 1})
    const novoProduto = {
      nome: "Item G",
      quantidade: this.state.quantidadeProdutosG,
      
    }
    if (this.state.quantidadeProdutosG === 1){
        const novoNaLista = [...this.state.compras, novoProduto]
        this.setState({compras: novoNaLista})
      } 
    else {
        const alteraQtd = this.state.compras.map((bananinha) => {
          const alterado = {
            ...bananinha,
            quantidade: this.state.quantidadeProdutosG 
          }
          return alterado
        })
        this.setState({compras: alteraQtd})
    }
    console.log(this.state.compras)
    console.log('cliquesG', this.state.quantidadeProdutosG)
  }

  adicionaCarrinhoH = () => {
    this.setState({quantidadeProdutosH: this.state.quantidadeProdutosH + 1})
    const novoProduto = {
      nome: "Item H",
      quantidade: this.state.quantidadeProdutosH,
      
    }
    if (this.state.quantidadeProdutosH === 1){
        const novoNaLista = [...this.state.compras, novoProduto]
        this.setState({compras: novoNaLista})
      } 
    else {
        const alteraQtd = this.state.compras.map((bananinha) => {
          const alterado = {
            ...bananinha,
            quantidade: this.state.quantidadeProdutosH
          }
          return alterado
        })
        this.setState({compras: alteraQtd})
    }
    console.log(this.state.compras)
    console.log('cliquesH', this.state.quantidadeProdutosH)
  }


  render() {
    const listaDeProdutos = this.state.compras.map((produto) => {
       return (<p>{produto.quantidade}x {produto.nome}</p>)
    })


    return (
      <PaginaToda>
      <ListaFiltros/>
      <Body>
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=55'}
          nomeProduto={'Item A'}
          precoProduto={'R$ 40.50'}
          botaoProduto={this.adicionaCarrinhoA}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=56'}
          nomeProduto={'Item B'}
          precoProduto={'R$ 55.90'}
          botaoProduto={this.adicionaCarrinhoB}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=57'}
          nomeProduto={'Item C'}
          precoProduto={'R$ 80.00'}
          botaoProduto={this.adicionaCarrinhoC}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=58'}
          nomeProduto={'Item D'}
          precoProduto={'R$ 99.00'}
          botaoProduto={this.adicionaCarrinhoD}
        />     
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=59'}
          nomeProduto={'Item E'}
          precoProduto={'R$ 199.00'}
          botaoProduto={this.adicionaCarrinhoE}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=60'}
          nomeProduto={'Item F'}
          precoProduto={'R$ 210.00'}
          botaoProduto={this.adicionaCarrinhoF}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=61'}
          nomeProduto={'Item G'}
          precoProduto={'R$ 499.99'}
          botaoProduto={this.adicionaCarrinhoG}
        />
        <QuadroProduto 
          fotoProduto={'https://picsum.photos/299/200?a=62'}
          nomeProduto={'Item H'}
          precoProduto={'R$ 501.00'}
          botaoProduto={this.adicionaCarrinhoH}
        />
      </Body>
      {this.state.mostraCarrinho && <Carrinho
          exibirCarrinho={listaDeProdutos}
      />}
      <BotaoCarrinho onClick={this.escondeCarrinho}>
          <ImagemCarrinho src="data:image/png;base64,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" alt=""></ImagemCarrinho> 
      </BotaoCarrinho> 
    </PaginaToda> 
    );
  }
}

export default App

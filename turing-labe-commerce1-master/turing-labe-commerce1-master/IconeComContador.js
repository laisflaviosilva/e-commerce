import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>//representam o ícone do coração e a quantidade de curtidas, e o ícone de comentários e a quantidade de curtidas
}

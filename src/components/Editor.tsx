
import React, { useState } from "react"
import "../styles/editor.scss"

export default function () {

    return (
        <div id='editor'>
            <h1>Editor de Pixels</h1>
            <h2>Entre com as dimensões do painel</h2>

            <div id='options'>
                <div className='option'>
                    <input type="number" className='panelInput' />
                    <span> Largura </span>
                </div>
                <div className='option'>
                    <input type="number" className='panelInput' />
                    <span> Altura </span>
                </div>

            </div>
            <button className='button'> Começar a Desenhar</button>
        </div>
    )
}
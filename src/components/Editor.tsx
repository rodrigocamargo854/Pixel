
import { stringify } from "node:querystring"
import React, { useState } from "react"
import "../styles/editor.scss"

export default function () {

    const [panelWidth, SetpanelWidth] = useState(16)
    const [panelHeight, SetpanelHeight] = useState(16)
    const [hideOptions, SethideOptions] = useState(false)
    const [hideDrawingPanel, SethideDrawingPanel] = useState(true)
    const [butoonText, SetbutoonText] = useState("start drawing")
    const [selectorColor, SetselectColor] = useState('#f44336')


interface initializeDrawingPanelProps{

}

    function initializeDrawingPanel(props: initializeDrawingPanelProps) {
        SethideOptions(!hideOptions)
        SethideDrawingPanel(!hideDrawingPanel)

        butoonText == "start drawing"
            ? SetbutoonText('reset')
            : SetbutoonText("start drawing")
    }

    return (
        <div id='editor'>
            <h1>Editor de Pixels</h1>
            {hideDrawingPanel && <h2> Entre com as dimensões do painel</h2>}
            {hideDrawingPanel && (

                <div id='options'>
                    <div className='option'>
                        <input 
                        type="number" 
                        className='panelInput'
                        defaultValue={panelWidth}
                        onChange={(e)=> {

                            SetpanelWidth(e.target.value)

                        }}
                        />
                        <span> Largura </span>
                    </div>
                    <div className='option'>
                        <input type="number" className='panelInput' />
                        <span> Altura </span>
                    </div>
                </div>

            )}


            <button className='button'> Começar a Desenhar</button>
        </div>
    )
}
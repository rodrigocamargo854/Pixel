
import { stringify } from "node:querystring"
import React, { useState } from "react"
import "../styles/editor.scss"




// tipos
interface initializeDrawingPanelProps{
    panelWidth: number
    SetpanelWidth: React.Dispatch<React.SetStateAction<number | undefined>>
    panelHeight: number
    SetpanelHeight:React.Dispatch<React.SetStateAction<number | undefined>>
    hideOptions: Boolean
    SethideOptions: React.Dispatch<React.SetStateAction<Boolean>>
    hideDrawingPanel:boolean
    SethideDrawingPanel: React.Dispatch<React.SetStateAction<Boolean>>
    butoonText: string
    SetbutoonText: React.Dispatch<React.SetStateAction<string>>
    selectorColor?:string
    SetselectColor: React.Dispatch<React.SetStateAction<string>>

   
  }

export default function Editor () {

    const [panelWidth, SetpanelWidth] = useState<number>(16)
    const [panelHeight, SetpanelHeight] = useState<number>(16)
    const [hideOptions, SethideOptions] = useState(false)
    const [hideDrawingPanel, SethideDrawingPanel] = useState(true)
    const [butoonText, SetbutoonText] = useState("start drawing")
    const [selectorColor, SetselectColor] = useState('#f44336')

    
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
                        onChange={e => SetpanelWidth(parseInt(e.target.value))}
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
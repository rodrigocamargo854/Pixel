

import { useState } from "react";

import "../components/styles/editor.scss"
import { CirclePicker } from 'react-color'
import DrawingPanel from "./DrawingPanel"
import { SetStateAction } from "react"



interface Color {
    hex: string;
}


export default function Editor( ) {
    const [panelWidth, setPanelWidth] = useState<number>(16);
    const [panelHeight, setPanelHeight] = useState<number>(16);
    const [hideOptions, sethideOptions] = useState(false);
    const [hideDrawingPanel, sethideDrawingPanel] = useState(true);
    const [butoonText, setbutoonText] = useState("Draw");
    const [color, setColor] = useState('#f44336');
    //selectedcolor

    function initializeDrawingPanel() {
        sethideOptions(!hideOptions)
        sethideDrawingPanel(!hideDrawingPanel)

        butoonText === "start drawing"
            ? setbutoonText('reset')
            : setbutoonText("start drawing")
    }
    

    function changeColor(color: Color) {
        setColor(color.hex)
       //export default  selectedColor;
       console.log(color)
    }
    return (
        <div id='editor'>
            <h1>Pixels Editor</h1>
            {hideDrawingPanel && <h2> Dimensions Panel</h2>}
            {hideDrawingPanel && (

                <div id='options'>
                    <div className='option'>
                        <input
                            type="number"
                            className='panelInput'
                            defaultValue={panelWidth}
                            onChange={e => setPanelWidth(parseInt(e.target.value))}
                        />
                        <span> Width </span>
                    </div>
                    <div className='option'>
                        <input 
                        type="number" 
                        className='panelInput' 
                        defaultValue={panelHeight}
                        onChange={e => setPanelHeight(parseInt(e.target.value))}

                        />
                        <span> Height </span>
                    </div>
                </div>

            )}
            <button
                onClick={initializeDrawingPanel}
                className='button'
                
            > {butoonText}
            </button>
            {
                hideOptions && (
                    <CirclePicker
                        color={color}
                        onChangeComplete={changeColor} 
                        
                        />
                        )
                     }
                
                {
                hideOptions && (
                    <DrawingPanel
                        width={panelWidth}
                        height={panelWidth}
                        selectedColor={color}
                        
                         />
                )}
        </div>
    )
}
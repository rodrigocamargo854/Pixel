
import React, { useState } from 'react'
import '../components/styles/pixel.scss'


export default function Pixel(props : any ) {
    const {selectedColor} = props ;

    const [pixelColor, setPixelColor] = useState('#fff')
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    function applyColor() {
        setPixelColor(selectedColor)
        setCanChangeColor(false)
        // console.log(pixelColor)
    }
    function changeColorOnHover() {
        setOldColor(pixelColor)
        setPixelColor(selectedColor)
    }
    function resetColor() {

        if (canChangeColor) {
            setPixelColor(oldColor)
        }
        setCanChangeColor(true)
    }
    return (

        <div
            className='pixel'
            onClick={applyColor}
            onMouseEnter={changeColorOnHover}
            onMouseLeave={resetColor}
            style={{ backgroundColor: pixelColor }
            }
        >
        </div>
    )

}

import React, { useState } from 'react'
import '../components/styles/pixel.scss'

interface selectedColor {
    width: number
    height: number
    selectedColor: any     
}

export default function Pixel(props : any ) {
    const [selectedColor] = useState('') ;

    const [pixelColor, setPixelColor] = useState('#fff')
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    function applyColor() {
        setPixelColor(selectedColor)
        setCanChangeColor(false)
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
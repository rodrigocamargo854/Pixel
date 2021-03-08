import React from 'react'
import '../styles/row.scss'
import Pixel from './Pixel'


interface RowProps{
width:number
selectedColor:string
}

export default function Row(props: RowProps)
{
    const { width,selectedColor } = props


    let pixels = []
    for (let i = 0; i < width; i++) {
        pixels.push(<Pixel key={i} selectedColor={selectedColor}/>)
    }
    return(
        <div id='row'>
                {pixels}        
        </div>
    )
    
}
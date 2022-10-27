import React from 'react'
import './Button.css'

export default props => {
    let Class = 'button'
    Class += props.operation ? 'operation' : ''
    Class += props.double ? 'double' : ''
    Class += props.triple ? 'triple' : ''
return(
    <button 
    onClick={ e => props.click && props.click(e.target.innerHTML)}
    className={Class}>
        {props.label}

    </button>
)
}
import React, { useState } from 'react'
import './Button.css'

function Button({ button, handleInput, input }) {

  return (
    <div className="button" onClick={ () => handleInput([...input, button]) } style={{"color": "black"}}> {button} </div>
  )
}

export default Button


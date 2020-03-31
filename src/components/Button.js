import React, { useState } from 'react'
import './Button.css'
import * as operator from "./operator"

function Button({ button, handleInput, input }) {

  const buttonClick = () => {
    operator.operate(button)
    handleInput([...input, button])
  }

  return (
    <div className="button ripple" onClick={ () => buttonClick() } style={{"color": "black"}}> {button} </div>
  )
}

export default Button


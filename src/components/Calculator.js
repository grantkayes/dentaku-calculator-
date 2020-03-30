import React, { useState } from 'react'
import './Calculator.css'
import Button from './Button'

function Calculator(props) {
  const [screenText, setScreenText] = useState("test")
  let button_marks = ['+', '-', '1', '2', '3']
  let buttons = []

  for(let i = 0; i < 5; i++) {
    buttons.push(<Button key={ i } input={screenText} handleInput={setScreenText} button={ button_marks[i] }/>)
  }

  return (
    <div className="calculator-main">
      <Screen text={screenText}/>
      <div className="buttons">
      { buttons }
      </div>
    </div>
  )
}

function Screen({ text }) {
  return (
    <div className="screen" style={{"color": "white"}}>{text}</div>
  )
}

export { Calculator, Screen }


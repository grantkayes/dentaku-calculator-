import React, { useState } from 'react'
import './Calculator.css'
import Button from './Button'

function Calculator(props) {
  const [screenText, setScreenText] = useState("")
  let button_marks = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '=']
  let buttons = []

  for(let i = 0; i < button_marks.length; i++) {
    buttons.push(<Button className="ripple" key={ i } input={screenText} handleInput={setScreenText} button={ button_marks[i] }/>)
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


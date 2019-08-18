import React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"

import "./styles.css"

function Radio(props) {
  return (
    <Frame
      position="relative"
      size="auto"
      style={{ display: "flex", marginBottom: 10 }}
      background="null"
    >
      <Frame
        size={30}
        shadow="0 1px 5px 0 rgba(0,0,0,0.3)"
        background="white"
        borderRadius={15}
        position="relative"
        style={{ marginRight: 10 }}
      />
      {props.children}
    </Frame>
  )
}

function RadioGroup() {
  return (
    <Frame>
      <Radio>🍏 Apple</Radio>
      <Radio>🥑 Avocado</Radio>
      <Radio>🌶 Pepper</Radio>
    </Frame>
  )
}

function App() {
  return (
    <div className="App">
      <RadioGroup />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

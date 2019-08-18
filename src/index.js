import React from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"
import "./styles.css"

function RadioGroup() {
  return (
    <Frame>
      <Frame position='relative'>🍏 Apple</Frame>
      <Frame position='relative'>🥑 Avocado</Frame>
      <Frame position='relative'>🌶 Pepper</Frame>
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

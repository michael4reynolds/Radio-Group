import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Frame } from "framer"

import "./styles.css"

function Radio(props) {
  return (
    <Frame // Radio
      position="relative"
      size="auto"
      style={{ display: "flex", marginBottom: 10 }}
      background="null"
      {...props}
    >
      <Frame // Outer circle
        size={30}
        shadow="0 1px 5px 0 rgba(0,0,0,0.3)"
        background="white"
        borderRadius={15}
        position="relative"
        style={{ marginRight: 10 }}
      >
        <Frame // Inner circle
          size={20}
          borderRadius={10}
          background={"purple"}
          center
          animate={{ scale: props.selected ? 1 : 0 }}
        />
      </Frame>
      {props.children} {/* Text */}
    </Frame>
  )
}

function RadioGroup({ choices, ...props }) {
  let [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <Frame background={null} {...props}>
      {choices.map((choice, index) => (
        <Radio
          selected={index === selectedIndex}
          key={choice}
          onClick={() => {
            setSelectedIndex(index)
          }}
        >
          {choice}
        </Radio>
      ))}
    </Frame>
  )
}

function App() {
  let options = [
    "🍏 Apple",
    "🥑 Avocado",
    "🌶 Pepper",
    "🥕 Carrot",
    "🍔 Burger",
    "🥝 Kiwi fruit",
    "🍌 Banana"
  ]
  return (
    <div className="App">
      <RadioGroup center choices={options} background="orange" size="auto" />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

import { useEffect, useState } from 'react'
import './App.css'

// Create a new react app
// Gut the App.tsx
// Create an input
// Create a button
// CONTROL the input
// When the user clicks the button, put the INPUT into an OUTPUT box.
// whenever the output changes, console.log "new output!"

function App() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  useEffect(() => {
    console.log("new output!", output)
  }, [output])

  return (
    <>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={() => setOutput(input)}>Submit</button>
      <div>{output}</div>
    </>
  )
}

export default App

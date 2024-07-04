import { useState, useEffect } from "react";

// Create a new react app
// Gut the App.tsx
// Create an input
// Create a button
// CONTROL the input
// When the user clicks the button, put the INPUT into an OUTPUT box.
// whenever the output changes, console.log "new output!"

export default function App4() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    return (
        <>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} />
            <button type="submit" onClick={() => { setOutput(input) }}>Submit!!!</button>
            <div>{output}</div>
        </>
    )
}
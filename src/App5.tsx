import { useState, useEffect } from "react";

// Create a new react app
// Gut the App.tsx
// Create an input
// Create a button
// CONTROL the input
// When the user clicks the button, put the INPUT into an OUTPUT box.
// whenever the output changes, console.log "new output!"

export default function App5() {
    const [output, setOutput] = useState("")
    const [input, setInput] = useState("")


    return (
        <>
            <input type="text" onChange={(e) => { setInput(e.target.value) }} />
            <button type="submit" onClick={() => { setOutput(input) }} />
            <div>{output}</div>
        </>
    )
}
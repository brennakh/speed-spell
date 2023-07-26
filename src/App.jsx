import React, {useEffect, useState, useRef} from "react"
import useGame from "./hooks/useGame"

export default function App() {
  const {
    textBoxRef, 
    handleChange, 
    text, 
    isRunning, 
    timeRemaining, 
    startGame, 
    wordCount
  } = useGame(15)

  return (
    <div>
      <h1>typing game</h1>
      <textarea 
        // cols="30" 
        // rows="10"
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isRunning} 
        placeholder="type anything..."
      />
      <h4 className="countdownClock">time remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled={isRunning}
      >
        start</button>
      <h2>word count: {wordCount}</h2>
      <h2>words per minute: {wordCount * 4}</h2>
      {/* {wordCount < 10 ? <p>better luck next time</p> : <p>great job, champ!</p>} */}
      <footer>
        {/* <span> brenna hettler 2023</span> */}
      </footer>
    </div>
  )
}
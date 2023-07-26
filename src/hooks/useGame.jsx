import { useState, useEffect, useRef } from "react"

export default function useGame(startTime = 10) {
    const START_TIME = 5

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startTime)
    const [isRunning, setIsRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
  
    function handleChange(event) {
      const {value} = event.target
      setText(value)
    }
  
    function calculateWordCount(passedText) {
      const wordsArray = text.trim().split(" ")
      const filteredWords = wordsArray.filter(word => word !== "").length
      return filteredWords
      // console.log(filteredWords)
    }
  
    function startGame() {
      setIsRunning(true)
      setTimeRemaining(startTime)
      setText("")
      textBoxRef.current.disabled = false
      textBoxRef.current.focus()
    }
  
    function endGame() {
      setIsRunning(false)
      setWordCount(calculateWordCount(text))
    }
  
    useEffect(() => {
      if(isRunning && timeRemaining > 0) {
        setTimeout(() => {
          setTimeRemaining(time => time - 1) 
        }, 1000)
      } else if(timeRemaining === 0) {
        endGame()
      }
    }, [timeRemaining, isRunning])

    return {textBoxRef, handleChange, text, isRunning, timeRemaining, startGame, wordCount}
}

import { useState, useEffect } from 'react'
import './App.css'
import Card from './Components/Card'
import Scoreboard from './Components/Scoreboard'

function App() {
  const [ currentScore, setCurrentScore ] = useState(0)
  const [ bestScore, setBestScore ] = useState(0)
  const [ displayNums, setDisplayNums ] = useState([])
  const [ selectedNums, setSelectedNums ] = useState([])

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      setDisplayNums(prev => [...prev, Math.floor(Math.random() * 10000)])
    }
  }, [])

  console.log(displayNums)

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
      <div className='card-board'>
        {displayNums.map(displayNum => {
          return (
            <Card key={displayNum} currentScore={currentScore} setCurrentScore={setCurrentScore} displayNum={displayNum} selectedNums={selectedNums} setSelectedNums={setSelectedNums} bestScore={bestScore} setBestScore={setBestScore}/>
          )
        })}
      </div>
    </div>
  )
}

export default App

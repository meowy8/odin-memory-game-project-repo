import { useState, useEffect } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [ currentScore, setCurrentScore ] = useState(0)
  const [ bestScore, setBestScore ] = useState(0)
  const [ displayNums, setDisplayNums ] = useState([])

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      setDisplayNums(prev => [...prev, Math.floor(Math.random() * 10000)])
    }
  }, [])

  console.log(displayNums)

  return (
    <div className='card-board'>
      {displayNums.map(displayNum => {
        return (
          <Card key={displayNum} setCurrentScore={setCurrentScore} displayNums={displayNum}/>
        )
      })}
    </div>
  )
}

export default App

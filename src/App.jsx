import { useState, useEffect } from 'react'
import './App.css'
import Card from './Components/Card'
import Scoreboard from './Components/Scoreboard'

function App() {
  const [ currentScore, setCurrentScore ] = useState(0)
  const [ bestScore, setBestScore ] = useState(0)
  const [ displayNums, setDisplayNums ] = useState([])
  const [ selectedNums, setSelectedNums ] = useState([])
  const [ attempts, setAttempts ] = useState(0)
  const [ gameStatus, setGameStatus ] = useState('playing')

  const shuffleArray = () => {
    const shuffledArray = [...displayNums];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  
    setDisplayNums(shuffledArray);
  };

  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      setDisplayNums(prev => [...prev, Math.floor(Math.random() * 10000)])
    }

    return () => setDisplayNums([])
  }, [attempts, gameStatus])

  useEffect(() => {
    if (displayNums.length > 0) {
      const shuffledArray = [...displayNums];
      console.log(displayNums)
    
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
    
      setDisplayNums(shuffledArray);
    }

    return () => setDisplayNums([])
  }, [currentScore])

  let gameStatusDisplay

  if (gameStatus === 'playing') {
    gameStatusDisplay = 'Keep Going!'
  } else if (gameStatus === 'lost'){
    gameStatusDisplay = 'Try Again!'
  } else {
    gameStatusDisplay = 'Well Done!'
  }

  return (
    <div className='app'>
      <h1>Memory Game</h1>
      <h3>{gameStatusDisplay}</h3>
      <Scoreboard 
      currentScore={currentScore} 
      bestScore={bestScore}
      attempts={attempts}
      />
      <div className='card-board'>
        {gameStatus === 'playing' && displayNums.map(displayNum => {
          return (
            <Card 
            key={displayNum} 
            currentScore={currentScore} 
            setCurrentScore={setCurrentScore} 
            displayNum={displayNum} 
            selectedNums={selectedNums} setSelectedNums={setSelectedNums} 
            bestScore={bestScore} 
            setBestScore={setBestScore}
            attempts={attempts}
            setAttempts={setAttempts}
            setGameStatus={setGameStatus}
            />
          )
        })}
      </div>
      {gameStatus === 'lost' && <button onClick={() => setGameStatus('playing')}>Reset</button>}
      {gameStatus === 'won' && <button onClick={() => setGameStatus('playing')}>Reset</button>}
    </div>
  )
}

export default App

export default function Card({ currentScore, setCurrentScore, displayNum, selectedNums, setSelectedNums, bestScore, setBestScore, attempts, setAttempts, setGameStatus }) {

  const handleClick = () => {

    if (selectedNums.includes(displayNum)) {
      if (bestScore < currentScore) {
        setBestScore(currentScore)
      }

      setCurrentScore(0)
      setSelectedNums([])
      setAttempts(prev => prev + 1)
      setGameStatus('lost')
    } else {
      setSelectedNums(prev => [...prev, displayNum])
      setCurrentScore(prev => prev + 1)      
    }
  }

  if (selectedNums.length === 6) {
    setBestScore(0)
    setAttempts(attempts + 1)
    setGameStatus('won')
    setSelectedNums([])
  } 

  return (
    <button onClick={handleClick}>
      <p>{displayNum}</p>
    </button>
  )
}
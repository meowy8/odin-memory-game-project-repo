export default function Card({ currentScore, setCurrentScore, displayNum, selectedNums, setSelectedNums, bestScore, setBestScore }) {

  const handleClick = () => {
    if (selectedNums.includes(displayNum)) {
      if (bestScore < currentScore) {
        setBestScore(currentScore)
      }

      setCurrentScore(0)
      setSelectedNums([])
    } else {
      setSelectedNums(prev => [...prev, displayNum])
      setCurrentScore(prev => prev + 1)      
    }
  }

  return (
    <button onClick={handleClick}>
      <p>{displayNum}</p>
    </button>
  )
}
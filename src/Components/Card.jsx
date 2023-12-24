export default function Card({ setCurrentScore, displayNums }) {
  const handleClick = () => {
    setCurrentScore(prev => prev + 1)
  }

  return (
    <button onClick={handleClick}>
      <p>{displayNums}</p>
    </button>
  )
}
export default function Scoreboard({ currentScore, bestScore }) {
  return (
    <div>
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  )
}
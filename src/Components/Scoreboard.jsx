export default function Scoreboard({ currentScore, bestScore, attempts }) {
  return (
    <div className="scoreboard">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
      <p>Attempts: {attempts}</p>
    </div>
  )
}
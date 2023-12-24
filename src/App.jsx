import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [ currentScore, setCurrentScore ] = useState(0)
  const [ bestScore, setBestScore ] = useState(0)

  return (
    <div>
      {images.forEach(image => {
        return <Card imgSrc={image.src}/>
      })}
    </div>
  )
}

export default App

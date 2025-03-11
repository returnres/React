import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './LoginForm.jsx'
import Demo from './Demo.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import './index.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Demo name="Robbe"/>
      <LoginForm />
      <div className="app">
      
      <Card title="Card con testo">
        <p>Questo è un semplice paragrafo all'interno della Card.</p>
        <p>Possiamo inserire qualsiasi contenuto come children!</p>
      </Card>
      
      <Card title="Card con elementi misti">
        <h3>Sottotitolo</h3>
        <p>Possiamo inserire testo, immagini, o altri componenti React.</p>
        <Button>Cliccami!</Button>
      </Card>
      
      <Card title="Card con componenti annidati">
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
          <Button>Pulsante Uno</Button>
          <Button>Pulsante Due</Button>
          <Button>Pulsante Tre</Button>
        </div>
      </Card>
    </div>
    </>
  )
}

export default App

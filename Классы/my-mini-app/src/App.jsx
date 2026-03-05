import { useState } from 'react'
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
    WebApp.ready()
    const user = WebApp.initDataUnsafe.user

    const [userName, setUserName] = useState('')

    function handleClick() {
        alert(`Привет: ${userName}`)
    }

  return (
    <>
        <h1>Привет!!</h1>
        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Введите имя'/>
        <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default App

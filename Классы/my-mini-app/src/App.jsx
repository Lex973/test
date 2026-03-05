import { useState } from 'react'
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
    WebApp.ready()
    const user = WebApp.initDataUnsafe.user
    console.log('user: ', user)

    function handleClick() {
        alert('clicked')
    }
  return (
    <>
        <h1>Привет!!</h1>
        <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default App

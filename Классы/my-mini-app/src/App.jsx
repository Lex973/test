import { useState } from 'react'
import './App.css'
import WebApp from '@twa-dev/sdk'

function App() {
    WebApp.ready()
    const user = WebApp.initDataUnsafe.user
    console.log(user)
  return (
    <>
        <h1>Привет!!!</h1>
    </>
  )
}

export default App

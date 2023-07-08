import { useState } from 'react'
import './App.css'
import MenuBar from './components/MenuBar'
import MonacoEditor from './components/Editor/MonacoEditor'

function App() {
  return (
    <>
      <MenuBar />
      <MonacoEditor />
    </>
  )
}

export default App

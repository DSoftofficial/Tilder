import { useState } from 'react'
import './App.css'
import MenuBar from './components/MenuBar/MenuBar'
import MonacoEditor from './components/Editor/MonacoEditor'
import SideBar from './components/SideBar/SideBar'
import ReviewBar from './components/ReviewBar/ReviewBar'
import StatusBar from './components/StatusBar/StatusBar'


function App() {
  return (
    <>
      <MenuBar />
      <div className='mainsect'>
        <ReviewBar/>
        <MonacoEditor />
        <SideBar />
      </div>
      <StatusBar/>
    </>
  )
}

export default App

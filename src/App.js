import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import BoardFrame from './components/boardframe/BoardFrame'
import { MainContextProvider } from './components/MainContextProvider'
import Ribbon from './components/ribbon/Ribbon'
import ToolBox from './components/toolbox/ToolBox'
import FabricTest from './components/board/FabricTest'

function App() {
  return (
    <MainContextProvider>
      <Ribbon />
      <ToolBox />
      <FabricTest />
      {/* <BoardFrame /> */}
    </MainContextProvider>
  )
}

export default App

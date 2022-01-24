import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import BoardFrame from './components/boardframe/BoardFrame'
import Ribbon from './components/ribbon/Ribbon'
import ToolBox from './components/toolbox/ToolBox'
import FabricTest from './components/board/FabricTest'

function App() {
  return (
    <>
      <Ribbon />
      <ToolBox />
      <FabricTest/>
      {/* <BoardFrame /> */}
    </>
  )
}

export default App

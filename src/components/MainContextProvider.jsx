import React, { createContext, useState } from 'react'

export const MainContext = createContext()

export const ToolsEnum = Object.freeze({
  FREE_DRAWING: 20,
  ERASER: 1,
  SELECT: 2,
  STICKY_NOTE: 3,
  SHAPES_DRAWING: 12,
  IMAGE: 4,
  TEXTBOX: 5,
  LASER: 6,
})

export function MainContextProvider({ children }) {
  // CANVAS MAIN
  const [canvas, setCanvas] = useState(null)
  const [imgURL, setImgURL] = useState('')
  const [undo, setUndo] = useState([]) //TODO: implement Polygon Undo
  const [redo, setRedo] = useState([])
  // TOOLBOX
  const [colorPicked, setColorPicked] = useState('#222121')
  const [brushSize, setBrushSize] = useState(10)
  const [eraserSize, setEraserSize] = useState(10)
  const [currentTool, setCurrentTool] = useState(ToolsEnum.SELECT)
  const [penMode, setPenMode] = useState('pen')
  const [shapeKind, setShapeKind] = useState('circle')

  return (
    <MainContext.Provider
      // prettier-ignore
      value={{
        canvas, setCanvas,
        imgURL, setImgURL,
        undo, setUndo,
        redo, setRedo, //
        colorPicked, setColorPicked,
        brushSize, setBrushSize,
        eraserSize, setEraserSize,
        currentTool, setCurrentTool,
        penMode, setPenMode,
        shapeKind, setShapeKind,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

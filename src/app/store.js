import { configureStore } from '@reduxjs/toolkit'
// import canvasReducer from '../features/canvas/canvasSlice'
import undoReducer from '../features/undo/undoSlice'
import redoReducer from '../features/redo/redoSlice'
import colorPickedReducer from '../features/colorPicked/colorPickedSlice'
import brushSizeReducer from '../features/brushSize/brushSizeSlice'
import eraserSizeReducer from '../features/eraserSize/eraserSizeSlice'
import penModeReducer from '../features/penMode/penModeSlice'
import shapeKindReducer from '../features/shapeKind/shapeKindSlice'
import currentToolReducer from '../features/currentTool/currentToolSlice'

export default configureStore({
  reducer: {
    // canvas: canvasReducer,
    undo: undoReducer,
    redo: redoReducer,
    colorPicked: colorPickedReducer,
    brushSize: brushSizeReducer,
    eraserSize: eraserSizeReducer,
    penMode: penModeReducer,
    shapeKind: shapeKindReducer,
    currentTool: currentToolReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['undo/pushUndo', 'undo/popUndo', 'redo/pushRedo', 'redo/popRedo'],
      },
    }),
})
// https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data

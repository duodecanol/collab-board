import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const undoSlice = createSlice({
  name: 'undo',
  initialState,
  reducers: {
    pushUndo: (state, action) => {
      state.value.push(action.payload)
    },
    popUndo: (state) => {
      state.value.pop()
    },
  },
})

export const { pushUndo, popUndo } = undoSlice.actions

export default undoSlice.reducer

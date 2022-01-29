import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'ss',
}

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setCanvas: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setCanvas } = canvasSlice.actions

export default canvasSlice.reducer

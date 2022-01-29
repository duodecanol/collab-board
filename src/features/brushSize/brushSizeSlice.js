import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 10,
}

export const brushSizeSlice = createSlice({
  name: 'brushSize',
  initialState,
  reducers: {
    setBrushSize: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setBrushSize } = brushSizeSlice.actions

export default brushSizeSlice.reducer

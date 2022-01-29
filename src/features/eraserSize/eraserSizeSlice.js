import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 10,
}

export const eraserSizeSlice = createSlice({
  name: 'eraserSize',
  initialState,
  reducers: {
    setEraserSize: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setEraserSize } = eraserSizeSlice.actions

export default eraserSizeSlice.reducer

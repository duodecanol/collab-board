import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '#222121',
}

export const colorPickedSlice = createSlice({
  name: 'colorPicked',
  initialState,
  reducers: {
    setColorPicked: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setColorPicked } = colorPickedSlice.actions

export default colorPickedSlice.reducer

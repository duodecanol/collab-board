import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const redoSlice = createSlice({
  name: 'redo',
  initialState,
  reducers: {
    pushRedo: (state, action) => {
      state.value.push(action.payload)
    },
    popRedo: (state) => {
      state.value.pop()
    },
  },
})

export const { pushRedo, popRedo } = redoSlice.actions

export default redoSlice.reducer

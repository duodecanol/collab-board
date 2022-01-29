import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'pen',
}

export const penModeSlice = createSlice({
  name: 'penMode',
  initialState,
  reducers: {
    setPenMode: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setPenMode } = penModeSlice.actions

export default penModeSlice.reducer

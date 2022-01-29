import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'circle',
}

export const shapeKindSlice = createSlice({
  name: 'shapeKind',
  initialState,
  reducers: {
    setShapeKind: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setShapeKind } = shapeKindSlice.actions

export default shapeKindSlice.reducer

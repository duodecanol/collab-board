import { createSlice } from '@reduxjs/toolkit'
import { TOOLS } from '../../helpers/toolsEnum'

const initialState = {
  value: TOOLS.SELECT,
}

export const currentToolSlice = createSlice({
  name: 'currentTool',
  initialState,
  reducers: {
    setCurrentTool: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setCurrentTool } = currentToolSlice.actions

export default currentToolSlice.reducer

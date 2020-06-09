import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaved: false
}

export const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state.initalState = action.payload
    }
  }
})
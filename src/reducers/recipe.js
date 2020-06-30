import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaved: false
}

// Will use this later to allow user to save recipes from other users
export const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state.initalState = action.payload
    }
  }
})
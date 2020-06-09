import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  accessToken: ''
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setRecipe: (state, action) => {
      state.initalState = action.payload
    }
  }
})
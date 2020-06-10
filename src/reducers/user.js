import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  accessToken: ''
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true
    },
    logout: () => {
      return initialState
    },
    access: (state, action) => {
      state.accessToken = action.payload
    }
  }
})
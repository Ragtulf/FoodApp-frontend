import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn: false,
  accessToken: '',
  id: ''
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
    },
    userId: (state, action) => {
      state.id = action.payload
    }
  }
})
import { createSlice } from '@reduxjs/toolkit'

// Reducer for loading state
export const ui = createSlice({
  name: 'ui',
  initialState: {
    isLoading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})
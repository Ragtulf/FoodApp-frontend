import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // savedItems: []
  items: [
    {
      id: null,
      isSaved: false
    }
  ]
}

export const recipe = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    add: (state, action) => {
      let allItems = state.items.find((item) => item.id === action.payload)
      state.items.push({ allItems, saved: false })
    },
    save: (state, action) => {
      // const { id, saved } = action.payload
      // state.items.id = isSaved

      let recipeItem = state.items.find((item) => item.id === action.payload)
      if (recipeItem) {
        recipeItem.saved = !recipeItem.saved
        state.items.push(recipeItem)
      }
    }
  }
})
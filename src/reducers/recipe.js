import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: "",
    shortDescription: "",
    ingredients: [],
    directions: "",
    tags: []
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

export const postRecipe = () => {
  const fetchUrl = 'https://grymt-food-app.herokuapp.com/recipes'

  return (dispatch) => {
    fetch(fetchUrl, { method: 'POST' })
      .then((res) => res.json())
      .then((json) => {
        dispatch(recipe.actions.setRecipe(json))
      })
  }
}
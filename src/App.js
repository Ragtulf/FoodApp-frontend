import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { recipe } from './reducers/recipe'
import { user } from './reducers/user'
import { FoodCommunityContent } from './pages/FoodCommunityContent'

// Creating reducer store
const reducer = combineReducers({
  recipe: recipe.reducer,
  user: user.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

// We wrapped all of the content in a provider
// We have all of the content mounted in one component
export const App = () => {

  return (
    <Provider store={store}>
      <FoodCommunityContent />
    </Provider>
  )
}

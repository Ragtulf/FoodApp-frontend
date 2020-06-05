import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { recipe } from './reducers/recipe'
import { Feed } from './pages/Feed'
import { Recipe } from './pages/Recipe'
import { CreateNew } from './pages/CreateNew'
import { Header } from './components/Header/Header'

const reducer = combineReducers({
  recipe: recipe.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/" exact>
            <Feed />
          </Route>

          <Route path="/recipe/:id">
            <Recipe />
          </Route>

          <Route path="/post">
            <CreateNew />
          </Route>

        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

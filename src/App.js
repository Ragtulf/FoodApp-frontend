import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ui } from './reducers/ui'
import { recipe } from './reducers/recipe'
import { user } from './reducers/user'
import { LoadingIndicator } from './components/LoadingIndicator'
import { Feed } from './pages/Feed'
import { Recipe } from './pages/Recipe'
import { CreateNew } from './pages/CreateNew'
import { Header } from './components/Header/Header'
import { SignupForm } from './pages/SignupForm'
import { LoginForm } from './pages/LoginUser'
import { ProfileView } from './pages/ProfileView'
import { TagList } from './pages/TagList'

const reducer = combineReducers({
  recipe: recipe.reducer,
  user: user.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/" exact>
            <LoadingIndicator />
            <Feed />
          </Route>

          <Route path="/recipes/:id">
            <LoadingIndicator />
            <Recipe />
          </Route>

          <Route path="/post">
            <CreateNew />
          </Route>

          <Route path="/signup" exact>
            <SignupForm />
          </Route>

          <Route path="/login" exact>
            <LoginForm />
          </Route>

          <Route path="/profile" exact>
            <LoadingIndicator />
            <ProfileView />
          </Route>

          <Route path="/tags/:tag">
            <TagList />
          </Route>

        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

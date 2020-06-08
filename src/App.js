import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Feed } from './pages/Feed'
import { Recipe } from './pages/Recipe'
import { CreateNew } from './pages/CreateNew'
import { Header } from './components/Header/Header'
import { SignupForm } from './pages/SignupForm'
import { LoginForm } from './pages/LoginUser'

export const App = () => {
  return (
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

        <Route path="/signup">
          <SignupForm />
        </Route>

        <Route path="/login">
          <LoginForm />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

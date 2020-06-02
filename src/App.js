import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Feed } from './pages/Feed'
import { Recipe } from './pages/Recipe'

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>

          <Route path="/" exact>
            <Feed />
          </Route>

          <Route path="/recipe/:id">
            <Recipe />
          </Route>

        </Switch>
      </BrowserRouter>
    </main>
  )
}

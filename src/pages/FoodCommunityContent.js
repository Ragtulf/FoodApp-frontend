import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LoadingIndicator } from '../components/LoadingIndicator'
import { Feed } from './Feed'
import { Recipe } from './Recipe'
import { CreateNew } from './CreateNew'
import { Header } from '../components/Header/Header'
import { SignupForm } from './SignupForm'
import { LoginForm } from './LoginUser'
import { ProfileView } from './ProfileView'
import { TagList } from './TagList'
import { Fab } from '../components/Button/Fab'

export const FoodCommunityContent = () => {
  const loggedIn = useSelector((store) => store.user.loggedIn)

  // We use BrowserRouter to route
  // We use conditional rendering depending on logged in state
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path="/" exact>
          <LoadingIndicator />
          <Feed />
          {loggedIn && <Fab />}
        </Route>

        <Route path="/recipes/:id">
          <LoadingIndicator />
          <Recipe />
          {loggedIn && <Fab />}
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
          <LoadingIndicator />
          <TagList />
          {loggedIn && <Fab />}
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
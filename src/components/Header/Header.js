import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { user } from '../../reducers/user'

export const Header = () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector((store) => store.user.loggedIn)

  // Logs out user
  const handleLogout = () => {
    dispatch(user.actions.logout())
  }

  // Login and signup buttons conditionally rendered depending on if logged in or not.
  // Otherwise profile button and logout button.
  return (
    <Heading>
      <Redirect to="/">
        <Logo src="/assets/o-logo.svg" alt="logo" />
      </Redirect>

      {!loggedIn
        && <UserLog>
          <Redirect
            to="/signup"
            activeStyle={{ display: 'none' }}>
            <LoggedUser>Sign up</LoggedUser>
          </Redirect>

          <Redirect
            to="/login"
            activeStyle={{ display: 'none' }}>
            <LoggedUser>Login</LoggedUser>
          </Redirect>
        </UserLog>}

      {loggedIn
        && <UserLog>
          <LoggedUser
            onClick={handleLogout}>
            Log Out
          </LoggedUser>

          <StyledRedirect
            to="/profile"
            activeStyle={{ display: 'none' }}>
            <ProfileLink src="/assets/profile-icon.svg" alt="Profile" />
          </StyledRedirect>
        </UserLog>}
    </Heading>
  )
}

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Redirect = styled(NavLink)`
  text-decoration: none;
`

const StyledRedirect = styled(NavLink)`
  text-decoration: none;
  height: 26px;

  @media (min-width: 800px) {
    height: 35px;
  }
`

const Logo = styled.img`
  padding: 20px;
  width: 65px;
  height: 65px;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 600px) {
    height: 80px;
    width: 80px;
  }

  @media (min-width: 800px) {
    width: 100px;
    height: 100px;
  }
`

const UserLog = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`

const LoggedUser = styled.button`
  font-family: 'Circular';
  font-size: 12px;
  color: #fff;
  padding: 6px;
  background: #F45647;
  border-radius: 1px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #FF9684;
  }

  @media (min-width: 800px) {
    font-size: 14px;
  }
`

const ProfileLink = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 0 0 15px;

  @media (min-width: 800px) {
    width: 35px;
    height: 35px;
    transition: 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`
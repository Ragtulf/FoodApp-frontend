import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { user } from '../../reducers/user'

export const Header = () => {
  const dispatch = useDispatch()
  const loggedIn = useSelector((store) => store.user.loggedIn)

  const handleLogout = () => {
    dispatch(user.actions.logout())
  }

  return (
    <Heading>
      <Redirect to="/">
        <Logo src="/assets/logo.svg" alt="logo" />
      </Redirect>

      {!loggedIn
        && <UserLog>
          <Redirect to="/signup">
            <LoggedUser>Sign up</LoggedUser>
          </Redirect>

          <Redirect to="/login">
            <LoggedUser>Login</LoggedUser>
          </Redirect>
        </UserLog>
      }

      {loggedIn
      && <UserLog>
        <LoggedUser
          onClick={handleLogout}>
            Log Out
        </LoggedUser>

        <Redirect to="/profile">
          {/* <LoggedUser>Profile</LoggedUser> */}
          <ProfileLink src="/assets/profile-icon.svg" alt="Profile" />
        </Redirect>
      </UserLog>}
    </Heading>
  )
}

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Redirect = styled(Link)`
  text-decoration: none;
`

const Logo = styled.img`
  padding: 20px;
  width: 45px;
  height: 45px;
`

const UserLog = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 12px;
`

const LoggedUser = styled.button`
  font-size: 12px;
  color: #fff;
  padding: 6px;
  background: #F26A5D;
  border-radius: 6px;
  margin-left: 10px;
  border: none;
`

const ProfileLink = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 15px 0 15px;
`
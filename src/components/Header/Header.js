import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Header = () => {
  return (
    <Heading>
      <Home to="/">
        <Logo src="/assets/logo.svg" alt="logo" />
      </Home>

      <UserLog>
        <LoggedUser>Login</LoggedUser>
        <LoggedUser>Sign up</LoggedUser>
      </UserLog>
    </Heading>
  )
}

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Home = styled(Link)`
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

const LoggedUser = styled.p`
  font-size: 12px;
  color: #fff;
  padding: 6px;
  background: #F26A5D;
  border-radius: 6px;
  margin-left: 10px;
`
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { UserHeader } from '../components/Header/UserHeader'
import { ShareButton } from '../components/Button/ShareButton'

export const ProfileView = () => {
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.accessToken)

  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })

  return (
    <UserContainer>
      <UserHeader />
      <StyledLink to='/post'>
        <ShareButton buttonName="Start sharing" />
      </StyledLink>
    </UserContainer>
  )
}

const UserContainer = styled.div`
  display: flex; 
  flex-direction: column;
  background-color: #fffbfa;
  max-width: 100%;
  margin: 0px 10px;
  border-radius: 20px;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 30px 0;
`
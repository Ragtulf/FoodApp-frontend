import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { UserHeader } from '../components/Header/UserHeader'

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
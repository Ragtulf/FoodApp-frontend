import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

export const UserHeader = () => {
  const [user, setUser] = useState(null)
  const id = useSelector((store) => store.user.id)

  // Fetch user info
  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/login/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json)
      })
  }, [id])

  return (
    <FlexContainer>
      <CardHeading>
        {user && <Avatar src={user && user.profilePic ? user.profilePic : `/Avatars2/avatars${user.avatar}.svg`} alt="avatar" />}
        <UserInfo>
          {user && <Username>{user.userName}</Username>}
          {user && <Bio>{user.shortBio}</Bio>}
        </UserInfo>
      </CardHeading>
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  display: flex; 
  flex-direction: column;
  max-width: 100%;
`

const Avatar = styled.img`
  width: 106px;
  height: 106px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px;
`

const CardHeading = styled.div`
  display: flex;

  @media (min-width: 600px) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 800px) {
    width: 50%;
  }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Username = styled.p`
  font-weight: 900;
  font-size: 18px;
  color: #295284;
  margin: 17px 0 0 0;
`

const Bio = styled.p`
  font-size: 11px;
  color: #4F6E93;
  margin: 5px 0 0 0;
`
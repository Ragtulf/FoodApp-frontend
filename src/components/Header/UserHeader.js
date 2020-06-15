import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

export const UserHeader = () => {
  const [user, setUser] = useState(null)
  const id = useSelector((store) => store.user.id)
  // const loggedIn = useSelector((store) => store.user.loggedIn)
  // const profilePic = useSelector((store) => store.user.image)

  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/login/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log('UserHeader:', json)
        setUser(json)
        console.log(id)
        console.log(json)
        // console.log(profilePic)
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

// {item.createdBy && item.createdBy.profilePic ? item.createdBy.profilePic : `/Avatars2/avatars${item.createdBy.avatar}.svg`}

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
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Username = styled.p`
  font-size: 18px;
  color: #31556D;
  margin: 17px 0 0 0;
`

const Bio = styled.p`
  font-size: 11px;
  color: #A4A4A4;
  margin: 5px 0 0 0;
`
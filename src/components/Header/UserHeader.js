import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ShareButton } from '../Button/ShareButton'


export const UserHeader = () => {
  const [user, setUser] = useState(null)
  const id = useSelector((store) => store.user.id)
  // const loggedIn = useSelector((store) => store.user.loggedIn)

  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/login/user/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json)
        console.log(id)
        console.log(json)
      })
  }, [id])

  return (
    <TopCardContainer>
      <CardHeading>
        <Avatar src="/Avatars/Asset1.svg" alt="avatar" />
        <UserInfo>
          {user && <Username>{user.userName}</Username>}
          {user && <Bio>{user.shortBio}</Bio>}
        </UserInfo>
      </CardHeading>
      <StyledLink to='/post'>
        <ShareButton buttonName="Start sharing" />
      </StyledLink>
    </TopCardContainer>
  )
}

const TopCardContainer = styled.div`
  display: flex; 
  flex-direction: column;
  background-color: #fffbfa;
  max-width: 100%;
  margin: 0px 10px;
  border-radius: 20px;
`

const Avatar = styled.img`
  width: 106px;
  padding: 10px;
`

const CardHeading = styled.div`
  display: flex;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  margin: 30px 0;
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
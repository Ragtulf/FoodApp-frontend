import React from 'react'
import styled from 'styled-components/macro'

export const CardHeader = ({ title, image, shortDes, userName, profilePic }) => {
  console.log(profilePic)
  return (
    <TopCardContainer>
      <CardHeading>
        <Avatar src={profilePic} alt="avatar" />
        <TitleName>
          <RecipeTitle>{title}</RecipeTitle>
          <User>{userName}</User>
        </TitleName>
      </CardHeading>
      <FoodImage src={image} alt={title} />
      <Description>{shortDes}</Description>
    </TopCardContainer>
  )
}

const TopCardContainer = styled.div`
  display: flex; 
  flex-direction: column;
  background-color: #fffbfa;
  max-width: 100%;
  margin: 0px 10px;
  border-radius: 20px 20px 0px 0px;
`

const Avatar = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px;
`

const CardHeading = styled.div`
  display: flex;
`

const TitleName = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

const RecipeTitle = styled.p`
  font-size: 18px;
  color: #31556D;
  margin: 17px 0 0 0;
`

const User = styled.p`
  font-size: 11px;
  color: #A4A4A4;
  margin: 5px 0 0 0;
`

const FoodImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  align-self: flex-end;
`

const Description = styled.p`
  font-size: 14px;
  color: #31556D;
  padding: 10px 10px 0 10px;
  background-color: #fffbfa;
  margin: 0px 10px;
`
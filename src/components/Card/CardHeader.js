import React from 'react'
import styled from 'styled-components/macro'

export const CardHeader = ({ title, image, shortDes, userName, profilePic }) => {
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
  border-top: 2px solid #FECAC1;
  border-right: 2px solid #FECAC1;
  border-left: 2px solid #FECAC1;
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
  font-weight: 900;
  font-size: 18px;
  color: #295284;
  margin: 17px 0 0 0;
`

const User = styled.p`
  font-weight: 300;
  font-size: 11px;
  color: #4F6E93;
  margin: 3px 0 0 0;
`

const FoodImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  align-self: flex-end;

  @media (min-width: 800px) {
    max-height: 250px;
  }
`

const Description = styled.p`
  font-size: 14px;
  color: #4F6E93;
  padding: 15px 10px 0 10px;
  background-color: #fffbfa;
  margin: 0px 10px;

  @media (min-width: 800px) {
    height: 40px;
  }
`
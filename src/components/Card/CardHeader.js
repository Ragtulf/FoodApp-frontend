import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const CardHeader = ({ title, image, recipeId }) => {
  return (
    <TopCardContainer>
      <StyledLink to={`/recipe/${recipeId}`}>
        <CardHeading>
          <Avatar src="/Avatars/Asset1.svg" alt="avatar" />
          <TitleName>
            <RecipeTitle>{title}</RecipeTitle>
            <User>Ragnhildur Elín</User>
          </TitleName>
        </CardHeading>
        <FoodImage src={image} alt={title} />
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
  border-radius: 20px 20px 0px 0px;
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const Avatar = styled.img`
  width: 55px;
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
  align-self: flex-end;
`
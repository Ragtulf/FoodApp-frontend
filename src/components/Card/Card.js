import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

import { CardHeader } from './CardHeader'
import { CompleteRecipe } from './CompleteRecipe'

export const Card = ({ recipeId, title, image, shortDiscr, tagsArray, ingredientsArray, directions }) => {
  console.log('IngredientsArray:', ingredientsArray)
  return (
    <RecipeCard>
      <StyledLink to={`/recipe/${recipeId}`}>
        <CardHeader title={title} />
        <FoodImage src={image} alt={title} />
        <Description>{shortDiscr}</Description>
        {directions && <CompleteRecipe ingredientsArray={ingredientsArray} directions={directions} />}
      </StyledLink>
      {/* <TagContainer>
        {tagsArray.tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </TagContainer> */}
    </RecipeCard>
  )
}

const RecipeCard = styled.article`
  max-width: 100%;
  background-color: #fffbfa;
  border-radius: 20px;
  margin: 0px 10px 20px 10px;
`

const FoodImage = styled.img`
  width: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Description = styled.p`
  font-size: 14px;
  color: #31556D;
  padding: 0 10px;
  margin: 10px 0 0 0;
`

const TagContainer = styled.div`
  width: 100%; 
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  margin-left: 10px;
`

const Tag = styled.p`
  font-size: 12px;
  background-color: #f5aa9c;
  color: #fff;
  padding: 5px;
  border-radius: 2px;
  margin-right: 10px;
`


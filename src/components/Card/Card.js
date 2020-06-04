import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

import { CardHeader } from './CardHeader'
import { CompleteRecipe } from './CompleteRecipe'

export const Card = ({ recipeId, title, image, ingredientsArray, directions }) => {
  console.log('IngredientsArray:', ingredientsArray)
  return (
    <RecipeCard>
      <CardHeader title={title} image={image} recipeId={recipeId} />
      
      {directions && <CompleteRecipe ingredientsArray={ingredientsArray} directions={directions} />}
    </RecipeCard>
  )
}

const RecipeCard = styled.article`
  max-width: 100%;
  background-color: #fffbfa;
  border-radius: 20px;
  margin: 0px 10px 20px 10px;
`
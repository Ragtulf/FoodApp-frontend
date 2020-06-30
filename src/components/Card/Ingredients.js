import React from 'react'
import styled from 'styled-components/macro'

// Middle part of the recipe card in recipe view
export const IngredientsList = ({ ingredientArray }) => {
  return (
    <IngredientsContainer>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      {ingredientArray.ingredients.map((item, index) => (
        <IngredientsItem key={index}>{item}</IngredientsItem>
      ))}
    </IngredientsContainer>
  )
}

const IngredientsContainer = styled.div`
  font-size: 14px;
  color: #31556D;
  padding: 10px 10px 10px 20px;
  background-color: #fffbfa;
  margin: -1px 10px 0 10px;
  border-right: 2px solid #FECAC1;
  border-left: 2px solid #FECAC1;
`

const IngredientsTitle = styled.h3`
  padding: 8px 0;
  margin: 10px 0;
  width: 120px;
  border-bottom: 2px dotted #31556D;
`

const IngredientsItem = styled.p`
  margin-left: 20px;
`
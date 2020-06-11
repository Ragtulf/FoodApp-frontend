import React from 'react'
import styled from 'styled-components/macro'

export const IngredientsList = ({ ingredientArray }) => {
  return (
    <IngredientsContainer>
      <h3>Ingredients</h3>
      {ingredientArray.ingredients.map((item, index) => (
        <p key={index}>{item}</p>
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
`
import React from 'react'
import styled from 'styled-components/macro'

export const CompleteRecipe = ({ ingredientsArray, directions }) => {
  return (
    <div>
      {/* {ingredientsArray.ingredients.map((ingredient) => (
        <Ingredient>{ingredient}</Ingredient>
      ))} */}
      <div>
        <p>
          {directions}
        </p>
      </div>
    </div>
  )
}

const Ingredient = styled.p`
  font-size: 12px;
`
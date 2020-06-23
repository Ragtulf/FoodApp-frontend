import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RecipeHeader } from '../components/Card/RecipeHeader'
import { IngredientsList } from '../components/Card/Ingredients'
import { Directions } from '../components/Card/Directions'
import { CardFooter } from '../components/Card/CardFooter'
import { Fab } from '../components/Button/Fab'
import styled from 'styled-components/macro'

export const Recipe = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()
  const recId = recipeId || id
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.accessToken)

  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })

  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/recipes/${recId}`)
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json)
      })
  }, [id])

  return (
    <ContentContainer>
      <RecipeDiv>
        {recipe && <RecipeHeader
          profilePic={recipe.createdBy
            && recipe.createdBy.profilePic
            ? recipe.createdBy.profilePic
            : `/Avatars2/avatars${recipe.createdBy.avatar}.svg`}
          title={recipe.title}
          image={recipe.imageUrl}
          shortDes={recipe.shortDescription}
          userName={recipe.createdBy ? recipe.createdBy.userName : 'Anonymous'} />}
        {recipe && <IngredientsList ingredientArray={recipe} />}
        {recipe && <Directions directions={recipe.directions} />}
        {recipe && <CardFooter tagsArray={recipe} />}
      </RecipeDiv>
      {/* <Fab /> */}
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  margin-bottom: 50px;

  @media (min-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const RecipeDiv = styled.section`
  @media (min-width: 600px) {
    width: 500px;
  }
`
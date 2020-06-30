import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { RecipeHeader } from '../components/Card/RecipeHeader'
import { IngredientsList } from '../components/Card/Ingredients'
import { Directions } from '../components/Card/Directions'
import { RecipeFooter } from '../components/Card/RecipeFooter'
import { ui } from '../reducers/ui'

export const Recipe = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()
  const recId = recipeId || id
  const history = useHistory()
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.accessToken)

  // Go back if not authenticated
  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })

  // Fetch specific recipe by id
  // Loading state until response
  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://grymt-food-app.herokuapp.com/recipes/${recId}`)
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json)
        dispatch(ui.actions.setLoading(false))
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
        {recipe && <RecipeFooter tagsArray={recipe} />}
      </RecipeDiv>
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
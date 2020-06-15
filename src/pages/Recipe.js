import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CardHeader } from '../components/Card/CardHeader'
import { IngredientsList } from '../components/Card/Ingredients'
import { Directions } from '../components/Card/Directions'
import { CardFooter } from '../components/Card/CardFooter'

export const Recipe = () => {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/recipes/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setRecipe(json)
      })
  }, [id])

  return (
    <div>
      {recipe && <CardHeader
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
    </div>
  )
}
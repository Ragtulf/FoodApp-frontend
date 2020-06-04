import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '../components/Card/Card'
import { CardHeader } from '../components/Card/CardHeader'
import { CardFooter } from '../components/Card/CardFooter'

export const Recipe = () => {
  const [recipe, setRecipe] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/recipe/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log('Details:', json)
        setRecipe(json)
      })
  }, [id])

  return (
    <div>
      {recipe && <CardHeader title={recipe.title} image={recipe.image} />}
      {recipe && <CardFooter tagsArray={recipe} />}
      {/* {recipe && <Card
        key={recipe._id}
        recipeId={recipe._id}
        title={recipe.title}
        image={recipe.image}
        shortDiscr={recipe.shortDescription}
        tagsArray={recipe.tags}
        ingredientsArray={recipe.ingredients}
        directions={recipe.directions} />} */}
    </div>
  )
}
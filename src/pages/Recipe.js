import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Card } from '../components/Card/Card'

export const Recipe = () => {
  const [recipe, setRecipe] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/recipe/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log('Details:', json)
        setRecipe(json)
        // console.log('Recipe', recipe)
      })
  }, [id])

  return (
    <div>
      <p>{recipe.title}</p>
      <Card
        key={recipe._id}
        recipeId={recipe._id}
        title={recipe.title}
        image={recipe.image}
        shortDiscr={recipe.shortDescription}
        // tagsArray={recipe}
        // ingredientsArray={recipe}
        directions={recipe.directions} 
        />
    </div>
  )
}
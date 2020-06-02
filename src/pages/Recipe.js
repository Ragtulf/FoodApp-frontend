import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Recipe = () => {
  const [recipe, setRecipe] = useState([])
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
      <p>{recipe.title}</p>
    </div>
  )
}
import React, { useState, useEffect } from 'react'

import { Card } from '../components/Card/Card'
import { Button } from '../components/Button/Button'

export const Feed = () => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch('https://grymt-food-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((json) => {
        console.log('This is json:', json)
        setRecipes(json)
      })
  }, [])

  return (
    <div>
      {recipes.map((item) => (
        <Card
          key={item._id}
          recipeId={item._id}
          title={item.title}
          image={item.image}
          shortDiscr={item.shortDescription}
          tagsArray={item} />))}
      <Button />
    </div>
  )
}
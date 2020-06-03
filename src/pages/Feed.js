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
      {recipes.map((item) => <Card key={item._id} recipe={item} />)}
      <Button />
    </div>
  )
}
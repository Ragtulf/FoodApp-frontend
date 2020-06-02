import React, { useState, useEffect } from 'react'

export const Feed = () => {
  // const [recipe, setRecipe] = useState([])

  useEffect(() => {
    fetch('https://grymt-food-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((json) => {
        console.log('This is json:', json)
      })
  })

  return (
    <div>
      <p>Hej!</p>
    </div>
  )
}
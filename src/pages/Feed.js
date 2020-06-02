import React, { useState, useEffect } from 'react'

export const Feed = () => {
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    fetch('https://grymt-food-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((json) => {
        console.log('This is json:', json)
        setRecipe(json)
      })
  }, [])

  return (
    <div>
      {recipe.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>Ragnhildur Elín</p>
          <img src={item.image} alt={item.title} />
          <p>{item.shortDescription}</p>
          {item.tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
      ))}
    </div>
  )
}
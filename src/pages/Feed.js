import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import { CardHeader } from '../components/Card/CardHeader'
import { CardFooter } from '../components/Card/CardFooter'
import { Button } from '../components/Button/Button'

export const Feed = () => {
  const [recipes, setRecipes] = useState(null)

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
      {recipes && recipes.map((item) => (
        <div>
          <CardHeader title={item.title} image={item.image} recipeId={item._id} />
          <Description>{item.shortDescription}</Description>
          <CardFooter tagsArray={item} />
        </div>))}
      <Button />
    </div>
  )
}

const Description = styled.p`
  font-size: 14px;
  color: #31556D;
  padding: 10px 10px 0 10px;
  background-color: #fffbfa;
  margin: 0px 10px;
`
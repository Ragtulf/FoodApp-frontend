import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import { CardHeader } from '../components/Card/CardHeader'
import { CardFooter } from '../components/Card/CardFooter'
import { Fab } from '../components/Button/Fab'

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
          <StyledLink to={`/recipe/${item._id}`}>
            <CardHeader title={item.title} image={item.image} shortDes={item.shortDescription} />
          </StyledLink>
          <CardFooter tagsArray={item} />
        </div>))}
      <Fab />
    </div>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

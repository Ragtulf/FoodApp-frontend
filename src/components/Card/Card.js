import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'

export const Card = () => {
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
        <RecipeCard>
          <StyledLink to={`/recipe/${item._id}`}>
            {/* <img /> */}
            <p>{item.title}</p>
            <p>Ragnhildur Elín</p>
            <FoodImage src={item.image} alt={item.title} />
            <p>{item.shortDescription}</p>
          </StyledLink>
          <TagContainer>
            {item.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </TagContainer>
        </RecipeCard>
      ))}
    </div>
  )
}

const RecipeCard = styled.article`
  width: 100%;
  background-color: #fffbfa;
  border-radius: 20px;
  margin: 20px 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const FoodImage = styled.img`
  width: 100%;
`

const TagContainer = styled.div`
  width: 100%; 
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  margin-left: 10px;
`

const Tag = styled.p`
  font-size: 12px;
  background-color: #f5aa9c;
  color: #fff;
  padding: 5px;
  border-radius: 2px;
  margin-right: 10px;
`


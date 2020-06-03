import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro'
import { Button } from '../Button/Button'

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
            <CardHeader>
              <Avatar src="Avatars/Asset1.svg" alt="avatar" />
              <TitleName>
                <RecipeTitle>{item.title}</RecipeTitle>
                <User>Ragnhildur Elín</User>
              </TitleName>
            </CardHeader>
            <FoodImage src={item.image} alt={item.title} />
            <Description>{item.shortDescription}</Description>
            {/* <Ingredients /> */}
            {/* <Directions /> */}
          </StyledLink>
          <TagContainer>
            {item.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </TagContainer>
        </RecipeCard>
      ))}
      <Button />
    </div>
  )
}

const RecipeCard = styled.article`
  max-width: 100%;
  background-color: #fffbfa;
  border-radius: 20px;
  margin: 0px 10px 20px 10px;
`
const Avatar = styled.img`
  width: 55px;
  padding: 10px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const FoodImage = styled.img`
  width: 100%;
`

const Description = styled.p`
  font-size: 14px;
  color: #31556D;
  padding: 0 10px;
  margin: 10px 0 0 0;
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
const CardHeader = styled.div`
  display: flex;
`

const TitleName = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

const RecipeTitle = styled.p`
  font-size: 18px;
  color: #31556D;
  margin: 17px 0 0 0;
`

const User = styled.p`
  font-size: 11px;
  color: #A4A4A4;
  margin: 5px 0 0 0;
`
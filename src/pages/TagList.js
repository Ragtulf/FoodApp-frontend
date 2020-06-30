import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Recipe } from './Recipe'
import { ui } from '../reducers/ui'

export const TagList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [tags, setTags] = useState(null)
  const { tag } = useParams()
  const accessToken = useSelector((store) => store.user.accessToken)

  // If not authenticated, go back
  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })

  // Fetching recipes by tags search
  // Loading state until repsonse
  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://grymt-food-app.herokuapp.com/recipes/tags/${tag}`)
      .then((res) => res.json())
      .then((json) => {
        setTags(json)
        dispatch(ui.actions.setLoading(false))
      })
  }, [tag])

  return (
    <div>
      <TagTitle>{tag}</TagTitle>
      {tags && tags.map((recipe) => (
        <div key={recipe._id}>
          <StyledLink to={`/recipes/${recipe._id}`}>
            {recipe && <Recipe recipeId={recipe._id} />}
          </StyledLink>
        </div>
      ))}
    </div>
  )
}

const TagTitle = styled.h1`
  margin-top: 0; 
  color: #8DCAC7;
  text-align: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex:
  flex-direction: column;
  transition: 0.2s ease-in-out;
  
  &:focus {
    outline: 2px solid #F56C54;
  }
`
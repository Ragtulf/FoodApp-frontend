import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { CardHeader } from '../components/Card/CardHeader'
import { CardFooter } from '../components/Card/CardFooter'
import { Fab } from '../components/Button/Fab'
import { recipe } from '../reducers/recipe'

export const Feed = () => {
  const [recipes, setRecipes] = useState(null)
  const loggedIn = useSelector((store) => store.user.loggedIn)
  const itemSave = useSelector((store) => store.recipe.items)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://grymt-food-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((json) => {
        setRecipes(json)
      })
  }, [])

  const handleSaveItem = (_id) => {
    dispatch(
      recipe.actions.save({
        id: _id,
        saved: !itemSave.save
      })
    )
  }

  return (
    <div>
      {recipes && recipes.map((item) => (
        <div key={item._id}>
          {/* <input
            type="checkbox"
            checked={item.saved}
            onChange={() => {handleSaveItem(item._id)}}>
          </input> */}
          {loggedIn &&
            <StyledLink to={`/recipes/${item._id}`}>
              <CardHeader
                title={item.title}
                image={item.imageUrl}
                shortDes={item.shortDescription}
                userName={item.createdBy ? item.createdBy.userName : 'Anonymous'} />
            </StyledLink>}
          {!loggedIn && <CardHeader
            title={item.title}
            image={item.imageUrl}
            shortDes={item.shortDescription}
            userName={item.createdBy ? item.createdBy.userName : 'Anonymous'} />}
          <CardFooter tagsArray={item} />
        </div>))}
      {loggedIn && <Fab />}
    </div>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
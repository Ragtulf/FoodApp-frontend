import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ui } from '../reducers/ui'
import { CardHeader } from '../components/Card/CardHeader'
import { CardFooter } from '../components/Card/CardFooter'
import { Fab } from '../components/Button/Fab'

export const Feed = () => {
  const [recipes, setRecipes] = useState(null)
  const loggedIn = useSelector((store) => store.user.loggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://grymt-food-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setRecipes(json)
        dispatch(ui.actions.setLoading(false))
      })
  }, [])

  return (
    <div>
      {recipes && recipes.map((item) => (
        <div key={item._id}>
          {loggedIn &&
          <StyledLink to={`/recipes/${item._id}`}>
            <CardHeader
              profilePic={item.createdBy && item.createdBy.profilePic ? item.createdBy.profilePic : `/Avatars2/avatars${item.createdBy.avatar}.svg`}
              title={item.title}
              image={item.imageUrl}
              shortDes={item.shortDescription}
              userName={item.createdBy ? item.createdBy.userName : 'Anonymous'} />
          </StyledLink>}
          {!loggedIn && <CardHeader
            profilePic={item.createdBy && item.createdBy.profilePic ? item.createdBy.profilePic : `/Avatars2/avatars${item.createdBy.avatar}.svg`}
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
import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { ui } from '../reducers/ui'
import { CardFeed } from '../components/Card/CardFeed'

export const Feed = () => {
  const [recipes, setRecipes] = useState(null)
  const loggedIn = useSelector((store) => store.user.loggedIn)
  const dispatch = useDispatch()

  // Fetching all of the recipes
  // Loading state until response
  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://grymt-food-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((json) => {
        setRecipes(json)
        dispatch(ui.actions.setLoading(false))
      })
  }, [])

  // SweetAlert if not logged in
  const handleNotLoggedUser = (event) => {
    event.preventDefault()

    swal({
      title: 'Are you hungry?',
      text: 'Log in to see recipes',
      icon: 'info',
      button: {
        text: 'Ok'
      }
    })
  }

  return (
    <FeedContainer>
      {recipes && recipes.map((item) => (
        <div key={item._id}>
          {loggedIn &&
            <CardContainer>
              <StyledLink to={`/recipes/${item._id}`}>
                <CardFeed
                  profilePic={item.createdBy && item.createdBy.profilePic ? item.createdBy.profilePic : `/Avatars2/avatars${item.createdBy.avatar}.svg`}
                  title={item.title}
                  image={item.imageUrl}
                  shortDes={item.shortDescription}
                  userName={item.createdBy ? item.createdBy.userName : 'Anonymous'}
                  tagsArray={item} />
              </StyledLink>
            </CardContainer>}
          {!loggedIn && <CardContainer onClick={handleNotLoggedUser}>
            <CardFeed
              profilePic={item.createdBy && item.createdBy.profilePic ? item.createdBy.profilePic : `/Avatars2/avatars${item.createdBy.avatar}.svg`}
              title={item.title}
              image={item.imageUrl}
              shortDes={item.shortDescription}
              userName={item.createdBy ? item.createdBy.userName : 'Anonymous'}
              tagsArray={item} />
          </CardContainer>}
        </div>))}
    </FeedContainer>
  )
}

const FeedContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const CardContainer = styled.div`
  @media (min-width: 600px) {
    width: 500px;
  }

  @media (min-width: 800px) {
    width: 400px;
    height: 455px;
    min-height: 455px;
    max-height: 100%;
    margin-bottom: 10px;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ui } from '../reducers/ui'
import { CardHeader } from '../components/Card/CardHeader'
import { CardFooter } from '../components/Card/CardFooter'
import swal from 'sweetalert'

export const Feed = () => {
  const [recipes, setRecipes] = useState(null)
  const loggedIn = useSelector((store) => store.user.loggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://grymt-food-app.herokuapp.com/recipes')
      .then((res) => res.json())
      .then((json) => {
        setRecipes(json)
        dispatch(ui.actions.setLoading(false))
      })
  }, [])

  const handleNotLoggedUser = event => {
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
                <CardHeader
                  profilePic={item.createdBy && item.createdBy.profilePic ? item.createdBy.profilePic : `/Avatars2/avatars${item.createdBy.avatar}.svg`}
                  title={item.title}
                  image={item.imageUrl}
                  shortDes={item.shortDescription}
                  userName={item.createdBy ? item.createdBy.userName : 'Anonymous'} />
              </StyledLink>
              <CardFooter tagsArray={item} />
            </CardContainer>}
            {!loggedIn && <CardContainer onClick={handleNotLoggedUser}>
            <CardHeader
              profilePic={item.createdBy && item.createdBy.profilePic ? item.createdBy.profilePic : `/Avatars2/avatars${item.createdBy.avatar}.svg`}
              title={item.title}
              image={item.imageUrl}
              shortDes={item.shortDescription}
              userName={item.createdBy ? item.createdBy.userName : 'Anonymous'} />
            <CardFooter tagsArray={item} />
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
    height: 450px;
    min-height: 450px;
    max-height: 100%;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`
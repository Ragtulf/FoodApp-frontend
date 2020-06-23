import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ProfileHeader } from '../components/Header/ProfileHeader'
// import { UserHeader } from '../components/Header/UserHeader'
import { ShareButton } from '../components/Button/ShareButton'
import { Fab } from '../components/Button/Fab'

export const ProfileView = () => {
  const [userRecipe, setUserRecipe] = useState(null)
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.accessToken)
  const userID = useSelector((store) => store.user.id)

  useEffect(() => {
    if (!accessToken) {
      history.push('/')
    }
  })

  useEffect(() => {
    fetch(`https://grymt-food-app.herokuapp.com/users/${userID}/recipes`)
      .then((res) => res.json())
      .then((json) => {
        console.log('User profile:', json)
        setUserRecipe(json)
      })
  }, [userID])

  return (
    <UserContainer>
      <ProfileHeader />
      <RecipeContainer>
        {userRecipe && userRecipe.map((item) => (
          <StyledLink to={`/recipes/${item._id}`} key={item._id}>
            <RecipeImage src={item.imageUrl} alt={item.title} />
            <RecipeTitle>{item.title}</RecipeTitle>
          </StyledLink>
        ))}
      </RecipeContainer>
      {userRecipe && userRecipe.length === 0
        ? <ShareLink to="/post">
          <ShareButton buttonName="Start sharing" />
        </ShareLink>
        : <Fab />}
    </UserContainer>
  )
}

const UserContainer = styled.div`
  display: flex; 
  flex-direction: column;
  background-color: #fffbfa;
  max-width: 100%;
  margin: 0px 10px 60px 10px;
  border: 2px solid #FECAC1;

  @media (min-width: 600px) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 800px) {
    width: 70%;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 30px 5px;
  width: 125px;

  @media (min-width: 600px) {
    width: 200px;
  }
`

const RecipeTitle = styled.p`
  color: #31556D;
  font-size: 12px;
  font-weight: 700;
  overflow-wrap: break-word;
  margin-top: 5px;
  text-align: left;
  align-self: flex-start;

  @media (min-width: 600px) {
    margin: 3px 0;
  }
`

const RecipeImage = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 2px;
  object-fit: cover;

  @media (min-width: 600px) {
    width: 200px;
    height: 200px;
  }
`

const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 30px;

  @media (min-width: 600px) {
    justify-content: space-evenly;
  }
`

const ShareLink = styled(Link)`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 30px 5px;
`
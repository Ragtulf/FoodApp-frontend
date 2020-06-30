import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

// Card for each recipe in feed
export const CardFeed = ({ title, image, shortDes, userName, profilePic, tagsArray }) => {
  return (
    <TopCardContainer>
      <CardHeading>
        <Avatar src={profilePic} alt="avatar" />
        <TitleName>
          <RecipeTitle>{title}</RecipeTitle>
          <User>{userName}</User>
        </TitleName>
      </CardHeading>
      <FoodImage src={image} alt={title} />
      <Description>{shortDes}</Description>
      <TagContainer>
        {tagsArray.tags.map((tag, index) => (
          <StyledLink to={`/tags/${tag}`} key={index}>
            <Tag>{tag}</Tag>
          </StyledLink>
        ))}
      </TagContainer>
    </TopCardContainer>
  )
}

const TopCardContainer = styled.div`
  display: flex; 
  flex-direction: column;
  background-color: #fffbfa;
  max-width: 100%;
  margin: 0px 10px 20px 10px;
  border: 2px solid #FECAC1;

  transition: 0.2s ease-in-out;

  &:hover {
    border-color: #F45647;
  }
`

const Avatar = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px;
`

const CardHeading = styled.div`
  display: flex;
  margin: 5px 0;
`

const TitleName = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

const RecipeTitle = styled.p`
  font-weight: 900;
  font-size: 18px;
  color: #295284;
  margin: 17px 0 0 0;
  text-transform: capitalize;
`

const User = styled.p`
  font-weight: 300;
  font-size: 11px;
  color: #4F6E93;
  margin: 3px 0 0 0;
`

const FoodImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  align-self: flex-end;

  @media (min-width: 800px) {
    max-height: 250px;
  }
`

const Description = styled.p`
  font-size: 14px;
  color: #4F6E93;
  padding: 15px 10px 0 10px;
  background-color: #fffbfa;
  margin: 0px 10px;

  @media (min-width: 800px) {
    height: 40px;
  }
`

const TagContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 5px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Tag = styled.p`
  font-size: 12px;
  background-color: #EBA661;
  color: #fff;
  padding: 5px;
  border-radius: 2px;
  margin-right: 10px;
  text-transform: lowercase;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #F0CA90;
  }

`
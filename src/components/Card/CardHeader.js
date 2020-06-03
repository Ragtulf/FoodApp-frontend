import React from 'react'
import styled from 'styled-components/macro'

export const CardHeader = ({ title }) => {
  return (
    <CardHeading>
      <Avatar src="Avatars/Asset1.svg" alt="avatar" />
      <TitleName>
        <RecipeTitle>{title}</RecipeTitle>
        <User>Ragnhildur Elín</User>
      </TitleName>
    </CardHeading>
  )
}

const Avatar = styled.img`
  width: 55px;
  padding: 10px;
`

const CardHeading = styled.div`
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
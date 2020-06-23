import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const CardFooter = ({ tagsArray }) => {
  return (
      <TagContainer>
        {tagsArray.tags.map((tag, index) => (
          <StyledLink to={`/tags/${tag}`} key={index}>
            <Tag>{tag}</Tag>
          </StyledLink>
        ))}
      </TagContainer>
  )
}

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
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const CardFooter = ({ tagsArray }) => {
  return (
    <Footer>
      <TagContainer>
        {tagsArray.tags.map((tag, index) => (
          <StyledLink to={`/tags/${tag}`} key={index}>
            <Tag>{tag}</Tag>
          </StyledLink>
        ))}
      </TagContainer>
    </Footer>
  )
}

const Footer = styled.div`
  padding: 5px;
  margin: -1px 10px 20px 10px;
  max-width: 100%;
  background-color: #fffbfa;
  border-bottom: 2px solid #FECAC1;
  border-right: 2px solid #FECAC1;
  border-left: 2px solid #FECAC1;
`

const TagContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
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
`
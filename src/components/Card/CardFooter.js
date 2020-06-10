import React from 'react'
import styled from 'styled-components/macro'

export const CardFooter = ({ tagsArray }) => {
  return (
    <Footer>
      <TagContainer>
        {tagsArray.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagContainer>
    </Footer>
  )
}

const Footer = styled.div`
  padding: 5px;
  margin: -1px 10px 20px 10px;
  border-radius: 0px 0px 20px 20px;
  max-width: 100%;
  background-color: #fffbfa;
`
const TagContainer = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
`

const Tag = styled.p`
  font-size: 12px;
  background-color: #f5aa9c;
  color: #fff;
  padding: 5px;
  border-radius: 2px;
  margin-right: 10px;
`
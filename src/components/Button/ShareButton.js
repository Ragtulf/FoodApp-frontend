import React from 'react'
import styled from 'styled-components/macro'

export const ShareButton = ({ buttonName }) => {
  return (
    <ShareBtn
      type="submit">
      {buttonName}
    </ShareBtn>
  )
}

const ShareBtn = styled.button`
  font-family: 'Circular', sans-serif;
  font-size: 17px;
  font-weight: bold;
  background: #8DCAC7;
  border-radius: 2px;
  color: #FFFBFA;
  border: none;
  padding: 8px;
  letter-spacing: .5px;
  margin: 40px 5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #A7E4E1;
  }


  &:active, :focus {
    outline: 2px solid #409D99;
  }
`
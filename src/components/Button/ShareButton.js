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
  font-family: 'Roboto', sans-serif;
  font-size: 17px;
  font-weight: bold;
  background: #8DCAC7;
  border-radius: 7px;
  color: #FFFBFA;
  border: none;
  padding: 8px;
  letter-spacing: .5px;
  margin: 20px 5px 40px 5px;
`
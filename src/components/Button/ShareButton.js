import React from 'react'
import styled from 'styled-components/macro'

export const ShareButton = ({ onSubmit, buttonName }) => {

  return (
    <ShareBtn
      type='submit'
      onSubmit={onSubmit}
    >{buttonName}</ShareBtn>
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
  margin: 5px;
`
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Button = () => {
  return (
    <Link to="/post">
      <FabButton>
        <Plus src="assets/plus.svg" alt="Add button" />
      </FabButton>
    </Link>
  )
}

const FabButton = styled.div`
  background-color: #FF69C6;
  border-radius: 50%;
  position: fixed;
  bottom: 15px;
  right: 15px;
  margin: 10px;
  height: 50px;
  width: 50px;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
`

const Plus = styled.img`
  align-self: center;
`
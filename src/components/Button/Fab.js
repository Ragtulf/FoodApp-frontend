import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Fab = () => {
  return (
    <Link to="/post">
      <FabButton>
        <Plus src="/assets/plus.svg" alt="Add button" />
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
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.11),
  0 5px 8px rgba(0, 0, 0, 0.123),
  0 9px 14px rgba(0, 0, 0, 0.144);
  display: flex;
  justify-content: center;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #FF2EAF;
  }
`

const Plus = styled.img`
  align-self: center;
`
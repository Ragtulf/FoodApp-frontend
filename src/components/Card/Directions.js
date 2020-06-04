import React from 'react'
import styled from 'styled-components/macro'

export const Directions = ({ directions }) => {
  return (
    <DirectionsComponent>
      <h3>Directions</h3>
      <p>{directions}</p>
    </DirectionsComponent>
  )
}

const DirectionsComponent = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #31556D;
  padding: 10px 10px 10px 20px;
  background-color: #fffbfa;
  margin: -1px 10px 0 10px;
`
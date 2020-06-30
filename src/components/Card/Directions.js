import React from 'react'
import styled from 'styled-components/macro'

// Middle part of the recipe card in recipe view
export const Directions = ({ directions }) => {
  return (
    <DirectionsComponent>
      <StyledH3>Directions</StyledH3>
      <p>{directions}</p>
    </DirectionsComponent>
  )
}

const DirectionsComponent = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #31556D;
  padding: 0px 10px 10px 20px;
  background-color: #fffbfa;
  margin: -1px 10px 0 10px;
  border-right: 2px solid #FECAC1;
  border-left: 2px solid #FECAC1;
`

const StyledH3 = styled.h3`
  padding: 8px 0;
  margin: -1px 0 10px 0;
  width: 120px;
  border-bottom: 2px dotted #31556D;
`
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro'

export const LoadingIndicator = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    <>
      {isLoading &&
        <StyledDiv>
          <LoadingGif src={process.env.PUBLIC_URL + '/loadingNoSpin.gif'} alt="loading" />
        </StyledDiv>
      }
    </>
  )
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  align-items: center;
`
const LoadingGif = styled.img`
  width: 55px;
`
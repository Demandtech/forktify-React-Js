import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <div>Loading</div>
  )
}

const Wrapper = styled.div`
  .spinner {
    margin: 5rem auto;
    text-align: center;

    svg {
      height: 6rem;
      width: 6rem;
      fill: $color-primary;
      animation: rotate 2s infinite linear;
    }
  }
`

export default Loading
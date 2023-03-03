import React from 'react'
import styled from 'styled-components'
import {FaClock} from 'react-icons/fa'

const Details = ({cooking_time, serving}) => {
  return (
    <Wrapper>
       <div className="info">
          <FaClock />
          <p>{cooking_time} Minutes</p>
        </div> 
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  padding: 7.5rem 8rem 3.5rem 8rem;

  .info {
    font-size: 1.65rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 4.5rem;
    }
  }
`

export default Details
import React from 'react'
import styled from 'styled-components'
import {FaArrowRight} from 'react-icons/fa'

const Directions = ({publisher, source_url}) => {
  return (
    <Wrapper>
      <h3>How to cook it</h3>
      <p>
        This recipe was carefully designed and tested by{' '}
        <span >{publisher}</span>. Please check out directions at their website.
      </p>
      <a target='_blank' href={source_url}>Direction <FaArrowRight /></a>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 5rem 10rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-primary);
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  p {
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 3.5rem;
    color: var(--color-grey-dark-2);

    span {
      font-weight: 700;
    }
  }

  a {
    background-image: var(--gradient);
    border-radius: 10rem;
    border: none;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1.25rem 2.25rem;
    text-decoration: none;
    transition: all 0.2s;

    &:hover{
     transform: scale(1.05);
    }
  }
`

export default Directions
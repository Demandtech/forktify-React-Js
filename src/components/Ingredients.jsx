import React from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'
import { getFraction } from '../utils'

const Ingredients = () => {
  const {servings, updateQuantity, ingredients} = useGlobalContext()

  useEffect(() => {
    updateQuantity()
  }, [servings])

  return (
    <Wrapper>
      <h2>Recipe Ingridients</h2>
      <ul>
        {ingredients.map((ing, index) => (
          <li key={index}>
            <FaCheck className='icon' />
            <div className='quantity'>
              {getFraction(ing.quantity)}
            </div>
            <div className='unit'>{ing.unit}</div>
            <div className='desc'>{ing.description}</div>
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  padding: 5rem 8rem;
  font-size: 1.6rem;
  line-height: 1.4;
  background-color: var(--color-grey-light-2);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--color-primary);
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 3rem;
    list-style: none;

    li {
      display: flex;

      .icon {
        height: 2rem;
        width: 2rem;
        color: var(--color-primary);
        margin-right: 1.1rem;
        flex: 0 0 auto;
        margin-top: 0.1rem;
      }

      .quantity {
        margin-right: 0.5rem;
        flex: 0 0 auto;
      }
    }
  }
`

export default Ingredients

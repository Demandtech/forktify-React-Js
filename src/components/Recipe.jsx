import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Recipe = ({ publisher, image_url, title, id, index }) => {
  const { fetchSingleRecipe } = useGlobalContext();
  const [active, setActive] = useState()
  
  return (
    <Wrapper
      
      onClick={() => {
        fetchSingleRecipe(id) 
       
      }}
    >
      <article >
        <figure className='img'>
          <img src={image_url} alt='' />
        </figure>
        <div className='preview-data'>
          <p className='preview-title'>{title}</p>
          <p className='preview-publisher'>{publisher}</p>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.article`
 article {display: flex;
  align-items: center;
  padding: 1.5rem 3.25rem;
  transition: all 0.3s;
  border-right: 1px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-light-1);
    transform: translateY(-2px);
  }

  .img {
    flex: 0 0 5.8rem;
    border-radius: 50%;
    overflow: hidden;
    height: 5.8rem;
    margin-right: 2rem;
    position: relative;
    backface-visibility: hidden;

    &::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        to right bottom,
        var(--color-grad-1),
        var(--color-grad-2)
      );
      opacity: 0.4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      transition: all 0.3s;
    }
  }

  .preview-data {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 2rem;
    row-gap: 0.1rem;
    align-items: center;

    .preview-title {
      grid-column: 1/-1;
      font-size: 1.45rem;
      color: var(--color-primary);
      text-transform: uppercase;
      font-weight: 600;
      text-overflow: ellipsis;
      max-width: 25rem;
      white-space: nowrap;
      overflow: hidden;
    }

    .preview-publisher {
      font-size: 1.15rem;
      color: var(--color-grey-dark-2);
      text-transform: uppercase;
      font-weight: 600;
    }
  }}
`

export default Recipe

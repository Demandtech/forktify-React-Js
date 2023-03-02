import React from 'react'
import styled from 'styled-components'

const Recipe = ({ publisher, image_url, title }) => {
  return (
    <Wrapper className='preview'>
      <figure className='img'>
        <img src={image_url} alt='' />
      </figure>
      <div className='preview-data'>
        <p className='preview-title'>{title}</p>
        <p className='preview-publisher'>{publisher}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  transition: all 0.3s;
  border-right: 1px solid #fff;
  cursor:pointer;

  &:hover {
    background-color: var(--color-grey-light-1);
    transform: translateY(-2px);
  }

  .img {
    flex: 0 0 3.8rem;
    border-radius: 50%;
    overflow: hidden;
    height: 3.8rem;
    margin-right: 1rem;
    position: relative;
    backface-visibility: hidden;

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
      font-size: 1rem;
      color: var(--color-primary);
      text-transform: uppercase;
      font-weight: 600;
      text-overflow: ellipsis;
      max-width: 25rem;
      white-space: nowrap;
      overflow: hidden;
    }

    .preview-publisher {
      font-size: .8rem;
      color: var(--color-grey-dark-2);
      text-transform: uppercase;
      font-weight: 600;
    }
  }
`

export default Recipe

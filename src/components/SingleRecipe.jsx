import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import Loading from './Loading'
import { CiFaceSmile } from 'react-icons/ci'
import Details from './Details'
import Ingridients from './Ingridients'
import Directions from './Directions'

const SingleRecipe = () => {
  const { singleRecipe, isSingleLoading } = useGlobalContext()
  
  const {
    cooking_time,
    id,
    image_url,
    ingredients,
    publisher,
    servings,
    source_url,
    title,
  } = singleRecipe

  if (Object.keys(singleRecipe) == '') {
    return (
      <Wrapper>
        <div className='empty'>
          <CiFaceSmile className='icon' />
          <p>Start by searching for a recipe or an ingredient. Have fun!</p>
        </div>
      </Wrapper>
    )
  }
  if (isSingleLoading) {
    return <Loading />
  }
  return (
    <Wrapper>
      <figure>
        <img src={image_url} alt={title} />
        <h1 className='title'>
          <span>{title}</span>
        </h1>
      </figure>
      <Details {...singleRecipe}/>
      <Ingridients {...singleRecipe}/> 
      <Directions {...singleRecipe}/> 
    </Wrapper>
  )
}

const Wrapper = styled.article`
  grid-area: recipe;
  background-color: var(--color-grey-light-1);

  figure {
    height: 32rem;
    position: relative;
    transform:  ;
    transform-origin: top;
    width: 100%;
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
      opacity: 0.6;
    }

    img {
      width: 100%;
      display: block;
      height: 100%;
      object-fit: cover;
    }
  }

  .title {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 20%) skewY(-6deg);
    color: #fff;
    font-weight: 700;
    font-size: 3.25rem;
    text-transform: uppercase;
    width: 50%;
    line-height: 1.95;
    text-align: center;

    span {
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
      padding: 1.3rem 2rem;
      background-image: linear-gradient(
        to right bottom,
        var(--color-grad-1),
        var(--color-grad-2)
      );
    }

    @media only screen and (max-width: 980px) {
      width: 70%;
    }
  }

  .empty {
    font-size: 2rem;
    text-align: center;
    padding: 4.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .icon{
      font-size: 2rem;
      color: var(--color-primary);
    }
  }
`
export default SingleRecipe

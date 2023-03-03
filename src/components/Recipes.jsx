import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Recipe from './Recipe'
import { useGlobalContext } from '../context'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

export const Recipes = () => {
  const { recipes, isLoading } = useGlobalContext()
  const [page, setPage] = useState(0)
  const [newRecipes, setNewRecipes] = useState([])
  console.log(recipes)

  useEffect(() => {
    if (isLoading) return
    setNewRecipes(recipes[page])
  }, [isLoading, page])

  const nextPage = ()=> {
    setPage(oldPage=> {
      let nextPage = oldPage + 1

      if(nextPage > recipes.length - 1){
        nextPage = recipes.length -1
      }
      return nextPage
    })
  }

  const prevPage = ()=> {
    setPage(oldPage=>{
      let prevPage = oldPage - 1

      if(prevPage < 0){
        prevPage = 0
      }
      return prevPage
    })
  }

  const displayPage = page + 1

  return (
    <Wrapper>
      <div className='result-wrapper'>
        <ul className='recipes'>
          {newRecipes &&
            newRecipes.map((recipe) => <Recipe key={recipe.id} {...recipe} />)}
        </ul>
        {newRecipes && (
          <div className='pagination'>
            {!page == 0 && (
              <button className='prev-btn' onClick={prevPage}>
                <FaArrowLeft />
                page <span> {displayPage - 1}</span>
              </button>
            )}
            {page === recipes.length - 1 ? null : (
              <button className='next-btn' onClick={nextPage}>
                <FaArrowRight /> page <span> {displayPage + 1}</span>
              </button>
            )}
          </div>
        )}
      </div>
      <p className='copyright'>
        &copy; copyright by{' '}
        <a class='twitter-ling' href='https://twitter.com/demandtvs'>
          Rasheed Adekunle {new Date().getFullYear()}
        </a>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  grid-area: list;
  background: white;
  display: flex;
  flex-direction: column;

  .recipes {
    margin-top: 2rem;
  }

  .pagination {
    margin-top: auto;
    padding: 4.5rem 1.5rem;

    &::after {
      content: '';
      display: table;
      clear: both;
    }

    button {
      all: unset;
      gap: 0.5rem;
      cursor: pointer;
      color: var(--color-primary);
      font-size: 1.7rem;
      font-weight: 600;
      background-color: var(--color-grey-light-1);
      padding: 0.8rem 1.2rem;
      border-radius: 10rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      transition: all 0.2s;

      &:hover {
        color: var(--color-grad-2);
        background-color: var(--color-grey-light-2);
      }

      &:focus {
        outline: none;
      }
    }

    .next-btn {
      float: right;
    }
    .prev-btn {
      float: left;
    }
  }

  .copyright {
    color: var(--color-grey-dark-2);
    font-size: 1.2rem;
    padding: 3.5rem;
    margin-top: auto;

    .twitter-link:link,
    .twitter-link:visited {
      color: var(--color-grey-dark-2);
    }
  }
`
export default Recipes

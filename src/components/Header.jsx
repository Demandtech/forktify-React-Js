import { FaSearch, FaEdit, FaBookmark } from 'react-icons/fa'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { useState } from 'react'

export const Header = () => {
  const [query, setquery] = useState('pizza')
  const {fetchRecipes} = useGlobalContext()
  return (
    <Wrapper>
      <img src={logo} alt='logo' className='logo' />
      <form className='search'>
        <input
          value={query}
          onChange={(e)=> setquery(e.target.value)}
          type='text'
          placeholder='Search over 1,000,000 recipes...'
          className='search__field'
        />
        <button className='btn search_btn' onClick={(e)=>{ 
          e.preventDefault()
          fetchRecipes(query)}}>
          <FaSearch />
          SEARCH
        </button>
      </form>
      <div className='menu'>
        <button>
          <FaEdit />
          <span>ADD RECIPE</span>
        </button>
        <button>
          <FaBookmark />
          <span> BOOKMARKS</span>
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  grid-area: head;
  background-color: var(--color-grey-light-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem 1rem 0 0;
  min-height: 6rem;
  padding: 0 2rem;

  .logo {
    height: 2.6rem;
    display: block;
  }

  .search {
    display: flex;
    min-width: 32rem;
    position: relative;
    height: 3.2rem;
    transition: all 0.3s;
    background-color: #fff;
    border-radius: 10rem;

    &:focus-within {
      transform: translateY(-2px);
      box-shadow: 0 0.7rem 3rem var(--color-grey-light-1-shadow);
    }

    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 10rem;
      font-size: 1rem;
      padding-left: 2rem;
      color: inherit;

      &::placeholder {
        color: var(--color-grey-light-3);
      }

      &: focus {
        outline: none;
      }
    }

    button {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 10rem;
      border: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      background-image: var(--gradient);
      color: var(--white);
      padding: 0 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        scale: 1.1;
      }
    }
  }

  .menu {
    display: flex;
    align-items: center;
    height: 100%;

    button {
      all: unset;
      color: var(--color-primary);
      height: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      padding: 0 1rem;
      transition: all 0.3s;

      &:hover {
        background-color: var(--color-grey-light-2);
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    min-width: 100%;
    gap: 1rem;
    padding: 1rem;

    .search {
      min-width: 100%;
      flex-direction: column;
      height: 100px;

      input {
        padding: 0 0 0 1rem;

        &::placeholder {
          font-size: 0.8rem;
        }
      }

      button {
        font-size: 0.8rem;
        padding: 0 0.5rem;
        gap: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 321px) {
    .search {
      height: 80px;
      button {
        font-size: 0.6rem;
        padding: 0 0.5rem;
        gap: 0.5rem;
      }
    }
    .menu {
      button {
        font-size: 0.8rem;
      }
    }
  }
`

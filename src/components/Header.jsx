import { FaSearch, FaEdit, FaBookmark } from 'react-icons/fa'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { useState } from 'react'

export const Header = () => {
  const [query, setquery] = useState('pizza')
  const { fetchRecipes } = useGlobalContext()
  return (
    <Wrapper>
      <img src={logo} alt='logo' className='logo' />
      <form className='search'>
        <input
          value={query}
          onChange={(e) => setquery(e.target.value)}
          type='text'
          placeholder='Search over 1,000,000 recipes...'
          className='search__field'
        />
        <button
          className='btn search_btn'
          onClick={(e) => {
            e.preventDefault()
            fetchRecipes(query)
          }}
        >
          <FaSearch />
          SEARCH
        </button>
      </form>
      <div className='menu'>
        <ul>
          <li>
            <button>
              <FaEdit  className='icon'/>
              <span>ADD RECIPE</span>
            </button>
          </li>
          <li>
            <button>
              <FaBookmark  className='icon'/>
              <span> BOOKMARKS</span>
            </button>
          </li>
        </ul>
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

  .logo {
    margin-left: 4rem;
    height: 4.6rem;
    display: block;
  }

  .search {
    background-color: #fff;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    transition: all 0.3s;

    &:focus-within {
      transform: translateY(-2px);
      box-shadow: 0 0.7rem 3rem var(--color-grey-light-1-shadow);
    }

    input {
      border: none;
      background: none;
      font-family: inherit;
      color: inherit;
      font-size: 1.7rem;
      width: 30rem;

      &::placeholder {
        color: var(--color-grey-light-3);
      }

      &: focus {
        outline: none;
      }

      @media only screen and (max-width: 980px) {
        width: auto;

        &::placeholder {
          color: white;
        }
      }
    }

    button {
      background-image: var(--gradient);
      border-radius: 10rem;
      border: none;
      text-transform: uppercase;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      transition: all 0.2s;
      font-weight: 600;
      font-family: inherit;
      padding: 1.5rem 4rem;
      font-size: 1.4rem;

      &:hover {
        transform: scale(1.05);
      }

      &:focus {
        outline: none;
      }

      .icon {
        height: 2.25rem;
        width: 2.25rem;
      }
    }
  }

  .menu {
    align-self: stretch;
    margin-right: 2.5rem;

    ul {
      list-style: none;
      display: flex;
      height: 100%;

      li {
        position: relative;

        button {
          height: 100%;
          font-family: inherit;
          color: inherit;
          font-size: 1.4rem;
          font-weight: 700;
          text-transform: uppercase;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0 1.5rem;
          transition: all 0.3s;
          display: flex;
          align-items: center;

          .icon {
            height: 2.4rem;
            width: 2.4rem;
            fill: var(--color-primary);
            margin-right: 0.7rem;
            transform: translateY(-1px);
          }

          &:hover {
            background-color: var(--color-grey-light-2);
          }

          &:focus {
            outline: none;
          }
        }
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

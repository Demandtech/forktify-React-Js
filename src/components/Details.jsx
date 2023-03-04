import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegClock, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import {
  CiCirclePlus,
  CiCircleMinus,
  CiBookmark,
  CiBookmarkRemove,
  CiClock1,
  CiClock2,
} from 'react-icons/ci'
import { FiUsers } from 'react-icons/fi'
import { useGlobalContext } from '../context'

const Details = ({ cooking_time, servings, id, bookmark }) => {
  const [serve, setServe] = useState(servings)

  const { setBookmark } = useGlobalContext()

  const increaseServe = () => {
    setServe((oldserve) => oldserve + 1)
  }

  const decreaseServe = () => {
    if (serve > 1) {
      setServe((oldserve) => oldserve - 1)
    } else {
      setServe(1)
    }
  }
  return (
    <Wrapper>
      <div className='info'>
        <CiClock2 className='icon' />
        <div className='info-content'>
          <span className='recipe-minute'>{cooking_time}</span>
          <span className='recipe-minute-text'>Minutes</span>
        </div>
      </div>
      <div className='info'>
        <FiUsers className='icon' />
        <div className='info-content'>
          <span className='recipe-serve'>{serve}</span>
          <span className='recipe-serve-text'>Servings</span>
        </div>

        <div className='info-btns'>
          <button onClick={decreaseServe}>
            <CiCircleMinus className='icon' />
          </button>
          <button onClick={increaseServe}>
            <CiCirclePlus className='icon' />
          </button>
        </div>
      </div>
      <div className='info-bookmark'>
        <button className='bookmark-btn' onClick={() => setBookmark(id)}>
          {bookmark ? (
            <CiBookmarkRemove className='icon' />
          ) : (
            <CiBookmark className='icon' />
          )}
        </button>
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
    gap: 1.6rem;

    &:not(:last-child) {
      margin-right: 4.5rem;
    }
    .info-content {
      transform: translateY(3px);

      .recipe-minute {
        font-weight: 700;
        margin-right: 0.8rem;
      }

      .recipe-serve {
        font-weight: 700;
        margin-right: 0.8rem;
      }
    }
    .icon {
      font-size: 2.7rem;
      color: var(--color-primary);
    }
    .info-btns {
      display: flex;
      gap: 1.5rem;
      transform: translateY(5px);

      button {
        all: unset;
      }
    }
  }

  .info-bookmark {
    background: var(--gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    border-radius: 10rem;
    margin-left: auto;
    margin-right: 1.75rem;
    transition: all .3s;
    cursor: pointer;

    button {
      all: unset;
      .icon {
        font-size: 2.7rem;
        color: var(--white);
        transform: translateY(2px);
      }
    }

    &:hover{
      transform: scale(1.07)
    }
  }
`

export default Details

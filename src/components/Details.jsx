import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegClock, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import { FiUsers } from 'react-icons/fi'
import { useGlobalContext } from '../context'

const Details = ({ cooking_time, servings, id, bookmark}) => {
  const [serve, setServe] = useState(servings)
  
  const { setBookmark} = useGlobalContext()
 
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
        <FaRegClock className='icon' />
        <p>{cooking_time}</p>
        <span>Minutes</span>
      </div>
      <div className='info'>
        <FiUsers className='icon' />
        <p>{serve}</p>
        <span>Servings</span>

        <div className='info-btns'>
          <div>
            <CiCircleMinus className='icon' onClick={decreaseServe} />
          </div>
          <div>
            <CiCirclePlus className='icon' onClick={increaseServe} />
          </div>
        </div>
      </div>
      <div className='bookmark-btn' onClick={()=> setBookmark(id)}>
       {bookmark ? <FaRegBookmark className='icon' /> : <FaBookmark  className='icon'/>}
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
    .icon {
      height: 2.35rem;
      width: 2.35rem;
      color: var(--color-primary);
      margin-right: 1.15rem;
    }

    p {
      margin-right: 0.5rem;
      font-weight: 700;
    }

    .info-btns {
      display: flex;
      margin-left: 1.6rem;
      //transform: translateY(-1px);
      gap: 1rem;
      align-items: center;

      .icon {
        margin: 0;
        color: var(--color-primary);
      }
    }
  }

  .bookmark-btn {
    background: var(--gradient);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    border-radius: 10rem;
    cursor: pointer;
    margin-left: auto;
    margin-right: 1.75rem;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.05);
    }

    .icon {
      height: 2.25rem;
      width: 2.25rem;
      color: var(--white);
    }
  }
`

export default Details

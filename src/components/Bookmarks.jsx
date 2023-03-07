import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import Recipe from './Recipe'
import { AiOutlineWarning } from 'react-icons/ai'
import styled from 'styled-components'

const Bookmarks = () => {
  const { bookmarkList} = useGlobalContext()

 
  
  if (bookmarkList.length < 1) {
    return (
      <Wrapper>
        <p className='empty'>
          <AiOutlineWarning className='icon' />
          <span>No Bookmark yet, find a nice bookmark and add</span>
        </p>
      </Wrapper>
    )
  }
  return (
    <Wrapper>   
        {bookmarkList.map((bookmark, index) => (
          
            <Recipe key={index} {...bookmark} />
          
        ))}    
    </Wrapper>
  )
}
const Wrapper = styled.article`
  position: absolute;
  z-index: 100;
  background: #fff;
  max-width: 400px;
  max-height: 300px;
  overflow:auto;
  top: 98px;
  right: 0;
  transform: translateY(1px);
 
  
  .empty{
   font-size: 2rem;
   display: flex;
   align-items: center;
   padding: 4rem;
   gap: 2rem;
   

   .icon{
    color:var(--color-primary);
    font-size: 4rem;
    
   }

   span{
    text-align: center;
   }
  }

  @media screen and (max-width:980px){
   top: 78px;
  }
`
export default Bookmarks

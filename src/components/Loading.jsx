import React from 'react'
import styled from 'styled-components'
import { FaSpinner } from 'react-icons/fa'
import {InfinitySpin} from 'react-loader-spinner'

const Loading = () => {
  return (
    <Wrapper>
      <div className='spinner'>
        <InfinitySpin  width='200' color='var(--color-primary)'/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .spinner {
    margin: 5rem auto;
    text-align: center;
  }

`

export default Loading
